<script lang="ts">
  import { modalIsOpen } from '../app.js'
</script>

<template>
  <nav class="rim">
    <a rel="external" href="http://www.gamerhash.com">
      <img src="/images/gamerhash-logo.svg" alt="">
    </a>
    <button on:click={() => $modalIsOpen = true}>Log in</button>
  </nav>
</template>

<style lang="scss">
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-woodsmoke2);
    z-index: 100;
    img {
      width: 18rem;
      margin: 1.5rem 0;
    }
    button {
      font: var(--font-small-semibold);
      color: var(--color-alabaster);
      border: .1px solid var(--color-dovegray);
      border-radius: .3rem;
      padding: 1.5rem 2rem;
      margin: 1.5rem 1rem;
      background: transparent;
      transition: .4s border ease-in-out;
      &:hover {
        border: .1px solid var(--color-alabaster);
      }
    }
  }
</style>