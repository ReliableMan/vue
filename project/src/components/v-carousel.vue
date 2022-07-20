<template>

    <div class="wrapper">
      <div class="v-carousel" :style="{ 'margin-left': '-' + (100 * currentInd) + '%' }">

        <v-carousel-item
        v-for="item in carousel_data"
        :key="item.id"
        :data ="item"
        />

      </div>
   
    </div>

</template>

<script>
import vCarouselItem from '@/components/v-carousel-item'
export default {

  components: {
    vCarouselItem
  },
  data () {
    return {
      currentInd: 0
    }
  },
  methods: {
    prevSlide() {
      if (this.currentInd > 0)
      this.currentInd--
    },
    nextSlide() {
      if (this.currentInd >= this.carousel_data.length - 1) {
        this.currentInd = 0;
      } else {
        this.currentInd++
      }
    },
  },
  mounted() {
    if (this.interval > 0) {
      let bc = this;
      setInterval(function() {
        bc.nextSlide()
      }, bc.interval)
     }
   }, 
  props: {
  carousel_data: {
    type: Array,
    default: () => []
  },
  interval: {
    type: Number,
    default: 0
  }
},
}
</script>

<style scoped>

  .wrapper{
    max-width: 500px;
    overflow: hidden;
    margin: 0 auto;
  }
  
  .v-carousel{
    display: flex;
    transition: all ease 0.7s;
  }

  .btns_carousel{
    padding-bottom: 9px;
    display: flex;
    justify-content: center
  }

  .leftbtn{
    margin-left: 15px;
  }
  
</style>
