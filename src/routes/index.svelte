<script>
  import Modal from '$components/Modal.svelte'
  import AuthForm from '$components/AuthForm.svelte'
  import Navbar from '$components/Navbar.svelte'
</script>

<Modal modalTitle="Log In">
  <AuthForm />
</Modal>


<template>
  <header class="rim">
    <Navbar />
  </header>
</template>