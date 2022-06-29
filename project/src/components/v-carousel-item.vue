<template>
  <div>
    <img :src="data.img" alt="imagesOnAboutPage">
    <p></p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
  img{
    width: 500px;
    height: 350px;
    border: 4px solid #2272b3a8;
  }
</style>
