<script>
  import { getContext } from 'svelte';
  import Rules from './Rules.svelte';

  const { open } = getContext('simple-modal');

  const showRules = () => {
    open(Rules);
  };

  showRules();
</script>

<div class="flex justify-end text-md pb-8">
  <button
    on:click="{showRules}"
    class="border-2 border-grey tracking-widest uppercase rounded-lg px-10 py-2
    focus:outline-none"
  >
    Rules
  </button>
</div>
