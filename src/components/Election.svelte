<script>
  import Token from './Token.svelte';
</script>

<section
  style="background-image: url(images/bg-triangle.svg)"
  class="grid grid-cols-4 grid-rows-2 bg-no-repeat bg-center pt-6"
>
  <div class="col-start-2 mx-auto mb-8">
    <Token name="paper" on:playing />
  </div>
  <div class="mx-auto mb-8">
    <Token name="scissors" on:playing />
  </div>
  <div class="col-start-2 col-span-2 mx-auto">
    <Token name="rock" on:playing />
  </div>
</section>
