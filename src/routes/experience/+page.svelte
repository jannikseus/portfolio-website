<div class="page-container">
	<div class="content">
		<h1 class="page-title">Experience</h1>
		<div class="experience-list">
			<article class="experience-item">
				<div class="experience-header">
					<h2>Senior Software Developer</h2>
					<span class="experience-date">2022 - Present</span>
				</div>
				<h3 class="company">Tech Company Inc.</h3>
				<p class="description">
					Leading development of modern web applications using TypeScript, React, and Node.js.
					Architecting scalable solutions and mentoring junior developers.
				</p>
				<ul class="achievements">
					<li>Improved application performance by 40%</li>
					<li>Led migration to microservices architecture</li>
					<li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
				</ul>
			</article>

			<article class="experience-item">
				<div class="experience-header">
					<h2>Software Developer</h2>
					<span class="experience-date">2020 - 2022</span>
				</div>
				<h3 class="company">Startup Solutions</h3>
				<p class="description">
					Developed full-stack applications and RESTful APIs. Collaborated with cross-functional
					teams to deliver high-quality software solutions.
				</p>
				<ul class="achievements">
					<li>Built core features used by 10,000+ users</li>
					<li>Reduced bug count by 50% through comprehensive testing</li>
					<li>Contributed to open-source projects</li>
				</ul>
			</article>

			<article class="experience-item">
				<div class="experience-header">
					<h2>Junior Developer</h2>
					<span class="experience-date">2018 - 2020</span>
				</div>
				<h3 class="company">Digital Agency</h3>
				<p class="description">
					Worked on client projects building responsive websites and web applications. Gained
					experience in modern web development practices.
				</p>
				<ul class="achievements">
					<li>Delivered 15+ client projects on time</li>
					<li>Learned modern JavaScript frameworks</li>
					<li>Improved code quality through peer reviews</li>
				</ul>
			</article>
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
		max-width: 900px;
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

	.experience-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.experience-item {
		padding: 2rem;
		border-radius: 8px;
		border-left: 4px solid;
	}

	[data-theme='plush'] .experience-item {
		background-color: var(--color-plush-secondary);
		border-color: var(--color-plush-accent);
	}

	[data-theme='sombre'] .experience-item {
		background-color: var(--color-sombre-secondary);
		border-color: var(--color-sombre-accent);
	}

	[data-theme='brilliant'] .experience-item {
		background-color: var(--color-brilliant-secondary);
		border-color: var(--color-brilliant-accent);
	}

	[data-theme='luminous'] .experience-item {
		background-color: var(--color-luminous-secondary);
		border-color: var(--color-luminous-accent);
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.experience-item h2 {
		font-size: 1.5rem;
		font-weight: 600;
	}

	.experience-date {
		font-size: 0.9rem;
		opacity: 0.7;
		font-weight: 500;
	}

	.company {
		font-size: 1.1rem;
		font-weight: 500;
		margin-bottom: 1rem;
		opacity: 0.8;
	}

	.description {
		line-height: 1.8;
		margin-bottom: 1rem;
		opacity: 0.9;
	}

	.achievements {
		list-style: disc;
		margin-left: 1.5rem;
		line-height: 1.8;
		opacity: 0.85;
	}

	.achievements li {
		margin-bottom: 0.5rem;
	}
</style>
