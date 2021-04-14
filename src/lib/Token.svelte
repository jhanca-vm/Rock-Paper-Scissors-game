<script>
  import { game } from './store';

  export let type;
  export let disabled = false;

  const { picked } = game;

  function play() {
    picked.set(type);
    game.generateHousePicked();

    if ($picked !== game.housePicked) {
      setTimeout(() => {
        document.getElementById('winner').classList.add('shadow-light');
      }, 1250);
    }
  }
</script>

<button class={type} {disabled} on:click={play}>
  <span class="background">
    <span
      class="icon"
      style={`background-image: url('/assets/icons/${type}.svg')`}
    />
  </span>
</button>

<style>
  button {
    align-items: center;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    height: 133px;
    justify-content: center;
    width: 130px;
  }

  button:hover,
  button:focus-visible {
    box-shadow: 0 0 0 24px rgba(255, 255, 255, 0.05);
  }

  button:disabled {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }

  .background {
    background-image: linear-gradient(0deg, #f3f3f3 0%, #dadada 98.34%);
    border-top: 5.23px solid #babfd4;
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  .icon {
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .paper {
    background-color: #4664f4;
    border-bottom: 5.88px solid #2a45c2;
  }

  .scissors {
    background-color: #eb9f0e;
    border-bottom: 5.88px solid #c76c1b;
  }

  .rock {
    background-color: #db2e4d;
    border-bottom: 5.88px solid #9d1634;
  }

  @media (min-width: 540px) {
    button {
      height: 203px;
      width: 198px;
    }

    .paper,
    .scissors,
    .rock {
      border-bottom-width: 9px;
    }

    .background {
      border-top-width: 8px;
      height: 152px;
      width: 152px;
    }

    .icon {
      background-size: 45%;
    }
  }
</style>
