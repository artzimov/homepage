<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
	let currentYear = new Date().getFullYear().toString();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<span>© 2024–{currentYear} Artem Rasskazimov</span>
		<span class="dot">·</span>
		<span>built with Svelte, one coffee at a time</span>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: var(--container);
		margin: 0 auto;
		padding-left: var(--gutter);
		padding-right: var(--gutter);
	}

	main {
		display: flex;
		flex-direction: column;
		min-height: 0;
		flex: 1;
		gap: var(--section-gap);
		padding-top: clamp(1rem, 3vw, 2rem);
		padding-bottom: var(--section-gap);
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: wrap;
		text-align: center;
		height: 5rem;
		font-size: 0.85rem;
		color: var(--fg-faint);
		border-top: 1px solid var(--border-soft);
	}

	.dot {
		opacity: 0.6;
	}
</style>
