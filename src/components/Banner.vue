<template>
  <div class="banner-mode">
    <el-carousel :height="height" :interval="interval" class="banner-con" :autoplay="autoplay">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item" alt="banner" ref="imgHeight" class="banner-img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      interval: 5000,
      autoplay: true,
      height: '600px',
      imgs: [
        require('../assets/imgs/banner_1.jpg'),
        require('../assets/imgs/banner_1.jpg'),
        require('../assets/imgs/banner_1.jpg')
      ]
    }
  },
  methods: {
    temp() {
      let self = this
      window.addEventListener(
        'resize',
        () => {
          let bannerHeight = `${self.$refs.imgHeight[0].height}px`
          console.log(bannerHeight)
          self.height = bannerHeight
        },
        false
      )
    }
  },
  mounted() {
    this.temp()
  }
}
</script>
<style lang="scss" scoped>
.banner-mode {
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .banner-img {
    display: inline-block;
    max-width: 100%;
    max-height: 600px;
  }
}
</style>
