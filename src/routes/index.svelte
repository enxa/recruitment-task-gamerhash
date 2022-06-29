<script>
  import { smoothSite } from '$animations/smoothSite.js'

  import Modal from '$components/Modal.svelte'
  import AuthForm from '$components/AuthForm.svelte'
  import Navbar from '$components/Navbar.svelte'
  import Header from '$components/Header.svelte'
  import Main from '$components/Main.svelte'
  import Wallet from '$components/Wallet.svelte'
  import CryptoSelect from '$components/CryptoSelect.svelte'
  import ProfitCalculator from '$components/ProfitCalculator.svelte'
</script>

<template>
  <Navbar />
  <main use:smoothSite>
    <Header/>

    <Main>
      <section slot="wallet">
        <Wallet />
      </section>
      <section slot="crypto">
        <CryptoSelect />
      </section>
    </Main>

    <ProfitCalculator />
  </main>

  <Modal modalTitle="Log In">
    <AuthForm />
  </Modal>  
</template>