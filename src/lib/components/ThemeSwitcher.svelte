<script lang="ts">
	import { themeState, type Theme } from '$lib/stores/theme.svelte';

	const themes: { name: Theme; label: string }[] = [
		{ name: 'plush', label: 'Plush' },
		{ name: 'sombre', label: 'Sombre' },
		{ name: 'brilliant', label: 'Brilliant' },
		{ name: 'luminous', label: 'Luminous' }
	];
</script>

<div class="theme-switcher">
	<label for="theme-select" class="text-sm font-medium">Theme:</label>
	<select
		id="theme-select"
		value={themeState.current}
		onchange={(e) => themeState.set(e.currentTarget.value as Theme)}
		class="ml-2 px-3 py-1 rounded border"
	>
		{#each themes as theme}
			<option value={theme.name}>{theme.label}</option>
		{/each}
	</select>
</div>

<style>
	.theme-switcher {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	select {
		background: transparent;
		cursor: pointer;
	}
	
	[data-theme='plush'] select {
		border-color: var(--color-plush-accent);
		color: var(--color-plush-text);
	}
	
	[data-theme='sombre'] select {
		border-color: var(--color-sombre-accent);
		color: var(--color-sombre-text);
	}
	
	[data-theme='brilliant'] select {
		border-color: var(--color-brilliant-accent);
		color: var(--color-brilliant-text);
	}
	
	[data-theme='luminous'] select {
		border-color: var(--color-luminous-accent);
		color: var(--color-luminous-text);
	}
</style>
