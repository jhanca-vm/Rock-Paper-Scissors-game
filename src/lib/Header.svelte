<script>
  import { game } from './store';

  const { score } = game;
</script>

<header>
  <section>
    <span class="logo" />
    <div>
      <h2>score</h2>
      <span class="score">{$score}</span>
    </div>
  </section>
</header>

<style>
  header {
    padding: 3.2rem 32px 0;
  }

  section {
    align-items: center;
    border: 3px solid rgba(255, 255, 255, 0.29);
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 700px;
    padding: 1.2rem 12px 1.2rem 24px;
  }

  div {
    background-image: linear-gradient(0deg, #f3f3f3, #ffffff);
    border-radius: 0.4rem;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    padding: 0.9rem 0 0.3rem;
    text-align: center;
    width: 8rem;
  }

  h2 {
    color: #2a45c2;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.156rem;
    line-height: 1.2rem;
    text-transform: uppercase;
  }

  .logo {
    background-image: url('/assets/logo.svg');
    background-size: cover;
    display: inline-block;
    height: 48px;
    width: 83px;
  }

  .score {
    color: #565468;
    font-size: 4rem;
  }

  @media (min-width: 640px) {
    header {
      padding-top: 4.8rem;
    }

    section {
      border-radius: 1.5rem;
      padding: 1.8rem 24px 1.8rem 32px;
    }

    h2 {
      font-size: 1.6rem;
      letter-spacing: 0.25rem;
    }

    div {
      border-radius: 0.8rem;
      padding: 1.7rem 0 0.8rem;
      width: 15rem;
    }

    .logo {
      height: 96px;
      width: 159px;
    }

    .score {
      font-size: 6.4rem;
    }
  }
</style>
