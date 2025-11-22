<script lang="ts">
	import { onMount } from 'svelte';

	const MAX_ROTATION_DEGREES = 15;

	let cardElement: HTMLDivElement;
	let rotateX = $state(0);
	let rotateY = $state(0);
	let isHovered = $state(false);

	function handleMouseMove(e: MouseEvent) {
		if (!cardElement) return;

		const rect = cardElement.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		// Calculate rotation based on mouse position
		const rotateYValue = ((x - centerX) / centerX) * MAX_ROTATION_DEGREES;
		const rotateXValue = ((centerY - y) / centerY) * MAX_ROTATION_DEGREES;

		rotateX = rotateXValue;
		rotateY = rotateYValue;
	}

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
		rotateX = 0;
		rotateY = 0;
	}
</script>

<div
	class="card-container"
	role="img"
	aria-label="Business card with contact information"
	bind:this={cardElement}
	onmousemove={handleMouseMove}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	style="transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg)"
>
	<div class="card-content">
		<div class="card-front">
			<h2 class="name">Your Name</h2>
			<p class="title">Software Developer</p>
			<div class="contact">
				<p>email@example.com</p>
				<p>github.com/username</p>
			</div>
		</div>
	</div>
</div>

<style>
	.card-container {
		width: 350px;
		height: 200px;
		cursor: pointer;
		transition: transform 0.1s ease-out;
		transform-style: preserve-3d;
		pointer-events: auto;
	}

	.card-content {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		position: relative;
	}

	:global([data-theme='plush']) .card-content {
		background: linear-gradient(135deg, var(--color-plush-secondary), var(--color-plush-bg));
		border: 2px solid var(--color-plush-accent);
	}

	:global([data-theme='sombre']) .card-content {
		background: linear-gradient(135deg, var(--color-sombre-secondary), var(--color-sombre-bg));
		border: 2px solid var(--color-sombre-accent);
	}

	:global([data-theme='brilliant']) .card-content {
		background: linear-gradient(135deg, var(--color-brilliant-secondary), var(--color-brilliant-bg));
		border: 2px solid var(--color-brilliant-accent);
	}

	:global([data-theme='luminous']) .card-content {
		background: linear-gradient(135deg, var(--color-luminous-secondary), var(--color-luminous-bg));
		border: 2px solid var(--color-luminous-accent);
	}

	.card-front {
		text-align: center;
	}

	.name {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		letter-spacing: -0.02em;
	}

	:global([data-theme='plush']) .name {
		color: var(--color-plush-accent);
	}

	:global([data-theme='sombre']) .name {
		color: var(--color-sombre-text);
	}

	:global([data-theme='brilliant']) .name {
		color: var(--color-brilliant-accent);
	}

	:global([data-theme='luminous']) .name {
		color: var(--color-luminous-accent);
	}

	.title {
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
		opacity: 0.8;
	}

	.contact {
		font-size: 0.9rem;
		opacity: 0.7;
		line-height: 1.8;
	}
</style>
