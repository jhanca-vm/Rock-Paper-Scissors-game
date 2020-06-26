<style>
  * {
    box-sizing: border-box;
  }

  .bg {
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.66);
  }

  .window-wrap {
    position: relative;
    margin: 2rem;
    max-height: 100%;
  }

  .window {
    position: relative;
    width: fit-content;
    max-width: 100%;
    max-height: 100%;
    margin: 2rem auto;
    color: black;
    border-radius: 0.5rem;
    background: white;
  }

  .content {
    position: relative;
    padding: 1rem;
    max-height: calc(100vh - 4rem);
    overflow: auto;
  }
</style>

<script>
  import { setContext as baseSetContext } from 'svelte';
  import { fade } from 'svelte/transition';

  export let key = 'simple-modal';
  export let closeButton = true;
  export let closeOnEsc = true;
  export let closeOnOuterClick = true;
  export let styleBg = { top: 0, left: 0 };
  export let styleWindow = {};
  export let styleContent = {};
  export let setContext = baseSetContext;
  export let transitionBg = fade;
  export let transitionBgProps = { duration: 250 };
  export let transitionWindow = transitionBg;
  export let transitionWindowProps = transitionBgProps;

  const defaultState = {
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindow,
    styleContent,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
  };
  let state = { ...defaultState };

  let Component = null;
  let props = null;

  let background;
  let wrap;

  const camelCaseToDash = str => str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

  const toCssString = props =>
    Object.keys(props).reduce(
      (str, key) => `${str}; ${camelCaseToDash(key)}: ${props[key]}`,
      ''
    );

  $: cssBg = toCssString(state.styleBg);
  $: cssWindow = toCssString(state.styleWindow);
  $: cssContent = toCssString(state.styleContent);
  $: currentTransitionBg = state.transitionBg;
  $: currentTransitionWindow = state.transitionWindow;

  const toVoid = () => {};
  let onOpen = toVoid;
  let onClose = toVoid;
  let onOpened = toVoid;
  let onClosed = toVoid;

  const open = (NewComponent, newProps = {}, options = {}, callback = {}) => {
    Component = NewComponent;
    props = newProps;
    state = { ...defaultState, ...options };
    onOpen = callback.onOpen || toVoid;
    onClose = callback.onClose || toVoid;
    onOpened = callback.onOpened || toVoid;
    onClosed = callback.onClosed || toVoid;
  };

  const close = (callback = {}) => {
    onClose = callback.onClose || onClose;
    onClosed = callback.onClosed || onClosed;
    Component = null;
    props = null;
  };

  const handleKeyup = event => {
    if (state.closeOnEsc && Component && event.key === 'Escape') {
      event.preventDefault();
      close();
    }
  };

  const handleOuterClick = event => {
    if (
      state.closeOnOuterClick &&
      (event.target === background || event.target === wrap)
    ) {
      event.preventDefault();
      close();
    }
  };

  setContext(key, { open, close });
</script>

<svelte:window on:keyup="{handleKeyup}" />

{#if Component}
  <div
    class="bg"
    on:click="{handleOuterClick}"
    bind:this="{background}"
    transition:currentTransitionBg="{state.transitionBgProps}"
    style="{cssBg}"
  >
    <div class="window-wrap" bind:this="{wrap}">
      <div
        class="window"
        transition:currentTransitionWindow="{state.transitionWindowProps}"
        on:introstart="{onOpen}"
        on:outrostart="{onClose}"
        on:introend="{onOpened}"
        on:outroend="{onClosed}"
        style="{cssWindow}"
      >
        <div class="content" style="{cssContent}">
          <svelte:component this="{Component}" {...props} />
        </div>
      </div>
    </div>
  </div>
{/if}
<slot />
