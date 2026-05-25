<script lang="ts">
	import Icon from './Icon.svelte';
	import StackList from './StackList.svelte';
	import { icons } from '$lib/data/icons';
	import { stack } from '$lib/data/stack';

	const mainStack = stack.filter((elm) => elm.type === 'main');
	const otherTools = stack.filter((elm) => elm.type === 'secondary');
</script>

<section class="about" id="about">
	<div class="intro">
		<span class="kicker">Software developer · Amsterdam, NL</span>
		<h1>Hi, I'm Artem!</h1>
		<p>
			I'm a software developer based in Amsterdam. I've worked as a backend dev with Python/Django,
			and build things with TypeScript on the front end &mdash; mostly Next.js/React and Svelte.
		</p>

		<div class="socials">
			{#each icons as icon}
				<Icon title={icon.title} path={icon.path} url={icon.url} />
			{/each}
		</div>

		<div class="stacks">
			<div>
				<h3>Main stack</h3>
				<StackList items={mainStack} />
			</div>
			<div>
				<h3>Other tools</h3>
				<StackList items={otherTools} />
			</div>
		</div>
	</div>

	<div class="portrait-panel">
		<img class="portrait" alt="Artem" src="/portrait.jpg" width="350" height="350" />
	</div>
</section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
		width: 100%;
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.4rem;
	}

	.kicker {
		font-family: var(--font-body);
		text-transform: uppercase;
		letter-spacing: 0.14em;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--pine);
	}

	.intro p {
		max-width: 34rem;
		font-size: 1.05rem;
	}

	.socials {
		display: flex;
		flex-direction: row;
		gap: 1.1rem;
	}

	.stacks {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		margin-top: 0.5rem;
		width: 100%;
	}

	.stacks h3 {
		margin-bottom: 0.6rem;
	}

	.portrait-panel {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 1.5rem;
		overflow: hidden;
		aspect-ratio: 4 / 5;
		background-image: url('/wp1.png');
		background-position: center 30%;
		background-size: cover;
	}

	.portrait-panel::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(190deg, rgba(16, 18, 16, 0.1) 20%, rgba(16, 18, 16, 0.8) 100%);
	}

	.portrait {
		position: relative;
		z-index: 1;
		width: min(78%, 18rem);
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 1rem;
		rotate: -2deg;
		border: 4px solid var(--bg-raised);
		box-shadow: 0 1.5rem 3rem -1.25rem rgba(0, 0, 0, 0.7);
	}

	@media (max-width: 860px) {
		.about {
			grid-template-columns: 1fr;
		}

		.portrait-panel {
			order: -1;
			aspect-ratio: 16 / 10;
			max-width: 26rem;
			margin: 0 auto;
		}

		.intro {
			align-items: center;
			text-align: center;
		}

		.intro p {
			max-width: none;
		}

		.stacks {
			align-items: center;
		}
	}
</style>
