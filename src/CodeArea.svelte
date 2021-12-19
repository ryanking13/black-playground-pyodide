<script>
	import Editor from "./Editor.svelte";

	export let codeOriginal = `print("hello world" + str( 123 ))`;
	export let black;

	let editorOriginal;
	let editorFormatted;

	function originalCodeUpdated(event) {
		let newCode = event.detail;
		let codeFormatted = black(newCode);
		if (codeFormatted) {
			setFormattedCode(codeFormatted)
		}
	}

	function setFormattedCode(newCode) {
		editorFormatted.setValue(newCode);
	}

</script>

<main>
	<div class="py-3">
		<div class="flex gap-2">
			<div class="flex-1">
				<Editor
					bind:editor={editorOriginal}
					codeUpdated={originalCodeUpdated}
					code={codeOriginal}
				/>
			</div>
			<div class="flex-1">
				<Editor
					bind:editor={editorFormatted}
					codeUpdated={() => {}}
					code={codeOriginal}
					readOnly="true"
				/>
			</div>
		</div>
	</div>
</main>
