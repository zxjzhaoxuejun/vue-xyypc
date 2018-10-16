<template>
  <div class="main">
    <Head></Head>
    <TopImg :topInfo="title"></TopImg>
    <div class="mode">
      <NavChild :childNav="nthData"></NavChild>
        <div class="xy-container">
        <el-row :gutter="20">
          <el-col :span="14">
              <div class="contact-info">
                <div class="c-title"><i class="el-icon-menu"></i>深圳市新友益互联信息科技有限公司</div>
                <ul class="c-list">
                  <li class="c-list-item">
                    <i class="el-icon-location-outline"></i>
                    <span class="name">公司地址</span>
                    <span class="c-info">深圳市福田区深南大道6007号安徽大厦创展中心18楼14-17室</span>
                  </li>
                  <li class="c-list-item">
                    <i class="el-icon-mobile-phone"></i>
                    <span class="name">服务热线</span>
                    <span class="c-info">18520820070</span>
                  </li>
                  <li class="c-list-item">
                    <i class="el-icon-service"></i>
                    <span class="name">销售热线</span>
                    <span class="c-info">18617032562</span>
                  </li>
                  <li class="c-list-item">
                    <i class="el-icon-message"></i>
                    <span class="name">电子邮件</span>
                    <span class="c-info">345624137@qq.com</span>
                  </li>
                </ul>
              </div>
          </el-col>
          <el-col :span="10">
            <img src="../assets/imgs/at.jpg" class="d-img">
          </el-col>
      </el-row>
      <div class="msg-mode">
        <div class="c-title"><i class="el-icon-edit-outline"></i>留言免费索取建站方案</div>
        <div class="m-info">提交留言后，您的专属顾问会立即联系您！</div>
        <div class="form-list">
          <el-form :model="meassage" :rules="rules" ref="meassage" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="meassage.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="tel">
              <el-input v-model="meassage.tel" placeholder="请输入电话"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="meassage.email"  placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="建站类型" prop="type">
              <el-select v-model="meassage.type" placeholder="请选择">
                <el-option label="企业型网站" value="1"></el-option>
                <el-option label="分销型网站" value="2"></el-option>
                <el-option label="综合型网站" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="费用预算" prop="money">
              <el-select v-model="meassage.money" placeholder="请选择">
                <el-option label="5000以内" value="5000以内"></el-option>
                <el-option label="3万到5万" value="3万到5万"></el-option>
                <el-option label="10万以上" value="10万以上"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="备注" prop="text">
              <el-input type="textarea" v-model="meassage.text"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('meassage')">提交表单</el-button>
              <el-button @click="resetForm('meassage')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        </div>
    </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '@/components/Head'
import Footer from '@/components/Footer'
import TopImg from '@/components/TopImg'
import NavChild from '@/components/NavChild'
import Host from '@/data/index'
export default {
  data() {
    return {
      nthData: [
        { path: '/index', text: '首页' },
        { path: '/contect', text: '联系我们' }
      ],
      title: {
        text: '联系我们',
        code: 'CONTACT US'
      },
      meassage: {
        type: '',
        money: '',
        name: '',
        tel: '',
        email: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确电话号码', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        type: [
          {
            required: true,
            message: '请选择建站类型',
            trigger: 'change'
          }
        ],
        money: [
          {
            required: true,
            message: '请选择费用预算',
            trigger: 'change'
          }
        ],
        text: [{ max: 200, message: '长度在 200个字符', trigger: 'blur' }]
      }
    }
  },
  components: {
    Head,
    Footer,
    TopImg,
    NavChild
  },
  methods: {
    submitForm(formName) {
      let self = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          let qs = require('qs')
          this.$http
            .post(
              `${Host.indexDate.localhost}messages`,
              qs.stringify(self.meassage, { indices: false })
            )
            .then(res => {
              console.log(res)
              if (res.data.code === 0) {
                self.successMsg(res.data.msg)
                self.resetForm(formName)
              } else {
                self.failMsg(res.data.msg)
              }
            })
            .catch(err => {
              console.log(err)
              self.failMsg(err)
            })
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    successMsg(msg) {
      this.$message({
        message: `恭喜你，${msg}`,
        type: 'success'
      })
    },
    failMsg(msg) {
      this.$message.error(msg)
    }
  }
}
</script>
<style lang="scss" scoped>
.mode {
  background: #f8f8f8;
  padding: 0 0px 50px 0px;

  .contact-info {
    padding: 20px 0;

    .c-list-item {
      padding: 15px 0;

      .name {
        margin: 0 6px;
      }

      .c-info {
        padding-left: 10px;
        border-left: 1px #dedede solid;
        color: #909991;
      }
    }
  }

  .msg-mode {
    margin-top: 15px;
  }

  .c-title {
    font-size: 1.3em;
    padding-bottom: 15px;
    border-bottom: 1px #dedede solid;

    i {
      margin-right: 10px;
      color: #ff6600;
    }
  }
  .d-img {
    margin-top: 15px;
    max-width: 100%;
    height: auto;
    display: block;
  }

  .m-info {
    text-align: center;
    margin: 20px 0;
  }

  .form-list {
    max-width: 750px;
    margin: 0 auto;

    .demo-input-suffix {
      display: flex;
      margin: 10px 0;
    }

    .el-input,
    .el-textarea {
      width: 60%;
    }
  }
}
</style>
