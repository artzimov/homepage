<script lang="ts">
	function handleAnchorClick(e: MouseEvent) {
		e.preventDefault();
		const link = e.currentTarget as HTMLAnchorElement;
		const anchorId = link.hash.replace('#', '');
		const anchor = document.getElementById(anchorId);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<header>
	<p class="wordmark">Artem Rasskazimov</p>
	<nav>
		<a href="#about" on:click={handleAnchorClick}>About</a>
		<a href="#projects" on:click={handleAnchorClick}>Projects</a>
		<a href="/cv.pdf" data-sveltekit-preload-data="hover" target="_blank" rel="noopener">CV</a>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1.1rem 0;
		background: color-mix(in srgb, var(--bg) 88%, transparent);
		backdrop-filter: blur(10px);
	}

	.wordmark {
		font-family: var(--font-display);
		font-size: clamp(1.05rem, 1vw + 0.8rem, 1.25rem);
		font-weight: 500;
		font-style: italic;
		text-decoration: none;
		color: var(--fg);
	}

	nav {
		display: flex;
		align-items: center;
		gap: clamp(1.25rem, 3vw, 2.25rem);
	}

	nav a {
		position: relative;
		color: var(--fg-muted);
		font-weight: 600;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	nav a::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -0.3rem;
		height: 1px;
		background: var(--accent);
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.25s ease;
	}

	nav a:hover {
		color: var(--fg);
	}

	nav a:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}
</style>
