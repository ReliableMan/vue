<template>
  <div class="flex">

  <div class="main">
    <div class="carousel container">
      <v-carousel
      :carousel_data="sliderItems"
      :interval="3000"
    />
      <v-carousel
      :carousel_data="sliderItems2"
      :interval="3000"
    />
    </div>
    

    <text-element class="text-el"/>
    <nav-element class="nav-el"/>
  </div>

  <footer-element></footer-element>
</div>
</template>


<script>



import TextElement from '@/components/TextElement';
import NavElement from '@/components/NavElement';
import FooterElement from '@/components/FooterElement';
import vCarousel from '@/components/v-carousel';

export default {
  components: {
    TextElement, NavElement,
    FooterElement, vCarousel
  },
  data () {
  return {
    sliderItems: [
      {id: 1, name: 'img1', img: 'https://globaldrive-shop.ru/wp-content/uploads/a/d/0/ad032ed9bae7a0e77973addba8dbe2e6.jpeg'},
      {id: 2, name: 'img2', img: 'https://static.tildacdn.com/tild6235-6630-4338-b539-393364383061/__3.jpg'},
      {id: 3, name: 'img3', img: 'https://service-vao.ru/images/articles/podgotovka-avto-k-vesne/01-podgotovka-avto-k-vesne.jpg'},
      {id: 4, name: 'img4', img: 'http://vashavto33.ru/upload/iblock/332/332d0c0892ee8ece74b34fdf3ea4fcb0.jpg'},
      {id: 5, name: 'img5', img: 'https://ulj.autoservice-catalog.ru/upload/usl/f_6145f87a55d58.jpg'},
    ],
    sliderItems2: [
      {id: 1, name: 'img1', img: 'https://plazavolgograd.ru/wp-content/uploads/2017/02/DSC_1927-40.jpg'},
      {id: 2, name: 'img2', img: 'https://sovcominvest.ru/uploads/photo/13145/image/0eb1144d7a84b80837e43c9ed5bcd70d.jpg'},
      {id: 3, name: 'img3', img: 'https://5koleso.ru/wp-content/uploads/2021/02/diagnosing-great-egr-error-code-2048x1365.jpg'},
      {id: 4, name: 'img4', img: 'https://lab-clean.ru/wp-content/uploads/2019/02/shutterstock_1056454853-min.jpg'},
      {id: 5, name: 'img5', img: 'https://static.tildacdn.com/tild6233-3230-4766-b132-636339376533/8dbae9f2506225a27054.jpeg'},
    ]
  }
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
