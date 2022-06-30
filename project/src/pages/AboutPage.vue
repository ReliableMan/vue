<template>
  <div class="flex">
    <div class="container">
      <h4 class="text_ab_p">Информация о нас</h4>
      <v-carousel
      :carousel_data="sliderItems"
      :interval="2000"
      />
      <p class="text_ab_p_elem_p">На нашем счету около 2000 успешно выполненных ремонтов. 
        Мы используем технологически сложное оборудование, позволяющее заранее определять какой узел автомобиля наиболее уязвим. 
        Это помогает заранее предотвратить поломку автомобиля.<br/> Из нашей практики можем сделать вывод: <strong>своевременное плановое ТО</strong> 
        помогает качественно следить за автомобилем, избегать лишних эмоциональных переживаний и финансовых трат. 
        <br/> В нашем распоряжении штат квалифицированных специалистов, обладающих богатым опытом. 
      </p>
      <hr/>
      <p class="text_ab_p_elem_p">
        <strong>Как происходит ремонт Вашего автомобиля?</strong>
        <ul>
            <li>визуальный осмотр</li>
            <li>программная диагностика всех узлов на наличие дефектов</li>
            <li>составление списка неисправностей</li>
            <li>согласование с вами используемых ремонтных материалов</li>
            <li>ремонт и тестирование</li>
        </ul>
      </p>
      <hr/>
    <p class="text_ab_p_elem_p">
      Если у вас остались вопросы позвоните нам, наш телефон 8(990) 900-90-90.
    </p>
    </div>
   <footer-element></footer-element>
  </div>
</template>

<script>
import vCarousel from '@/components/v-carousel';
import FooterElement from '@/components/FooterElement';

export default {
  components: { vCarousel, FooterElement },

  componets: {
    vCarousel
  },

 data () {
  return {
    sliderItems: [
      {id: 1, name: 'автосервис1', img: 'https://avatars.mds.yandex.net/get-altay/1371846/2a0000016544450f58d845993d70c89bc963/XXL', alt: 'автосервис1'},
      {id: 2, name: 'автосервис2', img: 'https://s3.eu-central-1.amazonaws.com/images.hipdir/881677/72a72ff12b41849c58773e8d22b6e44ecaba144a04f76ebb5364d9c498571ce3.jpeg', alt: 'автосервис2'},
      {id: 3, name: 'автосервис3', img: 'https://avatars.mds.yandex.net/get-altay/1886119/2a0000016ad3d01ea11123769053ed27a8a5/XXL', alt: 'автосервис3'},
      {id: 4, name: 'автосервис4', img: 'https://avatars.mds.yandex.net/get-altay/4537001/2a0000017a1e618d1887fed58ea15f6ba0c3/XXL', alt: 'автосервис4'},
      {id: 5, name: 'автосервис5', img: 'https://a.d-cd.net/ea82408s-960.jpg', alt: 'автосервис5'},
      {id: 6, name: 'автосервис6', img: 'https://phonoteka.org/uploads/posts/2021-05/1622174953_28-phonoteka_org-p-avtoservis-art-krasivo-29.jpg', alt: 'автосервис6'}

    ]
  }
 }
}
</script>

<style scoped>

  .text_ab_p{
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
  }
  .text_ab_p_elem_p{
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
