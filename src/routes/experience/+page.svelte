<script lang="ts">
	import * as m from "$lib/paraglide/messages";
</script>

<div class="page-container">
	<h1 class="page-title">{m.experience_title()}</h1>
	
	<div class="experience-list">
		<article class="experience-item">
			<div class="experience-header">
				<h2 class="role">{m.experience_1_role()}</h2>
				<span class="date">{m.experience_1_date()}</span>
			</div>
			<p class="company">{m.experience_1_company()}</p>
			<p class="description">
				{m.experience_1_description()}
			</p>
		</article>

		<article class="experience-item">
			<div class="experience-header">
				<h2 class="role">{m.experience_2_role()}</h2>
				<span class="date">{m.experience_2_date()}</span>
			</div>
			<p class="company">{m.experience_2_company()}</p>
			<p class="description">
				{m.experience_2_description()}
			</p>
		</article>

		<article class="experience-item">
			<div class="experience-header">
				<h2 class="role">{m.experience_3_role()}</h2>
				<span class="date">{m.experience_3_date()}</span>
			</div>
			<p class="company">{m.experience_3_company()}</p>
			<p class="description">
				{m.experience_3_description()}
			</p>
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

	.experience-list {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.experience-item {
		position: relative;
		padding-left: 1.5rem;
		border-left: 2px solid;
		opacity: 0.9;
	}

	:global([data-theme='plush']) .experience-item {
		border-color: var(--color-plush-accent);
	}

	:global([data-theme='sombre']) .experience-item {
		border-color: var(--color-sombre-accent);
	}

	:global([data-theme='brilliant']) .experience-item {
		border-color: var(--color-brilliant-accent);
	}

	:global([data-theme='luminous']) .experience-item {
		border-color: var(--color-luminous-accent);
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 0.25rem;
	}

	.role {
		font-size: 1.1rem;
		font-weight: 600;
	}

	.date {
		font-size: 0.85rem;
		opacity: 0.6;
	}

	.company {
		font-size: 0.95rem;
		font-weight: 500;
		opacity: 0.7;
		margin-bottom: 0.75rem;
	}

	.description {
		line-height: 1.7;
		opacity: 0.85;
		font-size: 0.95rem;
	}
</style>
