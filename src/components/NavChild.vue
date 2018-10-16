<template>
  <div class="nav-child">
      <i class="el-icon-location"></i>
      <router-link :to="childNav[0].path">{{childNav[0].text}}</router-link>
      <i class="el-icon-arrow-right"></i>
      <router-link :to="childNav[1].path">{{childNav[1].text}}</router-link>
      <i class="el-icon-arrow-right" v-if="childNav[2]"></i>
      <span v-if="childNav[2]">{{childNav[2].text}}</span>
    </div>
</template>
<script>
export default {
  props: {
    childNav: {
      type: [Object, Array],
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-child {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 0;
  border-bottom: 1px #dedede solid;
}
</style>
