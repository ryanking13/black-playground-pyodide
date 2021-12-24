<script>
	import CodeArea from "./CodeArea.svelte";
	import GithubRibbon from "./GithubRibbon.svelte";
	import Header from "./Header.svelte";

	import { onMount } from "svelte";

	export let pyodideIndexUrl;
	export let githubProjectUrl;
	export let blackWheel;
	export let placeholderCode;

	let pyodideScriptLoaded = false;
	let pyodideReady = false;
	let mounted = false;
	let pyodide = null;

	onMount(() => {
		mounted = true;
		if (pyodideScriptLoaded) {
			initializePyodide();
		}
	});

	function pyodideLoaded() {
		pyodideScriptLoaded = true;
		if (mounted) {
			initializePyodide();
		}
	}

	async function initializePyodide() {
		pyodide = await loadPyodide({
			indexURL: pyodideIndexUrl,
		});
		await installBlack();
		pyodideReady = true;
	}

	async function installBlack() {
		await pyodide.loadPackage("micropip");
		pyodide.runPythonAsync(`
			import micropip
			await micropip.install("wheel/${blackWheel}")
			import black
			from base64 import b64decode
		`);
	}
	function runBlack(code) {
		if (!pyodideReady) {
			return code;
		}

		let encodedCode = btoa(code);
		return pyodide.runPython(`
			code = b64decode("${encodedCode}").decode("utf-8")
			try:
				code = black.format_str(code, mode=black.Mode())
			except Exception as e:
				code = str(e)
			code
		`);
	}
</script>

<svelte:head>
	<script src="{pyodideIndexUrl}pyodide.js" on:load={pyodideLoaded}></script>
</svelte:head>

<main>
	<GithubRibbon {githubProjectUrl} />
	<Header />
	<CodeArea black={runBlack} placeholder={placeholderCode} />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
