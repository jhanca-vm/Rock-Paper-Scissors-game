<script>
  import { scale, fade } from 'svelte/transition';
  import { game } from '../store';
  import Token from '../Token.svelte';
  import Alert from './Alert.svelte';

  const { picked, housePicked, result } = game;
</script>

<section class="pickeds" in:fade={{ duration: 250 }}>
  <div>
    <div id={result === 'you win' ? 'winner' : null}>
      <Token type={$picked} disabled={true} />
    </div>
    <p>you picked</p>
  </div>
  <div class="result hide" in:fade={{ delay: 1000 }}>
    <Alert />
  </div>
  <div>
    <span />
    <div
      id={result === 'you lose' ? 'winner' : null}
      class="house-picked"
      in:scale={{ duration: 500, delay: 500 }}
    >
      <Token type={housePicked} disabled={true} />
    </div>
    <p>the house picked</p>
  </div>
</section>
<section class="result" in:fade={{ delay: 1000 }}>
  <Alert />
</section>

<style>
  section {
    text-align: center;
    text-transform: uppercase;
  }

  div {
    border-radius: 50%;
    position: relative;
  }

  span {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    display: inline-block;
    height: 110px;
    left: 24px;
    position: absolute;
    top: 10px;
    width: 110px;
  }

  p {
    color: white;
    font-size: 1.5rem;
    letter-spacing: 0.1875rem;
    line-height: 3.2rem;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    margin-top: 1.7rem;
  }

  .pickeds {
    display: flex;
    justify-content: space-between;
    margin: 9.2rem 0 6.2rem;
  }

  .result {
    margin-bottom: 5.6rem;
  }

  .house-picked {
    margin-left: auto;
    width: fit-content;
  }

  @media (min-width: 768px) {
    span {
      height: 152px;
      bottom: 30px;
      left: auto;
      right: 23px;
      top: auto;
      width: 152px;
    }

    p {
      font-size: 2.4rem;
      letter-spacing: 0.3rem;
      margin: 0 0 6.4rem;
    }

    section > div {
      display: flex;
      flex-direction: column-reverse;
    }

    section > div:first-of-type {
      animation: to-left 1.25s;
    }

    section > div:last-of-type {
      animation: to-right 1.25s;
    }

    .pickeds {
      align-items: center;
      margin: 7.2rem auto 3.2rem;
      max-width: 700px;
    }

    .result {
      display: none;
      margin: 7.2rem -28px 0 0;
    }

    .hide {
      display: block;
    }
  }
</style>
