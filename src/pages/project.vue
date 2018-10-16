<template>
  <div class="main">
    <Head></Head>
    <TopImg :topInfo="title"></TopImg>
    <NavChild :childNav="nthData"></NavChild>
    <div class="mode">
      <div class="mode-item">
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in res" :key="item.id">
              <PriceMode :typeInfo="item"></PriceMode>
            </el-col>
          </el-row>
      </div>
    </div>
    <div class="mode lc-mode">
      <div class="mode-item">
        <h4 class="title-text">建站流程</h4>
        <div class="text-style">我们通过专业的流程与丰富的经验实现了在品牌设计创新的承诺</div>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="lc-item">
              <i class="el-icon-service left-icon"></i>
              <div class="lc-info">
                <div class="lc-info-title">1、提交您的需求</div>
                <div class="lc-info-text">客户提出网站建设基本需求，包括：设计需求以及功能需求</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="lc-item">
              <i class="el-icon-date left-icon"></i>
              <div class="lc-info">
                <div class="lc-info-title">2、项目时间预估与报价</div>
                <div class="lc-info-text">我们在一个工作日内对客户提出的需求做出时间预估与项目报价</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="lc-item">
              <i class="el-icon-document left-icon"></i>
              <div class="lc-info">
                <div class="lc-info-title">3、达成合作意向</div>
                <div class="lc-info-text">在客户确认价格的基础上，我们达成合作意向，客户支付50%订金</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="lc-item">
              <i class="el-icon-picture left-icon"></i>
              <div class="lc-info">
                <div class="lc-info-title">4、首页设计</div>
                <div class="lc-info-text">根据客户设计需求，和客户充分沟通，设计出网站首页</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="lc-item">
              <i class="el-icon-circle-check-outline left-icon"></i>
              <div class="lc-info">
                <div class="lc-info-title">5、首页确认</div>
                <div class="lc-info-text">客户确认首页效果图无误后，进行下一步制作</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="lc-item">
              <i class="el-icon-edit-outline left-icon"></i>
              <div class="lc-info">
                <div class="lc-info-title">6、内页设计及确认</div>
                <div class="lc-info-text">依次完成内页页面设计提交客户进行审核，并最终形成确认</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="lc-item">
              <i class="el-icon-rank left-icon"></i>
              <div class="lc-info">
                <div class="lc-info-title">7、程序开发及页面测试</div>
                <div class="lc-info-text">根据页面和需求进行程序的 开发及前后台页面的整合测试</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="lc-item">
              <i class="el-icon-sort left-icon"></i>
              <div class="lc-info">
                <div class="lc-info-title">8、验收阶段</div>
                <div class="lc-info-text">网站完成后，客户在我们的测试网址上进行验收，确认支付剩余的50%余款</div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="lc-item">
              <i class="el-icon-circle-check left-icon"></i>
              <div class="lc-info">
                <div class="lc-info-title">9、项目完成</div>
                <div class="lc-info-text">网站的源文件提供给客户，至此，整个项目完成，并提供一年的免费售后服务</div>
              </div>
            </div>
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
import PriceMode from '@/components/PriceMode'
import NavChild from '@/components/NavChild'
import TopImg from '@/components/TopImg'
import Host from '@/data/index'
export default {
  data() {
    return {
      nthData: [
        { path: '/index', text: '首页' },
        { path: '/project', text: '产品套餐' }
      ],
      title: {
        text: '产品套餐',
        code: 'PROJECT SERVER'
      },
      size: 4,
      res: []
    }
  },
  components: {
    Head,
    Footer,
    PriceMode,
    NavChild,
    TopImg
  },
  methods: {
    getprojects(page) {
      this.$http
        .post(
          `${Host.indexDate.localhost}projects?page=${page}&size=${this.size}`
        )
        .then(res => {
          this.res = res.data.data.list
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getprojects(1)
  }
}
</script>
<style lang="scss" scoped>
.lc-mode {
  background: #f8f8f8;
}

.mode-item {
  padding: 0 15px;
}
.lc-item {
  display: flex;
  text-align: left;
  margin-bottom: 20px;

  .left-icon {
    display: block;
    min-width: 60px;
    height: 60px;
    border: 1px #ccc solid;
    border-radius: 50%;
    font-size: 2em;
    margin-right: 10px;
    text-align: center;
    line-height: 60px;
  }

  .lc-info-title {
    font-weight: 600;
    color: #05ad4a;
  }

  .lc-info-text {
    color: #909991;
    line-height: 22px;
    font-size: 12px;
  }
}
</style>
