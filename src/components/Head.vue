<template>
  <div class="nav-mode">
    <el-row>
      <el-col :span="6">
        <router-link to="/"><img src="../assets/imgs/logo.png" alt="logo"/></router-link>
      </el-col>
      <el-col :span="18">
        <el-menu :default-active="$route.path" :router="true" mode="horizontal" active-text-color="#10c55b" @select="handleSelect">
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/project">产品套餐</el-menu-item>
          <el-menu-item index="/server">产品服务</el-menu-item>
          <el-menu-item index="/about">公司介绍</el-menu-item>
          <el-menu-item index="/case">案例介绍</el-menu-item>
          <el-menu-item index="/news">资讯中心</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleSelect(key, path) {
      console.log(key, path)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-mode {
  max-width: 1200px;
  margin: 0 auto;

  .el-menu.el-menu--horizontal {
    border: none;
  }
}
</style>
