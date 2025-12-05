<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import * as m from "$lib/paraglide/messages";

  const navItems = [
    { path: "/", labelKey: "nav_home" },
    { path: "/about", labelKey: "nav_about" },
    {
      path: "/experience",
      labelKey: "nav_experience",
    },
    { path: "/works", labelKey: "nav_works" },
  ] as const;

  const labelFunctions = {
    nav_home: m.nav_home,
    nav_about: m.nav_about,
    nav_experience: m.nav_experience,
    nav_works: m.nav_works,
  };

  function getHref(itemPath: string): string {
    if (itemPath === "/") {
      return base || "/";
    }
    return base + itemPath;
  }

  function isActive(pathname: string, itemPath: string): boolean {
    if (itemPath === "/") {
      return pathname === base || pathname === base + "/";
    }
    return pathname === base + itemPath;
  }
</script>

<nav class="nav-container">
  <div class="nav-content">
    <ul class="nav-links">
      {#each navItems as item (item.path)}
        <li>
          <a
            href={getHref(item.path)}
            class="nav-link"
            class:active={isActive($page.url.pathname, item.path)}
          >
            {labelFunctions[item.labelKey]()}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .nav-container {
    position: sticky;
    top: 0;
    z-index: 50;
    padding: 1rem 2rem;
  }

  :global([data-theme="plush"]) .nav-container {
    background: var(--color-plush-bg);
  }

  :global([data-theme="sombre"]) .nav-container {
    background: var(--color-sombre-bg);
  }

  :global([data-theme="brilliant"]) .nav-container {
    background: var(--color-brilliant-bg);
  }

  :global([data-theme="luminous"]) .nav-container {
    background: var(--color-luminous-bg);
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
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
    transition: all 0.2s ease;
    position: relative;
  }
  .nav-link,
  .nav-link:active,
  .nav-link:focus,
  .nav-link:hover,
  .nav-link.active {
    background-color: transparent !important;
    box-shadow: none !important;
  }

  /* ACTIVE: Unterstreichung */
  .nav-link.active::after {
    content: "";
    position: absolute;
    left: 0.5rem; /* passt sich deinem Padding an */
    right: 0.5rem;
    bottom: 0.2rem; /* Abstand zum Text */
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
  }

  :global([data-theme="plush"]) .nav-link {
    color: var(--color-plush-text);
  }

  :global([data-theme="sombre"]) .nav-link {
    color: var(--color-sombre-text);
  }

  :global([data-theme="brilliant"]) .nav-link {
    color: var(--color-brilliant-text);
  }

  :global([data-theme="luminous"]) .nav-link {
    color: var(--color-luminous-text);
  }

  :global([data-theme="plush"]) .nav-link:hover,
  :global([data-theme="plush"]) .nav-link.active {
    background-color: var(--color-plush-secondary);
    color: var(--color-plush-accent);
  }

  :global([data-theme="sombre"]) .nav-link:hover,
  :global([data-theme="sombre"]) .nav-link.active {
    background-color: var(--color-sombre-secondary);
    color: var(--color-sombre-text);
  }

  :global([data-theme="brilliant"]) .nav-link:hover,
  :global([data-theme="brilliant"]) .nav-link.active {
    background-color: var(--color-brilliant-secondary);
    color: var(--color-brilliant-accent);
  }

  :global([data-theme="luminous"]) .nav-link:hover,
  :global([data-theme="luminous"]) .nav-link.active {
    background-color: var(--color-luminous-secondary);
    color: var(--color-luminous-accent);
  }

  @media (max-width: 768px) {
    .nav-links {
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
