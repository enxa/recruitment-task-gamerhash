<script>
  import Modal from '$components/Modal.svelte'
  import AuthForm from '$components/AuthForm.svelte'
  import Navbar from '$components/Navbar.svelte'
  import Header from '$components/Header.svelte'
</script>

<Modal modalTitle="Log In">
  <AuthForm />
</Modal>


<template>
  <Header>
    <Navbar />
  </Header>
</template>