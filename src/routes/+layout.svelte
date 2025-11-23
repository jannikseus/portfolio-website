<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { themeState } from '$lib/stores/theme.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import ParticleField from '$lib/components/ParticleField.svelte';

	let { children } = $props();

	// Map themes to particle colors
	const themeColors = {
		plush: 'rgb(233, 30, 140)',
		sombre: 'rgb(102, 102, 102)',
		brilliant: 'rgb(0, 102, 255)',
		luminous: 'rgb(255, 204, 0)'
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Portfolio</title>
</svelte:head>

<div data-theme={themeState.current} class="page-background">
	<div class="bordered-container">
		<ParticleField color={themeColors[themeState.current]} />
		<Navigation />
		<main class="main-content">
			{@render children()}
		</main>
	</div>
</div>

<style>
	.page-background {
		min-height: 100vh;
		padding: 2rem;
		transition: background-color 0.3s ease;
	}

	.bordered-container {
		position: relative;
		min-height: calc(100vh - 4rem);
		border: 2px solid;
		border-radius: 12px;
		overflow: hidden;
	}

	:global([data-theme='plush']) .bordered-container {
		border-color: var(--color-plush-accent);
		background-color: var(--color-plush-bg);
	}

	:global([data-theme='sombre']) .bordered-container {
		border-color: var(--color-sombre-accent);
		background-color: var(--color-sombre-bg);
	}

	:global([data-theme='brilliant']) .bordered-container {
		border-color: var(--color-brilliant-accent);
		background-color: var(--color-brilliant-bg);
	}

	:global([data-theme='luminous']) .bordered-container {
		border-color: var(--color-luminous-accent);
		background-color: var(--color-luminous-bg);
	}

	.main-content {
		position: relative;
		z-index: 1;
	}
</style>
