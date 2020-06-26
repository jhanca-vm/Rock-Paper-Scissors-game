<script>
  import { getContext } from 'svelte';

  const { close } = getContext('simple-modal');

  const hideRules = () => {
    close();
  };
</script>

<div class="px-2 sm:px-4">
  <div class="flex justify-between items-center mt-2 sm:mt-3">
    <h1 class="uppercase text-dark text-2xl sm:text-3xl font-bold leading-none">rules</h1>
    <figure on:click="{hideRules}" class="cursor-pointer">
      <img class="w-4 sm:w-auto" src="images/icon-close.svg" alt="close" />
    </figure>
  </div>
  <figure class="flex justify-center mt-8 mb-3 sm:px-5">
    <img src="images/image-rules.svg" alt="rules" />
  </figure>
</div>
