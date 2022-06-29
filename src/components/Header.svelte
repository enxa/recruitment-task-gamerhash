<script>
  import { browser } from '$app/env';
  import { headerLinks } from '../app.js'
  import { animateInViewport } from '../animations/animateInViewport.js'

  let scrollToNextSection = () => {
    if (browser) scrollTo(0, window.innerHeight)
  }
</script>

<template>
  <header class="rim">
    <slot />
    <section>
      <div class="title"></div>
      <div class="links">
        {#each $headerLinks as link}
          <a rel="external" href={link.url}>
            <img src={link.icon} alt={link.name}>
            <h3 use:animateInViewport>{link.name}</h3>
          </a>
        {/each}
      </div>
      <div class="subtitle">
        <a rel="external" href="http://www.gamerhash.com">
          <h6 use:animateInViewport>What can I do with earned funds?</h6>
        </a>
      </div>
      <div class="arrow">
        <a href="#main-content" on:click={scrollToNextSection}>
          <img src="/images/arrow.svg" alt="arrow pointing down">
        </a>
      </div>
    </section>
  </header>
</template>

<style lang="scss">
  header {
    width: 100%;
    min-height: 110vh;
    background: var(--color-woodsmoke2);
    display: grid;
    align-items: center;
    section {
      background: var(--gradient-radial-dark);
      .title {
        width: 100%;
        height: 50vh;
        transform: scale(1.1);
        display: grid;
        place-items: center;
        position: relative;
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          bottom: 0;
          right: 0;
          background: url('/images/mining-text.svg') no-repeat bottom center / contain;
        }
      }
      .links {
        a {
          display: flex;
          gap: 2rem;
          color: var(--color-dovegray);
          transition: .4s color;
          height: 100%;
          z-index: 10;
          transition: .4s color;
          &:hover {
            color: var(--color-alabaster);
          }
          &:hover img {
            filter: brightness(2);
          }
          h3 {
            font: var(--font-large-semibold);
          }
          img {
            width: 4rem;
            height: 4rem;
            transition: .4s filter;
          }
        }
        @media (min-width: 1280px) {
          display: flex;
          gap: 6rem;
        }
      }
      .subtitle {
        a {
          color: var(--color-dovegray);
          text-align: center;
          transition: .4s color;
          &:hover {
            color: var(--color-alabaster);
          }
          h6 {
            font-size: 2rem;
            margin: 5rem;
          }
        }
      }
      .arrow {
        display: flex;
        justify-content: center;
        transition: .8s transform ease-in-out;
        &:hover {
          transform: translateY(.2rem);
        }
        img {
          width: 2rem;
          height: 1rem;
        }
      }
    }
  }
</style>