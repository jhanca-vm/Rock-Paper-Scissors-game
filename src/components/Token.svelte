<style>
  div {
    height: fit-content;
    width: fit-content;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';

  export let name;
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
  on:click="{start}"
  class="bg-{name} border-{name} mb-8 p-{p} rounded-full border-b-{b} cursor-pointer
  shadow-2xl"
>
  <figure
    class="flex border-gray-500 border-opacity-50 border-t-{b} items-center justify-center
    bg-gray-300 h-{s} w-{s} rounded-full"
  >
    <img class="w-{i}" src="images/icon-{name}.svg" alt="{name}" />
  </figure>
</div>
