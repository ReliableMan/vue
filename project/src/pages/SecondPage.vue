<template>
<div class="second">

    <h4>В продаже на {{localeDate}}</h4>

    <div class="btns">
      <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Сортировка по
    </button>
    <ul class="dropdown-menu">
      <li @click="sortedVendor_code" class="dropdown-menu_li"> артикулу</li>
      <li @click="sortedHp" class="dropdown-menu_li"> мощности</li>
      <li @click="sortedTorque" class="dropdown-menu_li"> крутящему моменту</li>
    </ul>
  </div>
  <button type="button" class="btn btn-secondary">списком</button>
    </div>
    
    
      <div class="second-main" :class="{ list: isActive }">
        <div class="card border-info mb-5"  v-for="item in items" :key="item.id">
          
              <img :src='item.picture' class="card-img-top picture" alt="фото">

                  <div class="col-md-8 _card">
                    <div class="card-body">
                      <h5 class="card-header">Модель {{item.title}}</h5>
                      <p class="card-text"> <strong>Описание:</strong> {{item.body}}</p>
                      <hr/>
                      <p class="card-text"><strong>Артикул:</strong> {{item.vendor_code}}</p>
                      <hr/>
                      <p class="card-text"><strong>Производитель:</strong> {{item.brand}}</p>
                      <hr/>
                      <p class="card-text"> <strong>{{item.hp}} </strong> л/с</p>
                      <hr/>
                      <p class="card-text"><strong>крутящий момент: </strong>{{item.torque}}</p>
                      <hr/>
                      <p class="card-text"><strong>Объем двигателя: </strong>{{item.engine_volume}} л</p>
                    </div>
                  </div>
         
        </div>
        
      </div>
<footer-element></footer-element>
</div>
  
</template>

<script>
import FooterElement from '@/components/FooterElement';
export default {
  components: {
    FooterElement
  },

   data() {
      return {
        items : [
          // body - описание; vendor_code - артикул; brand - модель авто; hp - л/с; torque - крутящий момент; engine_volume - объем двигателя
      {id: 1, title: '1UZ-FE', body: 'Восьмицилиндровый двигатель с алюминиевым блоком цилиндров, системой VVT-i, поршнями и ГБЦ. ГБЦ была выполнена по двухвальной схеме с четырьмя клапанами на цилиндр. Коленвал имел аж пять коренных подшипников, привод ГРМ и вспомогательного оборудования осуществлялся от зубчатого ремня.', vendor_code: 124320999, brand: 'TOYOTA', hp: 290, torque: 407, engine_volume: 4, picture:'https://a.d-cd.net/5sAAAgBWMuA-1920.jpg'},
      {id: 2, title: '4A-GE', body: '4A-GE очень надежный мотор. Он без проблем выдерживает форсировку до 200 л.с. и при этом служит 250 и более тысяч километров. Это без преувеличения одно из лучших творений компании Тойота.', vendor_code: 124320997, brand: 'TOYOTA', hp: 165, torque: 210, engine_volume: 2, picture:'https://www.motorsale.ru/images/fotos/s_28851.jpg'},
      {id: 3, title: '1GZ-FE', body: '5-литровый двигатель с алюминиевым блоком цилиндров и двухвальной 48-клапанной алюминиевой ГБЦ с системой VVT-i. Для надежности каждый ряд цилиндров получил собственный электронный блок управления и может работать независимо.', vendor_code: 124320992, brand: 'TOYOTA', hp: 276, torque: 481, engine_volume: 5, picture: 'https://a.d-cd.net/7e2a334s-960.jpg'},
      {id: 4, title: '1JZ-GTE', body: 'Мотор имеет чугунный блок цилиндров, алюминиевую 24-клапанную ГБЦ с ременным приводом и два турбокомпрессора CT12A. Устанавливался в такие автомобили как Toyota Mark II, Soarer, Crown, Supra и другие.', vendor_code: 124320996, brand: 'TOYOTA', hp: 280, torque: 363, engine_volume: 2.5, picture: 'https://oksimetr.ru/wp-content/uploads/2/5/2/252098176103e87054d846b24d9f843a.jpeg'},
      {id: 5, title: '2JZ-GTE', body: 'Конструктивно схож с 1JZ-GTE. Однако имеет оригинальный 3-литровый блок цилиндров увеличенный на 14,5 мм высотой.', vendor_code: 124320995, brand: 'TOYOTA', hp: 280, torque: 432, engine_volume: 3, picture: 'https://a.d-cd.net/mWAAAgG_RuA-1920.jpg'},
      {id: 6, title: '3S-GTE', body: 'Имеет чугунный блок цилиндров и алюминиевую 16-клапанную ГБЦ и систему переменного впуска T-VIS с турбокомпрессором CT26.', vendor_code: 124320994, brand: 'TOYOTA', hp: 256, torque: 324, engine_volume: 2, picture: 'https://a.d-cd.net/147f208s-960.jpg'},
      {id: 7, title: 'RB26DETT', body: 'Чугунный шестицилиндровый блок цилиндров и алюминиевая головка блока с четырьмя клапанами на цилиндр. Шесть дроссельных заслонок и параллельно действующие турбонагнетатели (каждый обслуживает три цилиндра) с вейстгейтами, ограничивающими давление наддува 0,69 бара', vendor_code: 124321000, brand: 'NISSAN', hp: 280, torque: 392, engine_volume: 2.6, picture: 'https://i.ytimg.com/vi/kx3so1AAmfw/maxresdefault.jpg'},
      {id: 8, title: 'SR20DET', body: 'Алюминиевый блок цилиндров с чугунными сухими гильзами. Головка блока цилиндров алюминиевая с двумя распределительными валами и 4 клапанами на цилиндр. Привод газораспределительного механизма осуществляется через цепь. Оснащены электронным впрыском топлива и многоточечной системой впрыска.', vendor_code: 124321001, brand: 'NISSAN', hp: 230, torque: 284, engine_volume: 2, picture: 'https://jdmofsandiego.com/wp-content/uploads/2018/09/SR20-redtop-140256W-2-768x919.jpg'},
      {id: 9, title: 'F20C/F22C', body: 'F20C и F22C1 имеют два верхних кулачка с роликовыми толкателями, элемент жесткости главного подшипника лестничной рамы, систему VTEC для впускного и выпускного распредвала, армированные волокном металлические гильзы цилиндров.', vendor_code: 124321003, brand: 'NISSAN', hp: 250, torque: 218, engine_volume: 2, picture: 'https://www.automachi.com/wp-content/uploads/2019/09/used-honda-s2000-engine.jpg'},
      {id: 10, title: '13B-REW', body: 'Роторные двигатели Mazda имели репутацию относительно небольшого и мощного двигателя c низко-эффективным расходом топлива.', vendor_code: 124321004, brand: 'MAZDA', hp: 280, torque: 314, engine_volume: 1.3, picture: 'https://i.pinimg.com/originals/6f/30/d1/6f30d13147d701788c7448f17b3f3163.jpg'},
      {id: 12, title: '4G63T', body: 'Четырёхцилиндровый рядный бензиновый двигатель объёмом 1997 см3 с турбонаддувом и механизмом газораспределения DOHC.', vendor_code: 124321005, brand: 'MITSUBISHI', hp: 280, torque: 382, engine_volume: 2, picture: 'https://avatars.mds.yandex.net/get-zen_doc/1781308/pub_5d3a07488600e100ac940e43_5d3a08f3e854a900ad7c902c/scale_1200'},
      {id: 13, title: 'S65B40', body: 'Разрабатывался этот мотор на базе S85B50 путем удаления двух цилиндров от V10 и превращения его в V8, с рабочим объемом 4 литра. Блок цилиндров по конструкции такой же, как на S85, с межцилиндровым расстоянием 98 мм, шатуны и поршни такие же, как на М5 моторе.', vendor_code: 124321006, brand: 'BMW', hp: 420, torque: 400, engine_volume: 4, picture: 'https://mirgm.ru/wp-content/uploads/2017/08/1-35.jpg'},
      {id: 14, title: '911 Turbo', body: 'В 2009 году состоялся дебют 3,8-литрового оппозитного двигателя, у которого для подачи воздуха в цилиндры использовались два нагнетателя с изменяемой геометрией турбин', vendor_code: 124321007, brand: 'PORSHE', hp: 700, torque: 750, engine_volume: 3.8, picture: 'https://press.ru.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=1773097&show=1'},
      {id: 15, title: 'Viper V10 488', body: 'На Viper устанавливается обновленный 8,3-литровый двигатель V10, более мощный, чем когда-либо ранее. Были увеличены как диаметр цилиндра, так и ход поршня, в результате рабочий объем возрос на 3,5% и достиг впечатляющего значения 8,3 л. Новый двигатель развивает максимальную мощность 500 л.с. при частоте вращения 5600 мин-1; 90% его чудовищного максимального крутящего момента (712 Н•м) доступны в диапазоне от 1500 до 5500 оборотов в минуту. ', vendor_code: 124321008, brand: 'DODGE', hp: 460, torque: 678, engine_volume: 8, picture: 'http://images.gtcarlot.com/pictures/57428506.jpg'},
      {id: 16, title: 'GM LS7', body: 'LS7 оснащен кованым коленчатым валом, титановыми шатунами и уникальными алюминиевыми поршнями. Классическая конструкция толкателя с двумя клапанами на цилиндр по-прежнему делает LS7 лучшим мотором среди новых и старых моторов.', vendor_code: 124321009, brand: 'GENERAL MOTORS', hp: 505, torque: 637, engine_volume: 7, picture: 'http://images.gtcarlot.com/pictures/58046870.jpg'},
     ],
      date: 1580558031264,
      isActive: false,
    }
   },
   methods: {
    sortedVendor_code() {
      this.items.sort((a, b) => a.vendor_code - b.vendor_code)
    },
    sortedHp() {
      this.items.sort((a, b) => a.hp - b.hp)
    },
    sortedTorque() {
      this.items.sort((a, b) => a.torque - b.torque)
    } 
   },
    computed: {
        localeDate() {
            return (new Date(this.date)).toLocaleDateString() 
        },
    },
    created() {
        this.intervalId = setInterval(() => this.date = Date.now(), 1000); // Обновляем значения не чаще раза в секунду. А то и реже.
    },
    beforeUnmount() {
        if (this.intervalId) clearInterval(this.intervalId)
    },
}
   
</script>

<style scoped>

.second {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
} 

.second-main{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list{
  display: flex;
  flex-direction: column;
}

.btns{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 15px;
  cursor: pointer;
}

.picture {
  width: 497px;
  height: 400px
}

.dropdown-menu_li{
  margin-left: 25px
}

.dropdown-menu_li:hover {
  color:brown
}

._card{
  width: 490px
}

</style>
