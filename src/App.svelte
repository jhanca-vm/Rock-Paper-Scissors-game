<script>
  import { onMount } from 'svelte';
  import { game } from './lib/store';
  import Header from './lib/Header.svelte';
  import Options from './lib/Options.svelte';
  import Result from './lib/Result/index.svelte';
  import Footer from './lib/Footer.svelte';
  import Rules from './lib/Rules.svelte';

  const { picked, score } = game;

  let rules = false;

  onMount(() => {
    const item = localStorage.getItem('score');

    if (item) {
      score.set(Number(item));
    }
  });
</script>

<Header />
<main>
  {#if !$picked}
    <Options />
  {:else}
    <Result />
  {/if}
</main>
<Footer on:show={() => (rules = true)} />

{#if rules}
  <Rules on:hide={() => (rules = false)} />
{/if}

<style>
  main {
    padding: 0 32px;
  }
</style>
