<script lang="ts">
	import { setLocale, getLocale, locales, type Locale } from "$lib/paraglide/runtime";
	import * as m from "$lib/paraglide/messages";

	const languageNames: Record<Locale, string> = {
		en: "English",
		de: "Deutsch",
	};

	function handleLocaleChange(newLocale: Locale) {
		setLocale(newLocale);
	}
</script>

<div class="language-switcher">
	<span class="language-label">{m.language_switcher_label()}</span>
	<div class="language-buttons">
		{#each locales as locale (locale)}
			<button
				class="language-button"
				class:active={getLocale() === locale}
				onclick={() => handleLocaleChange(locale)}
			>
				{languageNames[locale]}
			</button>
		{/each}
	</div>
</div>

<style>
	.language-switcher {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 1rem;
	}

	.language-label {
		font-size: 0.85rem;
		opacity: 0.7;
	}

	.language-buttons {
		display: flex;
		gap: 0.5rem;
	}

	.language-button {
		padding: 0.25rem 0.5rem;
		border: 1px solid;
		background: transparent;
		cursor: pointer;
		font-size: 0.8rem;
		transition: all 0.2s ease;
		opacity: 0.7;
	}

	.language-button:hover {
		opacity: 1;
	}

	.language-button.active {
		opacity: 1;
		font-weight: 600;
	}

	:global([data-theme='plush']) .language-button {
		color: var(--color-plush-text);
		border-color: var(--color-plush-accent);
	}

	:global([data-theme='plush']) .language-button.active {
		background-color: var(--color-plush-accent);
		color: var(--color-plush-bg);
	}

	:global([data-theme='sombre']) .language-button {
		color: var(--color-sombre-text);
		border-color: var(--color-sombre-accent);
	}

	:global([data-theme='sombre']) .language-button.active {
		background-color: var(--color-sombre-accent);
		color: var(--color-sombre-bg);
	}

	:global([data-theme='brilliant']) .language-button {
		color: var(--color-brilliant-text);
		border-color: var(--color-brilliant-accent);
	}

	:global([data-theme='brilliant']) .language-button.active {
		background-color: var(--color-brilliant-accent);
		color: var(--color-brilliant-bg);
	}

	:global([data-theme='luminous']) .language-button {
		color: var(--color-luminous-text);
		border-color: var(--color-luminous-accent);
	}

	:global([data-theme='luminous']) .language-button.active {
		background-color: var(--color-luminous-accent);
		color: var(--color-luminous-bg);
	}

	:global([data-theme='plush']) .language-label {
		color: var(--color-plush-text);
	}

	:global([data-theme='sombre']) .language-label {
		color: var(--color-sombre-text);
	}

	:global([data-theme='brilliant']) .language-label {
		color: var(--color-brilliant-text);
	}

	:global([data-theme='luminous']) .language-label {
		color: var(--color-luminous-text);
	}
</style>
