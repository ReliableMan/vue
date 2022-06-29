<template>
  <div>
    <h3>Page about </h3>
    <v-carousel
    :carousel_data="sliderItems"
    :interval="2000"
    />
  </div>
</template>

<script>
import vCarousel from '@/components/v-carousel';

export default {
  components: { vCarousel },

  componets: {
    vCarousel
  },

 data () {
  return {
    sliderItems: [
      {id: 1, name: 'img1', img: 'https://avatars.mds.yandex.net/get-altay/1371846/2a0000016544450f58d845993d70c89bc963/XXL'},
      {id: 2, name: 'img2', img: 'https://s3.eu-central-1.amazonaws.com/images.hipdir/881677/72a72ff12b41849c58773e8d22b6e44ecaba144a04f76ebb5364d9c498571ce3.jpeg'},
      {id: 3, name: 'img3', img: 'https://avatars.mds.yandex.net/get-altay/1886119/2a0000016ad3d01ea11123769053ed27a8a5/XXL'},
      {id: 4, name: 'img4', img: 'https://avatars.mds.yandex.net/get-altay/4537001/2a0000017a1e618d1887fed58ea15f6ba0c3/XXL'},
      {id: 5, name: 'img5', img: 'https://a.d-cd.net/ea82408s-960.jpg'},
      {id: 6, name: 'img6', img: 'https://phonoteka.org/uploads/posts/2021-05/1622174953_28-phonoteka_org-p-avtoservis-art-krasivo-29.jpg'}

    ]
  }
 }
}
</script>

<style>

</style>
