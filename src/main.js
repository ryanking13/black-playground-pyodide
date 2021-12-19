import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		pyodideIndexUrl: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
		githubProjectUrl: "https://github.com/ryanking13/black-playground",
		blackWheel: "black-21.10b1.dev16+gb3f3678-py3-none-any.whl",
	}
});

export default app;