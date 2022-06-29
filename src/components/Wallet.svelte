<script lang="ts">
  import { slide } from 'svelte/transition'
  import { onMount } from 'svelte'
  import { wallet } from '../app'
  
  onMount(async () => await import('@lottiefiles/lottie-player'))  // dynamic import cause lottie-player uses window object

  let copied: boolean = false

  let copyText = async (): Promise<any> => {
    await navigator.clipboard.writeText($wallet.coinToken)
    copied = true
    setTimeout(() => copied = false, 1000)
  }
</script>

<template>
  <section class="wallet">
    <div class="token">
      <lottie-player src="/lottie/data.json" style="width: 25.6rem; height: 25.6rem" autoplay loop></lottie-player>
      <h3>{$wallet.coinName}</h3>
      <div>
        <input type="text" bind:value={$wallet.coinToken}>
        <button on:click={copyText}><img src="/images/paste.svg" alt="metamask logo"></button>
      </div>
      {#if copied}
        <div class="copy-message" transition:slide>Copied!</div>
      {/if}
    </div>
    <div class="metamask">
      <button><img src="/images/metamsk-logo.svg" alt="metamask logo">&nbsp;&nbsp;Add&nbsp;to&nbsp;MetaMask</button>
    </div>
  </section>
</template>

<style lang="scss">
  .wallet {
    background: var(--color-woodsmoke2);
    box-shadow: 0rem 0rem 2rem var(--color-woodsmoke2);
    border-radius: 1rem;
    .token {
      background: var(--color-shark2);
      border-radius: 1rem;
      padding: 6.6rem 0 4.8rem 0;
      display: grid;
      place-items: center;
      h3 {
        color: var(--color-white);
        margin-top: 2rem;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover input {
          color: var(--color-alabaster);
        }
        &:hover img {
          filter: brightness(2);
        }
        input, button, img {
          background: transparent;
          padding: .25rem;
          transition: .4s all ease-in-out;
        }
        input {
          font: var(--font-regular-semibold);
          color: var(--color-dovegray);
          font-style: italic;
          @media (min-width: 1280px) {
            width: 35rem;
          }
        }
      }
      .copy-message {
        color: var(--color-shamrock);
      }
    }
    .metamask {
      display: grid;
      place-items: center;
      button {
        font: var(--font-regular-semibold);
        color: var(--color-alabaster);
        background: transparent;
        border: 1px solid var(--color-shark);
        border-radius: .3rem;
        padding: 1.3rem 3.5rem;
        margin: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .4s all ease-in-out;
        &:hover {
          color: var(--color-shark);
          background: var(--color-alabaster);
        }
      }
    }
  }
</style>