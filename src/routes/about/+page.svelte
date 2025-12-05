<script lang="ts">
	import * as m from "$lib/paraglide/messages";
</script>

<div class="page-container">
	<h1 class="page-title">{m.about_title()}</h1>
	
	<section class="about-section">
		<p class="about-text">
			{m.about_intro()}
		</p>
	</section>

	<section class="about-section">
		<h2 class="section-title">{m.about_skills_title()}</h2>
		<div class="skills-grid">
			<span class="skill-item">{m.about_skill_typescript()}</span>
			<span class="skill-item">{m.about_skill_svelte()}</span>
			<span class="skill-item">{m.about_skill_react()}</span>
			<span class="skill-item">{m.about_skill_nodejs()}</span>
			<span class="skill-item">{m.about_skill_tailwind()}</span>
			<span class="skill-item">{m.about_skill_git()}</span>
		</div>
	</section>

	<section class="about-section">
		<h2 class="section-title">{m.about_approach_title()}</h2>
		<p class="about-text">
			{m.about_approach_text()}
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
