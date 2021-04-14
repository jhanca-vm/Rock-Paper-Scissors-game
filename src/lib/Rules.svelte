<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function hideRules() {
    dispatch('hide');
    document.body.style.overflow = 'auto';
  }
</script>

<div>
  <section>
    <h2>Rules</h2>
    <img src="/assets/rules.svg" alt="rules" />
    <button on:click={hideRules} />
  </section>
</div>

<style>
  div,
  section {
    height: 100vh;
    width: 100%;
  }

  div {
    position: fixed;
  }

  section {
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 9.2rem 0 6.8rem;
  }

  h2 {
    color: #3b4262;
    font-size: 3.2rem;
    line-height: 1;
    text-transform: uppercase;
  }

  button {
    background-image: url('/assets/icons/close.svg');
    height: 20px;
    width: 20px;
  }

  @media (min-width: 540px) {
    div {
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
    }

    section {
      border-radius: 8px;
      box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
      display: grid;
      grid-template-columns: 1fr 20px;
      grid-template-rows: max-content;
      height: 41.5rem;
      padding: 32px;
      width: 400px;
    }

    button {
      grid-column-start: 2;
      grid-row-start: 1;
    }

    img {
      align-self: flex-end;
      grid-column: span 2;
      margin: 0 auto;
    }
  }
</style>
