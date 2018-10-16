<template>
  <div class="main">
    <Head></Head>
    <TopImg :topInfo="title"></TopImg>
    <NavChild :childNav="nthData"></NavChild>
    <div class="mode">
      <div class="about-us xy-container">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="mode-item">
              <h4 class="title-text"><span class="text-green">深圳新友益</span><br/>互联信息科技有限公司</h4>
              <div class="text-info" v-html="usInfo">
                {{usInfo}}
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <img src="../assets/imgs/g_1.png" alt="公司" class="img">
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="mode mode1">
      <div class="about-us xy-container">
        <el-row :gutter="20">
          <el-col :span="12">
            <img src="../assets/imgs/b_2.png" alt="公司" class="img">
          </el-col>
          <el-col :span="12">
            <div class="mode-item">
              <h4 class="title-text">除了套餐，我们还提供<br/><span class="text-green">高级定制开发</span></h4>
              <div class="text-info m-b">
                响站基于领先的技术架构和开发语言完成，我们同样可以使用以下技术为客户做定制开发，我们擅长做复杂架构的大型平台，在处理大流量、高并发时有丰富的经验。
              </div>
              <img src="../assets/imgs/langaes.png" alt="公司" class="img">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="mode">
      <div class="about-us xy-container">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="mode-item">
              <h4 class="title-text"><span class="text-green">响应式网站</span><br/>已成为建站首选</h4>
              <div class="text-info">
                响应式网站页面可随屏幕大小自动适应布局，让使用不同设备访问的用户都能获得最佳的浏览体验，做一个网站等于同时有了PC网站、手机网站、平板网站，微信网站，数据完全同步，仅需一个后台管理，不仅方便维护，更有利于搜索引擎收录
              </div>
              <div class="text-info">
                目前如苹果、微软、google等国际著名企业官网已全部改版为响应式网站。我们为您制作的网站，完全可以媲美知名企业官网。
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <img src="../assets/imgs/b_1.png" alt="公司" class="img">
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '@/components/Head'
import Footer from '@/components/Footer'
import NavChild from '@/components/NavChild'
import TopImg from '@/components/TopImg'
import Host from '@/data/index'
export default {
  data() {
    return {
      nthData: [
        { path: '/index', text: '首页' },
        { path: '/about', text: '公司介绍' }
      ],
      title: {
        text: '公司简介',
        code: 'COMPANY INTRODUCTION'
      },
      usInfo: null
    }
  },
  components: {
    Head,
    Footer,
    NavChild,
    TopImg
  },
  methods: {
    getUsInfo() {
      this.$http
        .get(`${Host.indexDate.localhost}companyinfo`)
        .then(res => {
          if (res.data.code === 0) {
            this.usInfo = res.data.data[0].content
          } else {
            this.$message.error(res.data.msg)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getUsInfo()
  }
}
</script>
<style lang="scss" scoped>
.mode1 {
  background: #f8f8f8;
  margin: 20px 0;
  padding: 50px 0;
}
.about-us {
  .mode-item {
    padding: 0 15px;
  }

  .title-text {
    text-align: left;
  }

  .text-info {
    text-align: left;
    line-height: 30px;
    text-indent: 30px;
  }

  .m-b {
    margin-bottom: 10px;
  }

  .img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
</style>
