<script>
  import Token from './Token.svelte';
</script>

<section>
  <div class="paper">
    <Token type="paper" />
  </div>
  <div class="scissors">
    <Token type="scissors" />
  </div>
  <div class="rock">
    <Token type="rock" />
  </div>
</section>

<style>
  section {
    background-image: url(/assets/bg-triangle.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 44.27vw 50.13vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    max-width: 328px;
    padding: 3.2rem 0;
    row-gap: 15.34px;
  }

  .rock {
    grid-column: span 2;
    margin: 0 auto;
  }

  .scissors {
    margin-left: auto;
  }

  @media (min-width: 540px) {
    section {
      background-position-y: 156px;
      background-size: 254px 287px;
      max-width: none;
      padding: 6.4rem 0 0.4rem;
      row-gap: 24px;
      width: 476px;
    }
  }
</style>
