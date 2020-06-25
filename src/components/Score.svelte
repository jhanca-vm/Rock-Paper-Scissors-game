<script>
  export let count;
</script>

<section class="py-10">
  <div
    class="flex justify-between py-5 px-6 border-3 rounded-2xl max-w-4xl mx-auto
    border-grey"
  >
    <figure class="flex items-center">
      <img src="images/logo.svg" alt="Rock, Paper, Scissors" />
    </figure>
    <div
      class="bg-gray-100 text-center flex flex-col justify-center w-36 h-28
      rounded-lg leading-none shadow-lg"
    >
      <h4 class="text-lg uppercase tracking-widest text-dark-blue">score</h4>
      <p class="text-6xl text-dark font-bold">{count}</p>
    </div>
  </div>
</section>
