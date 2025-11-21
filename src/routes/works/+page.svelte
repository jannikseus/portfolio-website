<div class="page-container">
	<div class="content">
		<h1 class="page-title">My Works</h1>
		<div class="works-grid">
			<article class="work-item">
				<div class="work-header">
					<h2>E-Commerce Platform</h2>
					<span class="work-tag">Full Stack</span>
				</div>
				<p class="work-description">
					A modern e-commerce platform built with React, Node.js, and MongoDB. Features include
					user authentication, product management, shopping cart, and payment integration.
				</p>
				<div class="work-tech">
					<span>React</span>
					<span>Node.js</span>
					<span>MongoDB</span>
					<span>Stripe</span>
				</div>
				<a href="#" class="work-link">View Project →</a>
			</article>

			<article class="work-item">
				<div class="work-header">
					<h2>Task Management App</h2>
					<span class="work-tag">Frontend</span>
				</div>
				<p class="work-description">
					A responsive task management application with drag-and-drop functionality, built using
					SvelteKit and TailwindCSS. Supports team collaboration and real-time updates.
				</p>
				<div class="work-tech">
					<span>SvelteKit</span>
					<span>TailwindCSS</span>
					<span>WebSocket</span>
				</div>
				<a href="#" class="work-link">View Project →</a>
			</article>

			<article class="work-item">
				<div class="work-header">
					<h2>Weather Dashboard</h2>
					<span class="work-tag">API Integration</span>
				</div>
				<p class="work-description">
					A beautiful weather dashboard that displays current weather and forecasts for multiple
					locations. Integrates with OpenWeatherMap API and features animated weather icons.
				</p>
				<div class="work-tech">
					<span>TypeScript</span>
					<span>REST API</span>
					<span>Chart.js</span>
				</div>
				<a href="#" class="work-link">View Project →</a>
			</article>

			<article class="work-item">
				<div class="work-header">
					<h2>Blog CMS</h2>
					<span class="work-tag">Full Stack</span>
				</div>
				<p class="work-description">
					A headless CMS for managing blog content with a rich text editor, media library, and
					SEO optimization. Built with Next.js and PostgreSQL.
				</p>
				<div class="work-tech">
					<span>Next.js</span>
					<span>PostgreSQL</span>
					<span>Prisma</span>
				</div>
				<a href="#" class="work-link">View Project →</a>
			</article>

			<article class="work-item">
				<div class="work-header">
					<h2>Analytics Platform</h2>
					<span class="work-tag">Data Visualization</span>
				</div>
				<p class="work-description">
					A real-time analytics dashboard for tracking website metrics and user behavior.
					Features interactive charts, custom date ranges, and export functionality.
				</p>
				<div class="work-tech">
					<span>Vue.js</span>
					<span>D3.js</span>
					<span>Express</span>
				</div>
				<a href="#" class="work-link">View Project →</a>
			</article>

			<article class="work-item">
				<div class="work-header">
					<h2>Mobile Fitness App</h2>
					<span class="work-tag">Mobile</span>
				</div>
				<p class="work-description">
					A cross-platform fitness tracking app with workout plans, progress tracking, and social
					features. Built using React Native.
				</p>
				<div class="work-tech">
					<span>React Native</span>
					<span>Firebase</span>
					<span>Redux</span>
				</div>
				<a href="#" class="work-link">View Project →</a>
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
		max-width: 1100px;
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

	.works-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.work-item {
		padding: 2rem;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		transition: transform 0.2s ease;
	}

	.work-item:hover {
		transform: translateY(-4px);
	}

	[data-theme='plush'] .work-item {
		background-color: var(--color-plush-secondary);
	}

	[data-theme='sombre'] .work-item {
		background-color: var(--color-sombre-secondary);
	}

	[data-theme='brilliant'] .work-item {
		background-color: var(--color-brilliant-secondary);
	}

	[data-theme='luminous'] .work-item {
		background-color: var(--color-luminous-secondary);
	}

	.work-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
	}

	.work-item h2 {
		font-size: 1.5rem;
		font-weight: 600;
	}

	.work-tag {
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-weight: 500;
		white-space: nowrap;
	}

	[data-theme='plush'] .work-tag {
		background-color: var(--color-plush-accent);
		color: white;
	}

	[data-theme='sombre'] .work-tag {
		background-color: var(--color-sombre-accent);
		color: var(--color-sombre-text);
	}

	[data-theme='brilliant'] .work-tag {
		background-color: var(--color-brilliant-accent);
		color: white;
	}

	[data-theme='luminous'] .work-tag {
		background-color: var(--color-luminous-accent);
		color: var(--color-luminous-text);
	}

	.work-description {
		line-height: 1.8;
		opacity: 0.9;
		flex-grow: 1;
	}

	.work-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.work-tech span {
		font-size: 0.85rem;
		padding: 0.25rem 0.75rem;
		border-radius: 6px;
		font-weight: 500;
	}

	[data-theme='plush'] .work-tech span {
		background-color: var(--color-plush-bg);
		color: var(--color-plush-text);
	}

	[data-theme='sombre'] .work-tech span {
		background-color: var(--color-sombre-bg);
		color: var(--color-sombre-text);
	}

	[data-theme='brilliant'] .work-tech span {
		background-color: var(--color-brilliant-bg);
		color: var(--color-brilliant-text);
	}

	[data-theme='luminous'] .work-tech span {
		background-color: var(--color-luminous-bg);
		color: var(--color-luminous-text);
	}

	.work-link {
		text-decoration: none;
		font-weight: 500;
		display: inline-flex;
		align-items: center;
		margin-top: auto;
		transition: transform 0.2s ease;
	}

	.work-link:hover {
		transform: translateX(4px);
	}

	[data-theme='plush'] .work-link {
		color: var(--color-plush-accent);
	}

	[data-theme='sombre'] .work-link {
		color: var(--color-sombre-text);
	}

	[data-theme='brilliant'] .work-link {
		color: var(--color-brilliant-accent);
	}

	[data-theme='luminous'] .work-link {
		color: var(--color-luminous-accent);
	}

	@media (max-width: 768px) {
		.works-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
