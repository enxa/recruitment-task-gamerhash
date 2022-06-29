<script lang="ts">
  import { fade } from 'svelte/transition'
  import { modalIsOpen } from '../app.js'
  
  export let modalTitle: string = ""
</script>

<template>
  {#if $modalIsOpen}
    <section class="modal-outer" on:click|self={() => $modalIsOpen = false} transition:fade>
      <div>
        <h3>{modalTitle}</h3>
        <div class="modal-inner">
          <slot />
        </div>
      </div>
    </section>
  {/if}
</template>

<style lang="scss">
  .modal-outer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(23, 26, 31, .75);
    display: grid;
    place-items: center;
    h3 {
      font: var(--font-large-semibold);
      color: var(--color-alabaster);
      text-align: center;
    }
    .modal-inner {
      background: var(--color-alabaster);
      padding: 2rem;
      margin: 2rem;
      border-radius: 1rem;
    }
  }
</style>