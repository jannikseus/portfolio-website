<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	/**
	 * System Configuration Constants
	 * Fine-tuned values for particle behavior and performance
	 */
	const PARTICLE_SPACING = 3; // Space between particles
	const REPULSION_STRENGTH = Math.pow(80, 2); // Squared for performance
	const VELOCITY_DECAY = 0.85; // Particle movement dampening
	const RETURN_FORCE = 0.25; // Force pulling particles back to origin
	const CELL_SIZE = 80; // Size of spatial partitioning cells

	/**
	 * Particle interface defining properties for each point
	 */
	interface Particle {
		velocityX: number;
		velocityY: number;
		currentX: number;
		currentY: number;
		originalX: number;
		originalY: number;
	}

	let { color = 'rgb(100, 100, 100)' }: { color?: string } = $props();

	let canvasElement: HTMLCanvasElement;
	let containerElement: HTMLDivElement;

	/**
	 * Converts RGB color string to array of RGB values
	 */
	const parseRGBColor = (rgbString: string): number[] => {
		const match = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		return match ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])] : [100, 100, 100];
	};

	onMount(() => {
		if (!browser) return;

		// Device detection for performance optimization
		const isMobile = () => {
			return window.innerWidth <= 768 || 'ontouchstart' in window;
		};

		const canvas = canvasElement;
		const container = containerElement;
		if (!canvas || !container) return;

		const ctx = canvas.getContext('2d', { willReadFrequently: true });
		if (!ctx) return;

		// State variables
		let animationFrameId: number;
		let particleList: Particle[] = [];
		let PARTICLE_COUNT: number;
		let COLS: number;
		let ROWS: number;
		let mouseX: number = -1000;
		let mouseY: number = -1000;
		let isMouseOverField = false;
		let grid: Particle[][][] = [];
		let lastUpdateTime = 0;
		const UPDATE_INTERVAL = 1000 / 60; // Target 60 updates per second

		/**
		 * Initialize the particle system
		 */
		const init = () => {
			resizeCanvas();
			createParticles();
			createGrid();
			animationFrameId = requestAnimationFrame(gameLoop);
		};

		/**
		 * Mouse event handlers
		 */
		const updateMousePosition = (e: MouseEvent) => {
			if (isMobile()) return;
			const rect = container.getBoundingClientRect();
			mouseX = e.clientX - rect.left;
			mouseY = e.clientY - rect.top;
			isMouseOverField = true;
		};

		/**
		 * Canvas resize handler
		 */
		const resizeCanvas = () => {
			const rect = container.getBoundingClientRect();
			canvas.width = rect.width;
			canvas.height = rect.height;

			COLS = Math.ceil(rect.width / PARTICLE_SPACING);
			ROWS = Math.ceil(rect.height / PARTICLE_SPACING);
			PARTICLE_COUNT = COLS * ROWS;

			createParticles();
			createGrid();
		};

		/**
		 * Create initial particle array
		 */
		const createParticles = () => {
			particleList = [];
			for (let index = 0; index < PARTICLE_COUNT; index++) {
				const particle = {
					velocityX: 0,
					velocityY: 0,
					currentX: PARTICLE_SPACING * (index % COLS),
					currentY: PARTICLE_SPACING * Math.floor(index / COLS),
					originalX: PARTICLE_SPACING * (index % COLS),
					originalY: PARTICLE_SPACING * Math.floor(index / COLS)
				};
				particleList.push(particle);
			}
		};

		/**
		 * Create spatial partitioning grid
		 */
		const createGrid = () => {
			const gridCols = Math.ceil(canvas.width / CELL_SIZE);
			const gridRows = Math.ceil(canvas.height / CELL_SIZE);
			grid = Array(gridRows)
				.fill(null)
				.map(() =>
					Array(gridCols)
						.fill(null)
						.map(() => [])
				);
		};

		/**
		 * Update spatial grid with current particle positions
		 */
		const updateGrid = () => {
			// Clear the grid
			for (let i = 0; i < grid.length; i++) {
				for (let j = 0; j < grid[i].length; j++) {
					grid[i][j] = [];
				}
			}

			// Assign particles to grid cells
			for (const particle of particleList) {
				const gridX = Math.floor(particle.currentX / CELL_SIZE);
				const gridY = Math.floor(particle.currentY / CELL_SIZE);
				if (grid[gridY] && grid[gridY][gridX]) {
					grid[gridY][gridX].push(particle);
				}
			}
		};

		/**
		 * Main game loop
		 */
		const gameLoop = (timestamp: number) => {
			animationFrameId = requestAnimationFrame(gameLoop);

			// Update at fixed time intervals
			if (timestamp - lastUpdateTime >= UPDATE_INTERVAL) {
				updateParticlePositions();
				lastUpdateTime = timestamp;
			}

			renderParticles();
		};

		/**
		 * Update particle positions and handle interactions
		 */
		const updateParticlePositions = () => {
			updateGrid();

			// Process particles when mouse is over field (hover interaction)
			if (isMouseOverField && !isMobile()) {
				const gridX = Math.floor(mouseX / CELL_SIZE);
				const gridY = Math.floor(mouseY / CELL_SIZE);

				// Check neighboring cells for mouse interaction
				for (let i = Math.max(0, gridY - 1); i <= Math.min(grid.length - 1, gridY + 1); i++) {
					for (
						let j = Math.max(0, gridX - 1);
						j <= Math.min(grid[0].length - 1, gridX + 1);
						j++
					) {
						for (const particle of grid[i][j]) {
							updateParticle(particle);
						}
					}
				}
			}

			// Apply velocity and return force to all particles
			for (const particle of particleList) {
				particle.currentX +=
					particle.velocityX + (particle.originalX - particle.currentX) * RETURN_FORCE;
				particle.currentY +=
					particle.velocityY + (particle.originalY - particle.currentY) * RETURN_FORCE;
				particle.velocityX *= VELOCITY_DECAY;
				particle.velocityY *= VELOCITY_DECAY;
			}
		};

		/**
		 * Update single particle based on mouse position
		 */
		const updateParticle = (particle: Particle) => {
			const deltaX = mouseX - particle.currentX;
			const deltaY = mouseY - particle.currentY;
			const distance = deltaX * deltaX + deltaY * deltaY;
			const force = -REPULSION_STRENGTH / distance;

			if (distance < REPULSION_STRENGTH) {
				const angle = Math.atan2(deltaY, deltaX);
				particle.velocityX += force * Math.cos(angle);
				particle.velocityY += force * Math.sin(angle);
			}
		};

		/**
		 * Render particles to canvas using optimized pixel manipulation
		 */
		const renderParticles = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			const pixelArray = imageData.data;

			const [r, g, b] = parseRGBColor(color);

			for (const particle of particleList) {
				const x = Math.floor(particle.currentX);
				const y = Math.floor(particle.currentY);
				
				// Bounds check to prevent out-of-bounds array access
				if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
					const pixelIndex = (x + y * canvas.width) * 4;

					pixelArray[pixelIndex] = r;
					pixelArray[pixelIndex + 1] = g;
					pixelArray[pixelIndex + 2] = b;
					pixelArray[pixelIndex + 3] = 180; // Increased opacity for better visibility
				}
			}

			ctx.putImageData(imageData, 0, 0);
		};

		// Initialize system and set up event listeners
		init();

		// Use document-level mouse events to capture movement across the entire page
		document.addEventListener('mousemove', updateMousePosition);
		window.addEventListener('resize', resizeCanvas);

		// Cleanup
		return () => {
			cancelAnimationFrame(animationFrameId);
			document.removeEventListener('mousemove', updateMousePosition);
			window.removeEventListener('resize', resizeCanvas);
		};
	});
</script>

<div bind:this={containerElement} class="absolute inset-0" style="pointer-events: none;">
	<canvas bind:this={canvasElement} class="w-full h-full"></canvas>
</div>
