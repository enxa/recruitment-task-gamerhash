<script>
  import { headerLinks } from '../app'
</script>

<template>
  <header class="rim">
    <slot />
    <section>
      <div class="title">
        <img src="/images/Mining text.svg" alt="Mining logo">
      </div>
      <div class="links">
        {#each $headerLinks as link}
          <a rel="external" href={link.url}>
            <img src={link.icon} alt={link.name}>
            <h3>{link.name}</h3>
          </a>
        {/each}
      </div>
      <div class="subtitle">
        <a rel="external" href="http://www.gamerhash.com">
          <h6>What can I do with earned funds?</h6>
        </a>
      </div>
      <div class="arrow">
        <a href="#main-content">
          <img src="/images/arrow.svg" alt="arrow pointing down">
        </a>
      </div>
    </section>
  </header>
</template>

<style lang="scss">
  header {
    width: 100%;
    min-height: 100vh;
    background: var(--color-woodsmoke2);
    display: grid;
    align-items: center;
    section {
      background: var(--gradient-radial-dark);
      transform: translateY(10rem);
      .title {
        transform: scale(1.1);
        display: grid;
        place-items: center;
        &::before {
          content: '';
          position: absolute;
          width: 70%;
          height: 70%;
          transform: translate(8%, -70%);
          background: url('/images/astro.png') no-repeat top right / contain;
        }
        img {
          width: 80vw;
          max-height: 40vh;
        }
      }
      .links {
        a {
          display: flex;
          gap: 2rem;
          color: var(--color-dovegray);
          h3 {
            font: var(--font-large-semibold);
          }
          img {
            width: 4rem;
            height: 4rem;
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
          h6 {
            font-size: 2rem;
            margin: 5rem;
          }
        }
      }
      .arrow {
        display: flex;
        justify-content: center;
        img {
          width: 2rem;
          height: 1rem;
          @media (min-width: 1600px) {
            transform: translateY(5rem);
          }
        }
      }
    }
  }
</style>