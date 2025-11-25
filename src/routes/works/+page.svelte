<div class="page-container">
	<h1 class="page-title">Works</h1>
	
	<div class="works-list">
		<article class="work-item">
			<div class="work-header">
				<h2 class="work-title">E-Commerce Platform</h2>
				<span class="work-type">Full Stack</span>
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
		</article>

		<article class="work-item">
			<div class="work-header">
				<h2 class="work-title">Task Management App</h2>
				<span class="work-type">Frontend</span>
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
		</article>

		<article class="work-item">
			<div class="work-header">
				<h2 class="work-title">Weather Dashboard</h2>
				<span class="work-type">API Integration</span>
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
		</article>

		<article class="work-item">
			<div class="work-header">
				<h2 class="work-title">Blog CMS</h2>
				<span class="work-type">Full Stack</span>
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
		</article>
	</div>
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

	.works-list {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.work-item {
		position: relative;
		padding-bottom: 2rem;
		border-bottom: 1px solid;
		opacity: 0.95;
	}

	:global([data-theme='plush']) .work-item {
		border-color: rgba(233, 30, 140, 0.2);
	}

	:global([data-theme='sombre']) .work-item {
		border-color: rgba(128, 128, 128, 0.3);
	}

	:global([data-theme='brilliant']) .work-item {
		border-color: rgba(57, 125, 173, 0.2);
	}

	:global([data-theme='luminous']) .work-item {
		border-color: rgba(255, 255, 186, 0.3);
	}

	.work-item:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.work-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.work-title {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.work-type {
		font-size: 0.8rem;
		opacity: 0.6;
		font-style: italic;
	}

	.work-description {
		line-height: 1.7;
		opacity: 0.85;
		font-size: 0.95rem;
		margin-bottom: 1rem;
	}

	.work-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.work-tech span {
		font-size: 0.8rem;
		opacity: 0.65;
	}

	.work-tech span:not(:last-child)::after {
		content: '•';
		margin-left: 0.5rem;
		opacity: 0.5;
	}
</style>
