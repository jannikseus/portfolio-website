<script lang="ts">
	import { page } from '$app/stores';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	const navItems = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/experience', label: 'Experience' },
		{ path: '/works', label: 'Works' }
	];
</script>

<nav class="nav-container">
	<div class="nav-content">
		<ul class="nav-links">
			{#each navItems as item}
				<li>
					<a
						href={item.path}
						class="nav-link"
						class:active={$page.url.pathname === item.path}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
		<div class="nav-theme">
			<ThemeSwitcher />
		</div>
	</div>
</nav>

<style>
	.nav-container {
		position: sticky;
		top: 0;
		z-index: 50;
		padding: 1rem 2rem;
		backdrop-filter: blur(10px);
	}

	:global([data-theme='plush']) .nav-container {
		background: rgba(254, 243, 248, 0.8);
	}

	:global([data-theme='sombre']) .nav-container {
		background: rgba(26, 26, 26, 0.8);
	}

	:global([data-theme='brilliant']) .nav-container {
		background: rgba(255, 255, 255, 0.8);
	}

	:global([data-theme='luminous']) .nav-container {
		background: rgba(255, 254, 245, 0.8);
	}

	.nav-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		list-style: none;
	}

	.nav-link {
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		transition: all 0.2s ease;
		position: relative;
	}

	:global([data-theme='plush']) .nav-link {
		color: var(--color-plush-text);
	}

	:global([data-theme='sombre']) .nav-link {
		color: var(--color-sombre-text);
	}

	:global([data-theme='brilliant']) .nav-link {
		color: var(--color-brilliant-text);
	}

	:global([data-theme='luminous']) .nav-link {
		color: var(--color-luminous-text);
	}

	:global([data-theme='plush']) .nav-link:hover,
	:global([data-theme='plush']) .nav-link.active {
		background-color: var(--color-plush-secondary);
		color: var(--color-plush-accent);
	}

	:global([data-theme='sombre']) .nav-link:hover,
	:global([data-theme='sombre']) .nav-link.active {
		background-color: var(--color-sombre-secondary);
		color: var(--color-sombre-text);
	}

	:global([data-theme='brilliant']) .nav-link:hover,
	:global([data-theme='brilliant']) .nav-link.active {
		background-color: var(--color-brilliant-secondary);
		color: var(--color-brilliant-accent);
	}

	:global([data-theme='luminous']) .nav-link:hover,
	:global([data-theme='luminous']) .nav-link.active {
		background-color: var(--color-luminous-secondary);
		color: var(--color-luminous-accent);
	}

	.nav-theme {
		display: flex;
		align-items: center;
	}

	@media (max-width: 768px) {
		.nav-content {
			flex-direction: column;
			gap: 1rem;
		}

		.nav-links {
			gap: 1rem;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
