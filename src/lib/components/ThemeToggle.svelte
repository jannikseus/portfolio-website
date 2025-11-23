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
	<button
		onclick={toggleDark}
		class="toggle-button"
		class:active={isDark}
		aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
	>
		{isDark ? '☀️' : '🌙'}
	</button>
	<button
		onclick={toggleColorful}
		class="toggle-button"
		class:active={isColorful}
		aria-label={isColorful ? 'Switch to minimal theme' : 'Switch to colorful theme'}
	>
		{isColorful ? '🎨' : '⚪'}
	</button>
</div>

<style>
	.theme-toggle {
		display: flex;
		gap: 0.5rem;
		padding: 0.75rem;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border-radius: 12px;
		border: 2px solid;
	}

	:global([data-theme='plush']) .theme-toggle {
		border-color: var(--color-plush-accent);
		background: rgba(254, 243, 248, 0.9);
	}

	:global([data-theme='sombre']) .theme-toggle {
		border-color: var(--color-sombre-accent);
		background: rgba(26, 26, 26, 0.9);
	}

	:global([data-theme='brilliant']) .theme-toggle {
		border-color: var(--color-brilliant-accent);
		background: rgba(255, 255, 255, 0.9);
	}

	:global([data-theme='luminous']) .theme-toggle {
		border-color: var(--color-luminous-accent);
		background: rgba(255, 254, 245, 0.9);
	}

	.toggle-button {
		width: 48px;
		height: 48px;
		border-radius: 8px;
		border: 2px solid transparent;
		background: transparent;
		cursor: pointer;
		font-size: 1.5rem;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.toggle-button:hover {
		transform: scale(1.1);
	}

	.toggle-button.active {
		border-color: currentColor;
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

	:global([data-theme='plush']) .toggle-button.active {
		background-color: var(--color-plush-secondary);
	}

	:global([data-theme='sombre']) .toggle-button.active {
		background-color: var(--color-sombre-secondary);
	}

	:global([data-theme='brilliant']) .toggle-button.active {
		background-color: var(--color-brilliant-secondary);
	}

	:global([data-theme='luminous']) .toggle-button.active {
		background-color: var(--color-luminous-secondary);
	}
</style>
