<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function showRules() {
    dispatch('show');
    document.body.style.overflow = 'hidden';
  }
</script>

<footer>
  <button on:click={showRules}>Rules</button>
</footer>

<style>
  footer {
    padding-bottom: 56px;
  }

  button {
    border: 1px solid white;
    color: white;
    display: block;
    height: 4rem;
    margin: 0 auto;
    width: 12.8rem;
  }

  button:hover,
  button:focus-visible {
    background-color: white;
    color: #3b4262;
  }

  @media (min-width: 540px) {
    footer {
      padding: 0 32px 32px;
    }

    button {
      margin-right: 0;
    }
  }
</style>
