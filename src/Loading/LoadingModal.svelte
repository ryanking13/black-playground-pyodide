<script>
  import { getContext } from "svelte";
  import LoadingCircle from "./LoadingCircle.svelte";

  const { open, close } = getContext("simple-modal");

  export function openLoading() {
    open(
      LoadingCircle,
      {},
      {
        styleWindow: {
          width: "100px",
        },
        closeButton: false,
        closeOnEsc: false,
        closeOnOuterClick: false,
      }
    );
  }
  export function closeLoading() {
    close(LoadingCircle);
  }
</script>

<div style="text-align: center" />
