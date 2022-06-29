<script lang="ts">
  import { gamercoinSection } from '../app'
</script>

<template>
  <main id="main-content" class="rim">
    <section class="wallet">
      <slot name="wallet" />
    </section>
    <section class="gamercoin">
      <h2>{$gamercoinSection.header}</h2>
      <p>{@html $gamercoinSection.body}</p>
      <h5>{$gamercoinSection.subheader}</h5>
    </section>
    <section class="crypto">
      <h2>{$gamercoinSection.header}</h2>
      <p>{@html $gamercoinSection.body}</p>
      <h5>{$gamercoinSection.subheader}</h5>
      <slot name="crypto" />
    </section>
  </main>
</template>

<style lang="scss">
  main {
    transform: translate(0, -9rem);
    @media (min-width: 640px) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }
    .wallet {
      @media (min-width: 640px) {
        grid-column: 1/6;
      }
    }
    .gamercoin, .crypto {
      padding: 3rem 0;
      @media (min-width: 640px) {
        padding: 12rem 0;
        grid-column: 7/13;
      }
      h2 {
        color: var(--color-woodsmoke2);
        padding: 2rem 0;
      }
      h5 {
        color: var(--color-shark)
      }
    }
    .gamercoin {
      @media (min-width: 640px) {
        grid-column: 7/13;
      }
    }
    .crypto {
      text-align: center;
      @media (min-width: 640px) {
        grid-column: 1/13;
      }
    }
    h2 {
      color: var(--color-woodsmoke2);
      padding: 2rem 0;
    }
    h5 {
      color: var(--color-shark)
    }
  }
</style>