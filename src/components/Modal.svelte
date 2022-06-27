<script lang="ts">
  export let isOpen: boolean = true
</script>

<template>
  {#if isOpen}
    <section class="modal">
      <div>
        <slot />
      </div>
    </section>
  {/if}
</template>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(23, 26, 31, .75);
    display: grid;
    place-items: center;
    div {
      background: var(--color-alabaster);
      padding: 2rem;
      border-radius: 1rem;
    }
  }
</style>