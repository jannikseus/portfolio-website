<script lang="ts">
	import { themeState } from '$lib/stores/theme.svelte';
	import { Button } from '$lib/components/ui/button';

	// Theme mapping (corrected):
	// brilliant = light + colorful (blue)
	// plush = light + minimal (pink)
	// sombre = dark + minimal (gray)
	// luminous = dark + colorful (yellow)
	const isDark = $derived(themeState.current === 'sombre' || themeState.current === 'luminous');
	const isColorful = $derived(themeState.current === 'brilliant' || themeState.current === 'luminous');

	function toggleDark() {
		if (isDark) {
			// Switch to light - preserve colorful/minimal preference
			themeState.set(isColorful ? 'brilliant' : 'plush');
		} else {
			// Switch to dark - preserve colorful/minimal preference
			themeState.set(isColorful ? 'luminous' : 'sombre');
		}
	}

	function toggleColorful() {
		if (isColorful) {
			// Switch to minimal - preserve dark/light preference
			themeState.set(isDark ? 'sombre' : 'plush');
		} else {
			// Switch to colorful - preserve dark/light preference
			themeState.set(isDark ? 'luminous' : 'brilliant');
		}
	}
</script>

<div class="theme-toggle">
	<span class="theme-label">Theme:</span>
	<Button
		onclick={toggleDark}
		variant={isDark ? "default" : "ghost"}
		size="sm"
		aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
	>
		{isDark ? 'Light' : 'Dark'}
	</Button>
	<Button
		onclick={toggleColorful}
		variant={isColorful ? "default" : "ghost"}
		size="sm"
		aria-label={isColorful ? 'Switch to minimal theme' : 'Switch to colorful theme'}
	>
		{isColorful ? 'Minimal' : 'Colorful'}
	</Button>
</div>

<style>
	.theme-toggle {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		padding: 0.5rem;
	}

	.theme-label {
		font-size: 0.875rem;
		font-weight: 500;
		opacity: 0.8;
	}
</style>
