<script>
    import "codemirror/mode/python/python";
    import "codemirror/theme/material-darker.css";
    import CodeMirror from "./CodeMirror/index";
    export let code;
    export let codeUpdated;
    export let readOnly = false;

    const options = {
        mode: "python",
        lineNumbers: true,
        value: code,
        readOnly: readOnly,
        theme: "material-darker",
    };

    export let editor = "";
</script>

<CodeMirror on:change={codeUpdated} bind:editor {options} class="editor" />

<style>
    :global(.editor) {
        font-size: 0.8rem;
    }
</style>
