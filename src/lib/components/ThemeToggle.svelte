<script lang="ts">
	import { themeState, type Theme } from '$lib/stores/theme.svelte';

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
	<button
		onclick={toggleDark}
		class="toggle-button"
		class:active={isDark}
		aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
	>
		{isDark ? 'Light' : 'Dark'}
	</button>
	<button
		onclick={toggleColorful}
		class="toggle-button"
		class:active={isColorful}
		aria-label={isColorful ? 'Switch to minimal theme' : 'Switch to colorful theme'}
	>
		{isColorful ? 'Minimal' : 'Colorful'}
	</button>
</div>

<style>
	.theme-toggle {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.theme-label {
		font-size: 0.875rem;
		font-weight: 500;
		opacity: 0.8;
	}

	.toggle-button {
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		border: none;
		background: transparent;
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
	}

	.toggle-button:hover {
		opacity: 0.7;
	}

	.toggle-button.active {
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	:global([data-theme='plush']) .toggle-button {
		color: var(--color-plush-accent);
	}

	:global([data-theme='sombre']) .toggle-button {
		color: var(--color-sombre-accent);
	}

	:global([data-theme='brilliant']) .toggle-button {
		color: var(--color-brilliant-accent);
	}

	:global([data-theme='luminous']) .toggle-button {
		color: var(--color-luminous-accent);
	}
</style>
