<script lang="ts">
  let email: string = ''
  let password: string = ''
  let error: string = ''

  let handleSubmit = (): void => {
    if (email == '') error = "Please write your email or login"
    if (password == '') error = "Please write your password"
    if (email == '' && password == '') error ='Please write your credencials'
  } 
</script>

<template>
  <form class="auth-form" on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={email} placeholder="Your email or login">
    <input type="password" bind:value={password} placeholder="Confirm password">
    <button>Log in</button>
    <div class="error">{error}</div>
    <div>Don't have an account? <a href="www.gamerhash.com">Register</a></div>
    <div>Forgot your password? <a href="www.gamerhash.com">Click here</a> to reset</div>
  </form>
</template>

<style lang="scss">
  .auth-form {
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 640px) {
      min-width: 32.4rem;
    }
    input {
      font: var(--font-regular-medium);
      border: 1px solid var(--color-silver);
      padding: 1rem 1.7rem;
      margin: .5rem 0;
    }
    button {
      font: var(--font-regular-medium);
      color: var(--color-alabaster);
      background: var(--color-shamrock);
      box-shadow: -.5rem -.5rem 1rem var(--color-hintofgreen);
      padding: 1.25rem;
      margin: 1.5rem 0;
      display: grid;
      place-items: center;
      cursor: pointer;
    }
    .error {
      color: var(--color-crimson);
    }
    div {
      margin: 1rem 0;
      font-size: 1.6rem;
      text-align: center;
      a {
        color: var(--color-shark);
        font: var(--font-regular-semibold);
        font-size: 1.6rem;
      }
    }
  }
</style>