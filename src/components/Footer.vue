<template>
  <footer class="footer">
    <div class="footer-con">
      <el-row>
        <el-col :span="16">
          <div class="left-con">
            <img src="../assets/imgs/logo_white.png">
            <div class="f-list">
              <div class="">联系人：吴女士</div>
              <div class="">联系方式：{{foo.tel}}</div>
              <div class="">Email：{{foo.email}}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="right-con">
          <img :src="foo.qr_code" alt="weixin" class="wx-img">
          <div class="wx-text">扫码添加微信</div>
        </el-col>
    </el-row>
    <div class="copy-con">{{foo.copy}}<a href="#" class="icp"> {{foo.icp}}</a></div>
    <div class="addrr-con">地址：{{foo.address}}</div>
    </div>
  </footer>
</template>
<script>
import Host from '@/data/index'
export default {
  data() {
    return {
      foo: null
    }
  },
  methods: {
    getFooInfo() {
      this.$http
        .get(`${Host.indexDate.localhost}fooinfo`)
        .then(res => {
          console.log(res)
          if (res.data.code === 1) {
            this.$message.error(res.data.msg)
          } else {
            this.foo = res.data.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getFooInfo()
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 20px 0;
  background: #293243;
  font-size: 15px;

  .footer-con {
    max-width: 1200px;
    margin: 0 auto;
    color: #fff;

    .wx-img {
      max-width: 150px;
      margin-top: 10px;
    }
    .wx-text {
      padding: 6px;
    }

    .right-con {
      text-align: center;
    }
    .icp {
      color: #fff;
    }

    .f-list {
      margin-left: 15px;

      div {
        margin: 10px 0;
        letter-spacing: 1px;
      }
    }

    .left-con {
      margin-left: 50px;
    }

    .copy-con,
    .addrr-con {
      text-align: center;
      margin: 15px 0;
      padding: 0 15px;
    }
  }
}
</style>
