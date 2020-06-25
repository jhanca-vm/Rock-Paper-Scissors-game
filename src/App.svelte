<style>
  :global(body) {
    font-family: 'Barlow Semi Condensed', sans-serif;
    background-image: radial-gradient(circle at top, #1f3756 0%, #141539 100%);
  }
</style>

<script>
  import { scale } from 'svelte/transition';
  import Modal from 'svelte-simple-modal';
  import Score from './components/Score.svelte';
  import Election from './components/Election.svelte';
  import Token from './components/Token.svelte';
  import Content from './components/Content.svelte';

  let count = 0;
  let play = false;
  let name;
  let random;
  let result;
  let color;

  const tokens = ['paper', 'rock', 'scissors'];
  const size = {
    b: 12,
    p: 8,
    s: 56,
    i: 28,
  };

  $: if (result == 'you lose') {
    color = 'text-red-600';
  } else {
    color = 'text-dark';
  }

  function startPlay(e) {
    let n = Math.floor(Math.random() * (3 - 0)) + 0;

    play = e.detail.elected;
    name = e.detail.nameToken;
    random = tokens[n];

    setTimeout(() => {
      document.getElementById('detail').classList.remove('hidden');

      if (name == 'paper' && random == 'rock') {
        result = 'you win';
        count += 1;
      } else if (name == 'rock' && random == 'scissors') {
        result = 'you win';
        count += 1;
      } else if (name == 'scissors' && random == 'paper') {
        result = 'you win';
        count += 1;
      } else if (name == random) {
        result = 'draw';
      } else {
        result = 'you lose';
        count -= 1;
      }
    }, 1500);
  }

  function newRound() {
    play = false;
  }
</script>

<main class="container mx-auto">
  <Score {count} />
  {#if play == false}
    <Election on:playing="{startPlay}" />
  {:else}
    <section class="flex justify-center text-center text-2xl pt-5 pb-6">
      <div class="mr-10">
        <h2 class="uppercase font-bold tracking-widest mb-16">you picked</h2>
        <Token {name} {...size} />
      </div>
      <div id="detail" class="hidden flex flex-col justify-center mx-4">
        <p class="uppercase tracking-wide font-bold text-5xl mb-1">{result}</p>
        <button
          on:click="{newRound}"
          class="uppercase bg-gray-200 {color} text-base rounded-lg py-2
          focus:outline-none tracking-widest"
        >
          play again
        </button>
      </div>
      <div class="ml-10 relative">
        <h2 class="uppercase font-bold tracking-widest mb-16">the house picked</h2>
        <div in:scale="{{ delay: 250 }}" class="relative z-10">
          <Token name="{random}" {...size} />
        </div>
        <span
          class="absolute w-56 h-56 bg-gray-900 opacity-25 mb-18 left-0 bottom-0 ml-8
          rounded-full"
        ></span>
      </div>
    </section>
  {/if}
  <Modal>
    <Content />
  </Modal>
</main>
