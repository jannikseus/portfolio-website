<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { themeState } from '$lib/stores/theme.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import ParticleField from '$lib/components/ParticleField.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

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
		<div class="content-wrapper">
			<Navigation />
			<main class="main-content">
				{@render children()}
			</main>
		</div>
	</div>
	<div class="theme-toggle-wrapper">
		<ThemeToggle />
	</div>
</div>

<style>
	.page-background {
		height: 100vh;
		padding: 2rem;
		transition: background-color 0.3s ease;
		overflow: hidden;
	}

	.bordered-container {
		position: relative;
		height: 100%;
		border: 2px solid;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.content-wrapper {
		position: relative;
		z-index: 1;
		height: 100%;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		/* Hide scrollbar */
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE and Edge */
	}

	.content-wrapper::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera */
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
		flex: 1;
		padding: 0 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.theme-toggle-wrapper {
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 100;
	}
</style>
