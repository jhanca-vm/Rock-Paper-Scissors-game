<script>
  import { getContext } from 'svelte';

  const { close } = getContext('simple-modal');

  const hideRules = () => {
    close();
  };
</script>

<div class="px-4">
  <div class="flex justify-between items-center mt-3">
    <h1 class="uppercase text-dark text-3xl font-bold leading-none">rules</h1>
    <figure on:click="{hideRules}" class="cursor-pointer">
      <img src="images/icon-close.svg" alt="close" />
    </figure>
  </div>
  <figure class="flex justify-center mt-8 mb-3 px-5">
    <img src="images/image-rules.svg" alt="rules" />
  </figure>
</div>
