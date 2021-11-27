<script>
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/src/languages/typescript";
	import github from "svelte-highlight/src/styles/github";

	const code = "const add = (a: number, b: number) => a + b;";
</script>

<svelte:head>
	{@html github}
</svelte:head>

<main>
	<Highlight language={typescript} {code} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>