<script lang="ts">
  import { slide } from 'svelte/transition'

  let emailOrLogin: string = ''
  let password: string = ''
  let error: string = ''
  let url: string = 'http://dom.elo/api/auth'

  let handleSubmit = (): void => {
    if (emailOrLogin == '' && password == '') {
      error ='Please provide your credencials'
      return
    } else if (emailOrLogin == '') {
      error = "Please provide your email or login"
      return
    } else if (password == '') {
      error = "Please provide your password"
    } else if (emailOrLogin.length < 6) {
      error = "Your email or login cannot be less than 6 characters"
      return
    } else if (password.length < 6) {
      error = "Your password cannot be less than 6 characters"
      return
    }

    fetchData(url)
  }

  let fetchData = async (url: string): Promise<any> => {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({emailOrLogin, password})
    })
    let result = response.json()
    console.log(result)
  }
</script>

<template>
  <form class="auth-form" on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={emailOrLogin} placeholder="Your email or login">
    <input type="password" bind:value={password} placeholder="Confirm password">
    <button>Log in</button>
    {#if error}
      <div class="error" transition:slide>{error}</div>
    {/if}
    <div>Don't have an account? <a rel="external" href="http://www.gamerhash.com">Register</a></div>
    <div>Forgot your password? <a rel="external" href="http://www.gamerhash.com">Click here</a> to reset</div>
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
      border-radius: .3rem;
      transition: .4s border ease-in-out;
      &:hover {
        border: 1px solid var(--color-woodsmoke);
      }
    }
    button {
      font: var(--font-regular-medium);
      color: var(--color-alabaster);
      background: var(--color-shamrock);
      box-shadow: -.5rem -.5rem 1rem var(--color-hintofgreen);
      border-radius: .3rem;
      padding: 1.25rem;
      margin: 1.5rem 0;
      display: grid;
      place-items: center;
      transition: .4s background ease-in-out;
      &:hover {
        background: var(--color-mountainmeadow)
      }
    }
    .error {
      color: var(--color-crimson);
    }
    div {
      margin: 1rem 0;
      font-size: 1.6rem;
      text-align: center;
      a {
        font: var(--font-regular-semibold);
        color: var(--color-shark);
        font-size: 1.6rem;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: var(--color-shark);
          transition: .4s width ease-in-out;
        }
        &:hover::after {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: var(--color-shark);
        }
      }
    }
  }
</style>