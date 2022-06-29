<script lang="ts">
  import { devices } from '../app.js'
</script>

<template>
  <section class="profitabilty-calculator rim">
    <div>
      <h2>Profitability calculator</h2>
      <h5>You earn bitcoins. When BTC exchange rate goes up, your profit automatically increases.</h5>
      <div class="cards">
        {#each $devices as device}
          <div class="card">
            <h5>{device.name}</h5>
            <img src={device.icon} alt="{device.name} icon">
            <h4>${device.value.toLocaleString()}</h4>
          </div>
        {/each}
      </div>
      <h5>Crypto exchange rates are independent of GamerHash operations, the estimation is purely for illustrative purposes</h5>
      <button>
        <img src="/images/art.svg" alt="art icon">
        <h5>Check how much your<br>setup will earn</h5>
      </button>
    </div>
  </section>
</template>

<style lang="scss">
  .profitabilty-calculator {
    width: 100%;
    min-height: 50vh;
    background: var(--color-woodsmoke);
    & > div {
      padding: 12rem 0;
      text-align: center;
      h2 {
        color: var(--color-alabaster);
      }
      .cards {
        padding: 4rem;
        display: grid;
        gap: 2rem;
        justify-content: center;
        @media (min-width: 640px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 1280px) {
          grid-template-columns: repeat(4, 1fr);
        }
        .card {
          width: 28rem;
          height: 28rem;
          padding: 3rem;
          display: grid;
          place-items: center;
          margin: auto;
          position: relative;
          border-radius: 1rem;
          cursor: pointer;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: -.7rem -.7rem 1rem #272B3140;
          }
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: .7rem .7rem 1rem #00000040;
          }
          h5 {
            font: var(--font-regular-medium);
            color: var(--color-alabaster);
          }
          img {
            max-width: 15rem;
          }
          h4 {
            color: var(--color-redribbon);
          }
        }
      }
      h5 {
        font: var(--font-regular-medium);
      }
      button {
        background: transparent;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--color-dovegray);
        border-radius: 1rem;
        padding: 1.5rem 2rem;
        margin-top: 8rem;
        transition: .4s background ease-in-out;
        &:hover {
          background: var(--color-alabaster);
        }
        &:hover h5 {
          color: var(--color-woodsmoke);
        }
        &:hover img {
          filter: invert(100%)
        }
        img {
          max-width: 6rem;
          transition: .4s filter ease-in-out;
        }
        h5 {
          color: var(--color-alabaster);
          text-align: left;
          padding-left: 2rem;
          transition: .4s color ease-in-out;
        }
      }
    }
  }
</style>