<template>
   <div class="container footer">
    <div class="footer-p">
      <p class="footer-text">Контакты</p>
      <p class="footer-text">Политика конфиденциальности</p>
      <p class="footer-text">Карта</p>
      <p class="footer-text">Отзывы</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
