<script>
  import Modal from '$components/Modal.svelte'
  import AuthForm from '$components/AuthForm.svelte'
  import Navbar from '$components/Navbar.svelte'
  import Header from '$components/Header.svelte'
  import Main from '$components/Main.svelte'
</script>

<template>
  <Header>
    <Navbar />
  </Header>

  <Main />

  <Modal modalTitle="Log In">
    <AuthForm />
  </Modal>  
</template>