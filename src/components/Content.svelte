<script>
  import { getContext } from 'svelte';
  import Rules from './Rules.svelte';

  const { open } = getContext('simple-modal');

  const showRules = () => {
    open(Rules);
  };

  showRules();
</script>

<div class="flex justify-center mt-6 sm:mt-18 lg:justify-end lg:pb-6 lg:-mt-10">
  <button
    on:click="{showRules}"
    class="border-2 border-grey tracking-widest uppercase rounded-lg px-10 py-2
    focus:outline-none"
  >
    Rules
  </button>
</div>
