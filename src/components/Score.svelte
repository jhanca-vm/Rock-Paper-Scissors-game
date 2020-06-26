<script>
  export let count;
</script>

<section class="pt-6 pb-8 sm:py-10">
  <div
    class="flex justify-between py-3 px-3 sm:py-5 sm:px-6 border-3 rounded-lg
    sm:rounded-2xl max-w-4xl mx-auto border-grey"
  >
    <figure class="flex items-center">
      <img class="w-28 sm:w-auto" src="images/logo.svg" alt="Rock, Paper, Scissors" />
    </figure>
    <div
      class="bg-gray-100 text-center flex flex-col justify-center w-24 h-20 sm:w-36
      sm:h-28 rounded-md sm:rounded-lg leading-none shadow-lg"
    >
      <h4
        class="text-xs sm:text-lg mt-1 sm:mt-0 uppercase tracking-widest text-dark-blue"
      >
        score
      </h4>
      <p class="text-5xl sm:text-6xl text-dark font-bold">{count}</p>
    </div>
  </div>
</section>
