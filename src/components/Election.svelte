<style>
  section {
    background-image: url(/images/bg-triangle.svg);
  }
</style>

<script>
  import Token from './Token.svelte';
</script>

<section in class="grid grid-cols-4 grid-rows-2 bg-no-repeat bg-center pt-6">
  <div class="col-start-2 mx-auto">
    <Token name="paper" on:playing />
  </div>
  <div class="mx-auto">
    <Token name="scissors" on:playing />
  </div>
  <div class="col-start-2 col-span-2 mx-auto">
    <Token name="rock" on:playing />
  </div>
</section>
