<script lang="ts">
	import type { Stack } from '$lib/data/stack';

	let { items }: { items: Stack[] } = $props();
</script>

<div class="stack-list">
	{#each items as item}
		<span class="pill">
			<span class="dot" style={`background-color: #${item.badgeColor}`}></span>
			{item.name}
		</span>
	{/each}
</div>

<style>
	.stack-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.55rem;
	}

	.pill {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--fg-muted);
		background: var(--bg-raised);
		border: 1px solid var(--border);
		border-radius: 999px;
		padding: 0.35rem 0.75rem 0.35rem 0.6rem;
		transition:
			border-color 0.2s ease,
			color 0.2s ease;
	}

	.pill:hover {
		border-color: var(--accent);
		color: var(--fg);
	}

	.dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 999px;
		flex-shrink: 0;
		box-shadow: 0 0 0 1px rgba(236, 231, 216, 0.18);
	}
</style>
