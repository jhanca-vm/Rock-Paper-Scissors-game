<style>
  div {
    height: fit-content;
    width: fit-content;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';

  export let name;
  export let nm;
  export let b = 9;
  export let p = 5;
  export let s = 36;
  export let i = 16;

  const dispatch = createEventDispatcher();

  function start() {
    dispatch('playing', {
      elected: true,
      nameToken: name,
    });
  }
</script>

<div
  id="{nm}"
  on:click="{start}"
  class="bg-{name} border-{name} p-3 sm:p-4 md:p-{p} rounded-full border-b-6 sm:border-b-8
  md:border-b-{b} cursor-pointer shadow-2xl mb-10 md:mb-8"
>
  <figure
    class="flex border-gray-500 border-opacity-50 border-t-6 sm:border-t-8 md:border-t-{b}
    items-center justify-center bg-gray-300 h-24 w-24 sm:h-32 sm:w-32 md:h-{s} md:w-{s}
    rounded-full"
  >
    <img class="w-10 sm:w-14 md:w-{i}" src="images/icon-{name}.svg" alt="{name}" />
  </figure>
</div>
