<template>
  <div class="main">
    <Head></Head>
    <TopImg :topInfo="title"></TopImg>
    <div class="mode">
    <NavChild :childNav="nthData"></NavChild>
      <div class="xy-container">
      <el-row :gutter="20">
      <el-col :span="6" v-for="item in serverData" :key="item.id">
          <ServerList :serverData="item"></ServerList>
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
import ServerList from '@/components/ServerList'
import NavChild from '@/components/NavChild'
import TopImg from '@/components/TopImg'
import Host from '@/data/index'
export default {
  data() {
    return {
      serverData: [],
      nthData: [
        { path: '/index', text: '首页' },
        { path: '/server', text: '产品服务' }
      ],
      title: {
        text: '产品服务',
        code: 'PRODUCT SERVICE'
      }
    }
  },
  components: {
    Head,
    Footer,
    ServerList,
    NavChild,
    TopImg
  },
  methods: {
    getServerInfo() {
      this.$http
        .post(`${Host.indexDate.localhost}serverinfo`)
        .then(res => {
          let tags = res.data.data.map(v => {
            v.tag = v.tag.split('|')
            return v
          })
          this.serverData = tags
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getServerInfo()
  }
}
</script>
<style lang="scss" scoped>
.mode {
  background: #f8f8f8;
}
</style>
