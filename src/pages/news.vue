<template>
  <div class="main">
    <Head></Head>
    <TopImg :topInfo="title"></TopImg>
    <NavChild :childNav="nthData"></NavChild>
    <div class="new-mode" v-for="item in res" :key="item.id">
      <NewsList :newData="item"></NewsList>
    </div>
    <Pages :total="total" :sizes="size" v-on:childByValue="pagesVal"></Pages>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '@/components/Head'
import Footer from '@/components/Footer'
import NewsList from '@/components/NewsList'
import NavChild from '@/components/NavChild'
import Pages from '@/components/PageSize'
import TopImg from '@/components/TopImg'
import Host from '@/data/index'
export default {
  data() {
    return {
      res: [],
      total: 0,
      size: 8,
      nthData: [
        { path: '/index', text: '首页' },
        { path: '/news', text: '资讯列表' }
      ],
      title: {
        text: '资讯中心',
        code: 'NEWS CENTER'
      }
    }
  },
  components: {
    Head,
    NewsList,
    NavChild,
    Footer,
    Pages,
    TopImg
  },
  methods: {
    getNews(page) {
      this.$http
        .post(
          `${Host.indexDate.localhost}newlist?page=${page}&size=${this.size}`
        )
        .then(res => {
          this.res = res.data.data.list
          this.total = res.data.data.total
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    pagesVal(val) {
      console.log(val)
      this.size = val.size
      this.getNews(val.page)
    }
  },
  mounted() {
    this.getNews(1)
  }
}
</script>
<style lang="scss" scoped>
</style>
