<script>
  import { game } from '../store';

  const { picked, result } = game;
</script>

<p>{result}</p>
<button class:txt-red={result === 'you lose'} on:click={() => picked.set(null)}>
  play again
</button>

<style>
  p {
    color: white;
    font-size: 5.6rem;
    line-height: 6.7rem;
    margin-bottom: 1.6rem;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }

  button {
    background-image: linear-gradient(0deg, #f3f3f3, #ffffff);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    color: #3b4262;
    height: 4.8rem;
    width: 22rem;
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.15);
  }
</style>
