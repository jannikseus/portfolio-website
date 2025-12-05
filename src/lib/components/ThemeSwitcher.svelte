<script lang="ts">
	import { themeState, type Theme } from '$lib/stores/theme.svelte';
	import * as Select from '$lib/components/ui/select';

	const themes: { name: Theme; label: string }[] = [
		{ name: 'plush', label: 'Plush' },
		{ name: 'sombre', label: 'Sombre' },
		{ name: 'brilliant', label: 'Brilliant' },
		{ name: 'luminous', label: 'Luminous' }
	];

	function handleValueChange(value: string | undefined) {
		if (value) {
			themeState.set(value as Theme);
		}
	}

	const currentThemeLabel = $derived(
		themes.find((t) => t.name === themeState.current)?.label ?? 'Select theme'
	);
</script>

<div class="theme-switcher">
	<label for="theme-select" class="text-sm font-medium">Theme:</label>
	<Select.Root type="single" value={themeState.current} onValueChange={handleValueChange}>
		<Select.Trigger class="w-32">
			<span>{currentThemeLabel}</span>
		</Select.Trigger>
		<Select.Content>
			{#each themes as theme (theme.name)}
				<Select.Item value={theme.name} label={theme.label} />
			{/each}
		</Select.Content>
	</Select.Root>
</div>

<style>
	.theme-switcher {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
