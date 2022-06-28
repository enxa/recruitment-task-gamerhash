<script>
  import { gamercoinSection } from '../app'
</script>

<template>
  <main id="main-content" class="rim">
    <section class="wallet">

    </section>
    <section class="gamercoin">
      <h2>{$gamercoinSection.header}</h2>
      <p>{$gamercoinSection.body}</p>
      <h5>{$gamercoinSection.subheader}</h5>
    </section>
    <section class="crypto">
      <h2>{$gamercoinSection.header}</h2>
      <p>{$gamercoinSection.body}</p>
      <h5>{$gamercoinSection.subheader}</h5>
    </section>
  </main>
</template>

<style lang="scss">
  main {
    @media (min-width: 960px) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }
    .wallet {
      @media (min-width: 960px) {
        grid-column: 1/6;
      }
    }
    .gamercoin, .crypto {
      margin: 12rem 0;
      @media (min-width: 960px) {
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
      margin: 12rem 0;
      @media (min-width: 960px) {
        grid-column: 7/13;
      }
    }
    .crypto {
      margin: 12rem 0;
      @media (min-width: 960px) {
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