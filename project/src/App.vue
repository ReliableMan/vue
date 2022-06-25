<template>
  <div class="flex">

  <div class="header">
    <navbar-element/>
  </div>

  <div class="main">
    <div class="carousel">
      <carousel-element/>
      <carousel-element1/>
    </div>
    

    <text-element class="text-el"/>
    <nav-element class="nav-el"/>
  </div>

  <div class="container footer">
    <div class="footer-p">
      <p class="footer-text">Контакты</p>
      <p class="footer-text">Политика конфиденциальности</p>
      <p class="footer-text">Карта</p>
      <p class="footer-text">Отзывы</p>
    </div>
  </div>
</div>
</template>


<script>
import NavbarElement from '@/components/NavbarElement';
import CarouselElement from '@/components/CarouselElement';
import CarouselElement1 from '@/components/CarouselElement1';
import TextElement from '@/components/TextElement';
import NavElement from '@/components/NavElement';

export default {
  components: {
    NavbarElement, CarouselElement,
    CarouselElement1, TextElement,
    NavElement
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
  margin-left: 100px;
  margin-right: 100px;
}
.text-el{
  margin-top: 50px;
  max-width: 1000px
}
.nav-el{
   margin-top: 50px;
   margin-bottom: 50px;
}
.footer{
  margin-top: 20px;
  background-color: #2272b3a8;
  max-width: 1300px;
  height: 100px;
}
.footer-p{
  display: flex;
  justify-content: space-around;
  margin-top: 25px
}
.footer-text {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 25px;
  color: rgb(17, 16, 16)
}
p {
  background-image: linear-gradient(to right, #ffffff, #f9fdff 50%, #000 50%);
  background-size: 200% 100%;
  background-position: -100%;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}
p:before{
  content: '';
	background: #131414;
	display: block;
	position: absolute;
	bottom: -3px;
	left: 0;
	width: 0;
	height: 3px;
	transition: all 0.3s ease-in-out;
}
p:hover{
  background-position: 0;
  cursor: pointer

}
p:hover::before {
  width: 100%;
}

</style>
