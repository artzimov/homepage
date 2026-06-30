<script lang="ts">
	import type { ProjectProps } from '$lib/data/projects';
	import { stack, type Stack } from '$lib/data/stack';

	let { title, text, image_url, livedemo_url, github_url, technologies }: ProjectProps = $props();

	let stackUsed: Stack[] = [];

	technologies.forEach((elm) => {
		const x = stack.find((item) => item.name === elm);

		if (x) {
			stackUsed.push(x);
		}
	});
</script>

{#snippet tag(tech: Stack)}
	<span style={`background-color: #${tech.badgeColor}`} class="tag">{tech.name}</span>
{/snippet}

<div class="card">
	<span class="thumb">
		<img alt={title} src={image_url} />
	</span>

	<span class="text">
		<div class="flex flex-col items-start gap-1.5">
			<h4>{title}</h4>
			<p>{@html text}</p>
		</div>

		<div class="flex flex-col gap-2">
			<div class="links">
				<a class="tag" target="_blank" href={livedemo_url}>live demo</a>
				<a class="tag" target="_blank" href={github_url}>code</a>
			</div>
			<div class="flex flex-row w-full flex-wrap gap-2">
				{#each stackUsed as technology}
					{@render tag(technology)}
				{/each}
			</div>
		</div>
	</span>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		min-height: 25rem;
		min-width: 18.75rem;
		max-width: 22rem;
		color: var(--text-color);
		background-color: rgb(51, 48, 48);
		border: 2px solid rgb(63, 62, 60);
	}

	.thumb {
		width: 100%;
		border: 2px solid rgb(63, 62, 60);
	}

	.text {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		padding: 1rem;
		gap: 1rem;
	}

	.links {
		display: flex;
		gap: 0.75rem;
	}

	a {
		color: orange;
	}

	a:hover {
		color: orangered;
	}

	.tag {
		font-size: 0.8rem;
		border: 1px solid grey;
		padding: 0.5rem;
		border-color: var(--border-tag);
		border-radius: 0.5rem;
		padding: 0.35rem;
	}
</style>
