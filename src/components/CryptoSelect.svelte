<script lang="ts">
  import { clickOutside } from '../lib/clickOutside.js'

  import { crypto, cryptoSelectIsOpen } from '../app.js'

  let selected: { icon: string, name: string, valueBTC: number, valueUSD: number } = $crypto[0]

  let clickSelect = (): void => {
    $cryptoSelectIsOpen = !$cryptoSelectIsOpen
  }

  let clickOption = (option): void => {
    selected = option
    $cryptoSelectIsOpen = false
  }
</script>

<template>
  <section class="crypto-select">
    <div class=select use:clickOutside on:click-outside={() => $cryptoSelectIsOpen = false}>
      <div class="selected" on:click={() => clickSelect()}>
        <div class="option">
          <div>
            <div class="icon"><img src={selected.icon} alt="{selected.name} icon"></div>
            <div class="name"><h5>{selected.name}</h5></div>
          </div>
          <div>
            <div class="valueBTC">{selected.valueBTC}</div>
            <div class="valueUSD">{selected.valueUSD}</div>
            {#if $cryptoSelectIsOpen}
              <img class="triangle" src="/images/triangle-up.svg" alt="open select list">
            {:else}
              <img class="triangle" src="/images/triangle-down.svg" alt="close select list">
            {/if}
          </div>
        </div>
      </div>
    
      {#if $cryptoSelectIsOpen}
        {#each $crypto as currency}
          <div class="option" on:click={() => clickOption(currency)}>
            <div>
              <div class="icon"><img src={currency.icon} alt="{currency.name} icon"></div>
              <div class="name"><h5>{currency.name}</h5></div>
            </div>
            <div>
              <div class="valueBTC">{currency.valueBTC}</div>
              <div class="valueUSD">{currency.valueUSD}</div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </section>
</template>

<style lang="scss">
  .crypto-select {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    .select {
      cursor: pointer;
      width: 35.5rem;
      position: absolute;
      border-radius: .3rem;
      background: var(--color-white);
      box-shadow: 0rem .2rem 1rem var(--color-silver);
      .selected {
        border: 1px solid var(--color-silver);
        border-radius: .3rem;
        .triangle {
          max-width: 1rem;
          margin: 0 1rem;
        }
      }
      .option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: .3rem;
        div {
          display: flex;
          padding: .5rem 1rem;
          img {
            max-width: 2rem;
          }
        };
      }
    }
  }
</style>