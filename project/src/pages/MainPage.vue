<template>
  <div class="flex">

  <div class="main">
    <div class="carousel">
      <carousel-element/>
      <carousel-element1/>
    </div>
    

    <text-element class="text-el"/>
    <nav-element class="nav-el"/>
  </div>

  <footer-element></footer-element>
</div>
</template>


<script>

import CarouselElement from '@/components/CarouselElement';
import CarouselElement1 from '@/components/CarouselElement1';
import TextElement from '@/components/TextElement';
import NavElement from '@/components/NavElement';
import FooterElement from '@/components/FooterElement';

export default {
  components: {
    CarouselElement,
    CarouselElement1, TextElement,
    NavElement, FooterElement
  }
}
</script>


<style>

.main{
  padding-top: 50px;
  
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.carousel{
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin-left: 100px;
  margin-right: 100px; */
}
.text-el{
  margin-top: 50px;
  max-width: 1000px
}
.nav-el{
   margin-top: 50px;
   margin-bottom: 50px;
}


</style>
