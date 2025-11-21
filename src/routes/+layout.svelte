<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { themeState } from '$lib/stores/theme.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Portfolio</title>
</svelte:head>

<div data-theme={themeState.current} class="min-h-screen transition-colors duration-300">
	<Navigation />
	<main>
		{@render children()}
	</main>
</div>
