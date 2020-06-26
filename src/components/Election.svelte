<style>
  @media screen and (max-width: 639px) {
    section {
      background-size: 16rem;
    }
  }
</style>

<script>
  import Token from './Token.svelte';
</script>

<section
  style="background-image: url(images/bg-triangle.svg)"
  class="grid max-w-xs mx-auto sm:max-w-none lg:grid-cols-4 grid-rows-2 bg-no-repeat
  bg-center pt-6"
>
  <div class="sm:mx-auto md:pl-16 lg:col-start-2 lg:pl-0 lg:pr-16 xl:pr-0 ">
    <Token name="paper" on:playing />
  </div>
  <div class="ml-auto sm:mx-auto md:pr-16 lg:pl-16 lg:pr-0 xl:pl-0">
    <Token name="scissors" on:playing />
  </div>
  <div class="col-span-2 mx-auto -mt-2 sm:mt-2 lg:col-start-2">
    <Token name="rock" on:playing />
  </div>
</section>
