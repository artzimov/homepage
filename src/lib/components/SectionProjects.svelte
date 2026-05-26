<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section class="projects" id="projects">
	<span class="kicker">A few things I've built</span>
	<h2>Projects</h2>

	<div class="project-list">
		{#each projects as x}
			<ProjectCard
				title={x.title}
				text={x.text}
				image_url={x.image_url}
				livedemo_url={x.livedemo_url}
				github_url={x.github_url}
				technologies={x.technologies}
			/>
		{/each}
	</div>
</section>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.kicker {
		text-transform: uppercase;
		letter-spacing: 0.14em;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--pine);
		margin-bottom: 0.6rem;
	}

	.projects h2 {
		margin-bottom: 2rem;
	}

	.project-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
		gap: var(--standard-gap);
	}
</style>
