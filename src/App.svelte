<style>
  :global(body) {
    font-family: 'Barlow Semi Condensed', sans-serif;
    background-image: radial-gradient(circle at top, #1f3756 0%, #141539 100%);
  }
</style>

<script>
  import { scale } from 'svelte/transition';
  import Modal from './components/Modal.svelte';
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
        document.getElementById('paper').classList.add('winner');
      } else if (name == 'rock' && random == 'scissors') {
        result = 'you win';
        count += 1;
        document.getElementById('rock').classList.add('winner');
      } else if (name == 'scissors' && random == 'paper') {
        result = 'you win';
        count += 1;
        document.getElementById('scissors').classList.add('winner');
      } else if (name == random) {
        result = 'draw';
      } else {
        result = 'you lose';
        count -= 1;
        document.getElementById('random').classList.add('winner');
      }
    }, 1500);
  }

  function newRound() {
    play = false;
  }
</script>

<main class="container mx-auto pb-6 md:pb-0">
  <Score {count} />
  {#if play == false}
    <Election on:playing="{startPlay}" />
  {:else}
    <section
      class="grid grid-cols-2 grid-rows-2 lg:flex justify-center text-center sm:text-2xl
      pt-5 pb-6 play"
    >
      <div class="flex flex-col-reverse items-center lg:block lg:mr-10">
        <h2 class="uppercase font-bold tracking-widest lg:mb-16">you picked</h2>
        <Token nm="{name}" {name} {...size} />
      </div>
      <div
        id="detail"
        class="hidden flex flex-col justify-center items-center mx-4 row-start-2 mt-5
        sm:mt-20 lg:mt-0 col-span-2"
      >
        <p class="uppercase tracking-wide font-bold text-5xl mb-1">{result}</p>
        <button
          on:click="{newRound}"
          class="uppercase bg-gray-200 {color} text-lg lg:text-base rounded-lg py-2
          focus:outline-none tracking-widest w-48"
        >
          play again
        </button>
      </div>
      <div
        class="flex flex-col-reverse items-center lg:block lg:ml-10 relative col-start-2"
      >
        <h2 class="uppercase font-bold tracking-widest lg:mb-16 truncate">
          the house picked
        </h2>
        <div in:scale="{{ delay: 250 }}" class="relative z-10">
          <Token nm="random" name="{random}" {...size} />
        </div>
        <span
          class="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 bg-gray-900 opacity-25
          bottom-0 mb-20 sm:mb-24 md:mb-28 lg:left-0 lg:ml-8 lg:mb-18 rounded-full"
        ></span>
      </div>
    </section>
  {/if}
  <Modal>
    <Content />
  </Modal>
</main>
