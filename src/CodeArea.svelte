<script>
	import Editor from "./Editor.svelte";

	export let black;
	export let placeholder = 'print("hello world" + str( 123 ))';
	export let codeOriginal = placeholder;

	let editorOriginal;
	let editorFormatted;

	function originalCodeUpdated(event) {
		const newCode = event.detail;
		const codeFormatted = black(newCode);
		if (codeFormatted) {
			setFormattedCode(codeFormatted);
		}
	}

	function setFormattedCode(newCode) {
		editorFormatted.setValue(newCode);
	}
</script>

<div class="codearea">
	<div class="py-5 px-3">
		<div class="grid grid-cols-2 gap-3">
			<div class="">
				<Editor
					bind:editor={editorOriginal}
					codeUpdated={originalCodeUpdated}
					code={codeOriginal}
				/>
			</div>
			<div class="">
				<Editor
					bind:editor={editorFormatted}
					codeUpdated={() => {}}
					code={codeOriginal}
					readOnly="true"
				/>
			</div>
		</div>
	</div>
</div>
