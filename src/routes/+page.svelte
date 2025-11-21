<script lang="ts">
	import BusinessCard from '$lib/components/BusinessCard.svelte';
	import ParticleField from '$lib/components/ParticleField.svelte';
	import { themeState } from '$lib/stores/theme.svelte';

	// Map themes to particle colors
	const themeColors = {
		plush: 'rgb(233, 30, 140)',
		sombre: 'rgb(102, 102, 102)',
		brilliant: 'rgb(0, 102, 255)',
		luminous: 'rgb(255, 204, 0)'
	};

	$effect(() => {
		// Trigger reactivity when theme changes
		themeState.current;
	});
</script>

<div class="home-container">
	<ParticleField color={themeColors[themeState.current]} />
	<div class="hero-section">
		<BusinessCard />
		<div class="hero-text">
			<h1 class="hero-title">Welcome to My Portfolio</h1>
			<p class="hero-subtitle">
				A minimalist, typography-focused portfolio showcasing my work as a software developer.
			</p>
		</div>
	</div>
</div>

<style>
	.home-container {
		position: relative;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		min-height: calc(100vh - 100px);
	}

	.hero-section {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 200px);
		gap: 3rem;
	}

	.hero-text {
		text-align: center;
		max-width: 600px;
	}

	.hero-title {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	[data-theme='plush'] .hero-title {
		color: var(--color-plush-accent);
	}

	[data-theme='sombre'] .hero-title {
		color: var(--color-sombre-text);
	}

	[data-theme='brilliant'] .hero-title {
		color: var(--color-brilliant-accent);
	}

	[data-theme='luminous'] .hero-title {
		color: var(--color-luminous-accent);
	}

	.hero-subtitle {
		font-size: 1.25rem;
		line-height: 1.8;
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 2rem;
		}

		.hero-subtitle {
			font-size: 1rem;
		}
	}
</style>
