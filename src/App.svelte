<svelte:head>
	<script src="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js" on:load={pyodideLoaded}></script>
</svelte:head>
<script>
    import { onMount } from 'svelte';
        let pyodideReady = false;
        let mounted = false;
		let pyodide = null;
     
        onMount(() => {
            // The payment-form is ready.
            mounted = true;
            if (pyodideReady) {
                initializePyodide();
            }
        });
 
        function pyodideLoaded() {
            // The external Stripe javascript is ready.
            pyodideReady = true;
            if (mounted) {
                initializePyodide();
            }
        }
 
        async function initializePyodide() {
			pyodide = await loadPyodide({
				indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
		  	});
			console.log(pyodide.runPython(`print("Hello, world!")`));
        }
</script>



<main>
	<h1>Black playground</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
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