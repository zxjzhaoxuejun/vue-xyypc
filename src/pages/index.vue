<template>
  <div class="main">
    <Head></Head>
    <Banner></Banner>
    <div class="mode-1 mode">
      <div class="mode-item">
        <h4 class="title-text">响应式网站建设服务领域品牌</h4>
        <div class="text-style">提供响应式网站、ＡＰＰ、H5页面、小程序、微信公众号等平台建设服务</div>
        <router-link :to="'/server'"  class="btn btn-green" >产品服务咨询</router-link>
      </div>
    </div>
    <div class="mode-2 mode">
      <div class="mode-item">
        <h4 class="title-text">价格<span class="text-green">标准化</span></h4>
        <div class="text-style">如果您能在市场上找到与我们同样技术、同样功能、同样价格的系统，我们承若，终身免费使用！</div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in res.pros" :key="item.id">
            <PriceMode :typeInfo="item"></PriceMode>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="mode-3 mode">
      <div class="mode-item">
        <h4 class="title-text">一站式<span class="text-green">全包服务</span></h4>
        <div class="text-style">专项小组，全程服务，快速上线</div>
        <el-row>
          <el-col :span="8" v-for="item in allServer.fData" :key="item.id" class="m-t">
            <div class="f-mode">
              <img :src="item.img" class="f-img" :alt="item.title">
              <div class="f-con">
                <div class="headline">{{item.title}}</div>
                <div class="info-text">{{item.info}}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="mode-4 mode">
      <div class="mode-item">
        <h4 class="title-text"><span class="text-green">经典案例</span>赏析</h4>
        <ul class="menu-ul">
          <li class="menu-li-item" data-num="1" v-bind:class="[ 1 == isActive ?'active':'' ]" @click="headNav($event)">企业类官网</li>
          <li class="menu-li-item" data-num="2" v-bind:class="[ 2 == isActive ?'active':'' ]" @click="headNav($event)">分销类商城</li>
          <li class="menu-li-item" data-num="3" v-bind:class="[ 3 == isActive ?'active':'' ]" @click="headNav($event)">综合类平台</li>
        </ul>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in cases" :key="item.id">
            <Case :caseData="item"></Case>
          </el-col>
          <el-col :span="24" v-if="!cases.length">
            <div class="no-data">没有数据...</div>
          </el-col>
        </el-row>
        <router-link :to="'/case'"  class="btn btn-green" >查看更多案例</router-link>
      </div>
    </div>
    <div class="mode-5 mode">
      <div class="mode-item">
        <h4 class="title-text">最新<span class="text-green">资讯</span></h4>
        <div class="text-style">公司新闻动态和行业资讯</div>
        <div class="new-list" v-for="item in res.news" :key="item.id">
          <NewsList :newData="item"></NewsList>
        </div>
        <router-link :to="'/news'"  class="btn btn-green" >查看更多资讯</router-link>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '@/components/Head'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import PriceMode from '@/components/PriceMode'
import Case from '@/components/Case'
import Host from '@/data/index'
import NewsList from '@/components/NewsList'
export default {
  data() {
    return {
      allServer: Host.indexDate,
      res: null,
      isActive: 1,
      caseSize: 4,
      cases: []
    }
  },
  components: {
    Head,
    Banner,
    PriceMode,
    Case,
    NewsList,
    Footer
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
          }&size=${this.caseSize}`
        )
        .then(res => {
          this.cases = res.data.data.list
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getIndex() {
      this.$http
        .get(`${Host.indexDate.localhost}index`)
        .then(result => {
          this.res = result.data
          console.log(result)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getCases(1)
    this.getIndex()
  }
}
</script>
<style lang="scss" scoped>
.mode-2,
.mode-4 {
  background: #f8f8f8;
}
.mode-3 {
  background: #fff;
}
</style>
