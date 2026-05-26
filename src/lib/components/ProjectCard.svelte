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
	<span class="tag">
		<span class="dot" style={`background-color: #${tech.badgeColor}`}></span>
		{tech.name}
	</span>
{/snippet}

<div class="card">
	<span class="thumb">
		<img alt={title} src={image_url} loading="lazy" />
	</span>

	<span class="text">
		<div class="flex flex-col items-start gap-2">
			<h4>{title}</h4>
			<p>{@html text}</p>
		</div>

		<div class="flex flex-col gap-3">
			<div class="links">
				<a class="link" target="_blank" href={livedemo_url}>live demo ↗</a>
				<a class="link" target="_blank" href={github_url}>source ↗</a>
			</div>
			<div class="flex flex-row w-full flex-wrap gap-1.5">
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
		width: 100%;
		background-color: var(--bg-raised);
		border: 1px solid var(--border);
		border-radius: 1rem;
		overflow: hidden;
		transition:
			transform 0.25s ease,
			border-color 0.25s ease,
			box-shadow 0.25s ease;
	}

	.card:hover {
		transform: translateY(-0.3rem);
		border-color: var(--accent-soft);
		box-shadow: 0 1.5rem 2.5rem -1.5rem rgba(0, 0, 0, 0.65);
	}

	.thumb {
		display: block;
		width: 100%;
		padding: 0.9rem;
		background-color: var(--bg-raised-2);
	}

	.thumb img {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid var(--border);
		border-radius: 0.6rem;
		transition: transform 0.4s ease;
	}

	.card:hover .thumb img {
		transform: scale(1.04);
	}

	.text {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		padding: 1.35rem;
		gap: 1.25rem;
	}

	.text p {
		font-size: 0.92rem;
	}

	.links {
		display: flex;
		gap: 1.1rem;
	}

	.link {
		color: var(--accent);
		font-size: 0.85rem;
		font-weight: 600;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.link:hover {
		color: var(--accent-strong);
	}

	.tag {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.72rem;
		font-weight: 500;
		color: var(--fg-muted);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 0.3rem 0.65rem 0.3rem 0.5rem;
	}

	.dot {
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 999px;
		flex-shrink: 0;
		box-shadow: 0 0 0 1px rgba(236, 231, 216, 0.18);
	}
</style>
