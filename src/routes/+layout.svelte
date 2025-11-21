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

<div data-theme={themeState.current} class="min-h-screen transition-colors duration-300 layout-wrapper">
	<ParticleField color={themeColors[themeState.current]} />
	<Navigation />
	<main class="main-content">
		{@render children()}
	</main>
</div>

<style>
	.layout-wrapper {
		position: relative;
	}

	.main-content {
		position: relative;
		z-index: 1;
	}
</style>
