<template>
  <div class="main">
    <Head></Head>
    <TopImg :topInfo="title"></TopImg>
    <NavChild :childNav="nthData"></NavChild>
    <div class="mode-4 mode">
      <div class="mode-item">
        <h4 class="title-text"><span class="text-green">经典案例</span>赏析</h4>
        <ul class="menu-ul">
          <li class="menu-li-item" data-num="1" v-bind:class="[ 1 == isActive ?'active':'' ]" @click="headNav($event)">企业类官网</li>
          <li class="menu-li-item" data-num="2" v-bind:class="[ 2 == isActive ?'active':'' ]" @click="headNav($event)">分销类商城</li>
          <li class="menu-li-item" data-num="3" v-bind:class="[ 3 == isActive ?'active':'' ]" @click="headNav($event)">综合类平台</li>
        </ul>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in res" :key="item.id">
            <Case :caseData="item"></Case>
          </el-col>
          <el-col :span="24" v-if="!res.length">
            <div class="no-data">没有数据...</div>
          </el-col>
        </el-row>
        <Pages :total="total" :sizes="size" v-on:childByValue="pagesVal"></Pages>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '@/components/Head'
import Footer from '@/components/Footer'
import NavChild from '@/components/NavChild'
import Case from '@/components/Case'
import Pages from '@/components/PageSize'
import TopImg from '@/components/TopImg'
import Host from '@/data/index'
export default {
  data() {
    return {
      res: [],
      size: 8,
      total: 0,
      isActive: 1,
      nthData: [
        { path: '/index', text: '首页' },
        { path: '/case', text: '案例列表' }
      ],
      title: {
        text: '精品案例',
        code: 'EXCELLENT CASE'
      }
    }
  },
  components: {
    Head,
    Footer,
    Case,
    NavChild,
    Pages,
    TopImg
  },
  methods: {
    headNav(e) {
      this.isActive = e.target.getAttribute('data-num')
      console.log(e.target.getAttribute('data-num'))
      this.getCases(1)
    },
    getCases(page) {
      this.$http
        .post(
          `${Host.indexDate.localhost}caselist?page=${page}&type=${
            this.isActive
          }&size=${this.size}`
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
      this.getCases(val.page, this.type)
    }
  },
  mounted() {
    this.getCases(1)
  }
}
</script>
<style lang="scss" scoped>
</style>
