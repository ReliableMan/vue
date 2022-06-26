<template>
  <div class="app">
    <navbar-element/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarElement from '@/components/NavbarElement';
export default {
  components: {
    NavbarElement
  }
}
</script>

<style>




</style>
