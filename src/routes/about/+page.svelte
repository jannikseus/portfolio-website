<div class="page-container">
	<div class="content">
		<h1 class="page-title">About Me</h1>
		<div class="about-content">
			<section class="about-section">
				<h2>Who I Am</h2>
				<p>
					I'm a passionate software developer dedicated to creating elegant and efficient solutions.
					With a focus on clean code and user experience, I strive to build applications that make
					a difference.
				</p>
			</section>

			<section class="about-section">
				<h2>My Skills</h2>
				<ul class="skills-list">
					<li>TypeScript / JavaScript</li>
					<li>Svelte / SvelteKit</li>
					<li>React / Next.js</li>
					<li>Node.js</li>
					<li>TailwindCSS</li>
					<li>Git / GitHub</li>
				</ul>
			</section>

			<section class="about-section">
				<h2>My Approach</h2>
				<p>
					I believe in writing code that is not only functional but also maintainable and scalable.
					My approach combines best practices with innovative thinking to deliver high-quality
					solutions.
				</p>
			</section>
		</div>
	</div>
</div>

<style>
	.page-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.content {
		max-width: 800px;
		margin: 0 auto;
	}

	.page-title {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 2rem;
		letter-spacing: -0.02em;
	}

	[data-theme='plush'] .page-title {
		color: var(--color-plush-accent);
	}

	[data-theme='sombre'] .page-title {
		color: var(--color-sombre-text);
	}

	[data-theme='brilliant'] .page-title {
		color: var(--color-brilliant-accent);
	}

	[data-theme='luminous'] .page-title {
		color: var(--color-luminous-accent);
	}

	.about-content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.about-section {
		padding: 1.5rem;
		border-radius: 8px;
	}

	[data-theme='plush'] .about-section {
		background-color: var(--color-plush-secondary);
	}

	[data-theme='sombre'] .about-section {
		background-color: var(--color-sombre-secondary);
	}

	[data-theme='brilliant'] .about-section {
		background-color: var(--color-brilliant-secondary);
	}

	[data-theme='luminous'] .about-section {
		background-color: var(--color-luminous-secondary);
	}

	.about-section h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.about-section p {
		line-height: 1.8;
		opacity: 0.9;
	}

	.skills-list {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 0.5rem;
	}

	.skills-list li {
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-weight: 500;
	}

	[data-theme='plush'] .skills-list li {
		background-color: var(--color-plush-bg);
		color: var(--color-plush-text);
	}

	[data-theme='sombre'] .skills-list li {
		background-color: var(--color-sombre-bg);
		color: var(--color-sombre-text);
	}

	[data-theme='brilliant'] .skills-list li {
		background-color: var(--color-brilliant-bg);
		color: var(--color-brilliant-text);
	}

	[data-theme='luminous'] .skills-list li {
		background-color: var(--color-luminous-bg);
		color: var(--color-luminous-text);
	}
</style>
