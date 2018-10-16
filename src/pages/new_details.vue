<template>
  <div class="main">
    <Head></Head>
    <TopImg :topInfo="title"></TopImg>
    <NavChild :childNav="nthData"></NavChild>
    <div class="details-con">
      <div class="detail-title">{{details.art_title}}</div>
      <div class="athu">
        <span>来源:{{details.art_sources}}</span>
        <span>发布时间:{{details.create_time}}</span>
        <span>浏览量:{{details.art_view}}</span>
      </div>
      <div class="detail-info" v-html="details.art_content">{{details.art_content}}</div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '@/components/Head'
import Footer from '@/components/Footer'
import NavChild from '@/components/NavChild'
import Host from '@/data/index'
import TopImg from '@/components/TopImg'
export default {
  data() {
    return {
      id: this.$route.params.id,
      nthData: [
        { path: '/index', text: '首页' },
        { path: '/news', text: '资讯中心' },
        { path: '', text: '资讯详情' }
      ],
      title: {
        text: '资讯详情',
        code: 'NEWS DETAILS'
      },
      details: ''
    }
  },
  components: {
    Head,
    Footer,
    NavChild,
    TopImg
  },
  methods: {
    getDetails() {
      let loadingInstance = this.myLoad({
        dom: '.details-con'
      })
      this.$http
        .post(`${Host.indexDate.localhost}newdetail?id=${this.id}`)
        .then(res => {
          this.$nextTick(() => {
            // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close()
          })
          this.details = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getDetails()
  }
}
</script>

<style lang="scss" scoped>
</style>
