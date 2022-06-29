<script lang="ts">
  import { slide } from 'svelte/transition'
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
    <div class=select use:clickOutside on:click-outside={() => $cryptoSelectIsOpen = false} 
         style="box-shadow: {$cryptoSelectIsOpen ? '0rem .2rem 1rem var(--color-silver)' : ''}">
      <div class="selected" on:click={() => clickSelect()}>
        <div class="option">
          <div>
            <div class="icon"><img src={selected.icon} alt="{selected.name} icon"></div>
            <div class="name"><h6>{selected.name}</h6></div>
          </div>
          <div>
            <div class="valueBTC">{selected.valueBTC}&nbsp;BTC</div>
            <div class="valueUSD">{selected.valueUSD}&nbsp;USD</div>
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
          <div class="option" on:click={() => clickOption(currency)} transition:slide>
            <div>
              <div class="icon"><img src={currency.icon} alt="{currency.name} icon"></div>
              <div class="name"><h6>{currency.name}</h6></div>
            </div>
            <div>
              <div class="valueBTC">{currency.valueBTC}&nbsp;BTC</div>
              <div class="valueUSD">{currency.valueUSD}&nbsp;USD</div>
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
      transition: .4s all ease-in-out;
      .selected {
        border: 1px solid var(--color-silver);
        border-radius: .3rem;
        transition: .4s border ease-in-out;
        &:hover {
          border: 1px solid var(--color-shark);
        }
        .triangle {
          max-width: 1rem;
          margin: 0 1rem;
        }
      }
      .option {
        font: var(--font-small-medium);
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: .3rem;
        color: var(--color-shark);
        transition: .4s background ease-in-out;
        &:hover {
          background: var(--color-silver);
        }
        div {
          display: flex;
          padding: .5rem 1rem;
          .name, .valueBTC {
            font: var(--font-small-semibold);
          }
          img {
            width: 2rem;
          }
        };
      }
    }
  }
</style>