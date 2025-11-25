<div class="page-container">
	<h1 class="page-title">About</h1>
	
	<section class="about-section">
		<p class="about-text">
			I'm a passionate software developer dedicated to creating elegant and efficient solutions.
			With a focus on clean code and user experience, I strive to build applications that make
			a difference.
		</p>
	</section>

	<section class="about-section">
		<h2 class="section-title">Skills</h2>
		<div class="skills-grid">
			<span class="skill-item">TypeScript / JavaScript</span>
			<span class="skill-item">Svelte / SvelteKit</span>
			<span class="skill-item">React / Next.js</span>
			<span class="skill-item">Node.js</span>
			<span class="skill-item">TailwindCSS</span>
			<span class="skill-item">Git / GitHub</span>
		</div>
	</section>

	<section class="about-section">
		<h2 class="section-title">Approach</h2>
		<p class="about-text">
			I believe in writing code that is not only functional but also maintainable and scalable.
			My approach combines best practices with innovative thinking to deliver high-quality
			solutions.
		</p>
	</section>
</div>

<style>
	.page-container {
		max-width: 700px;
		width: 100%;
		padding: 3rem 0;
	}

	.page-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 3rem;
		letter-spacing: -0.02em;
	}

	.about-section {
		margin-bottom: 3rem;
	}

	.section-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
		opacity: 0.9;
	}

	.about-text {
		line-height: 1.8;
		opacity: 0.85;
		font-size: 1rem;
	}

	.skills-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.skill-item {
		font-size: 0.9rem;
		opacity: 0.85;
	}

	.skill-item:not(:last-child)::after {
		content: '•';
		margin-left: 0.75rem;
		opacity: 0.5;
	}
</style>
