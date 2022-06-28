<script>
  import Modal from '$components/Modal.svelte'
  import AuthForm from '$components/AuthForm.svelte'
  import Navbar from '$components/Navbar.svelte'
  import Header from '$components/Header.svelte'
  import Main from '$components/Main.svelte'
  import Wallet from '$components/Wallet.svelte'
  import CryptoSelect from '$components/CryptoSelect.svelte'
</script>

<template>
  <Header>
    <Navbar />
  </Header>

  <Main>
    <section slot="wallet">
      <Wallet />
    </section>
    <section slot="crypto">
      <CryptoSelect />
    </section>
  </Main>

  <Modal modalTitle="Log In">
    <AuthForm />
  </Modal>  
</template>