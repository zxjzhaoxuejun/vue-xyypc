<template>
  <div class="new-list" @click="jump(newData.id)">
    <el-row :gutter="15">
      <el-col :span="6"> <img :src="newData.art_thumb?newData.art_thumb:defaultImg" alt="news"></el-col>
      <el-col :span="18">
        <div class="new-con">
        <div class="new-title">{{newData.art_title}}</div>
        <div class="new-time">时间:{{newData.create_time}}</div>
        <div class="new-text">{{newData.abstract}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    newData: {
      type: [Object],
      default: null
    }
  },
  data() {
    return {
      defaultImg: require('../assets/imgs/default.jpg')
    }
  },
  methods: {
    jump(id) {
      this.$router.push('/new_details/' + id)
    }
  }
}
</script>
<style lang="scss" scoped>
.new-list {
  max-width: 1200px;
  padding: 30px 0;
  font-size: 14px;
  text-align: left;
  border-bottom: 1px #dedede solid;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: 0.1s;
    color: #10c55b;
  }

  .new-title {
    font-weight: 600;
    padding: 4px;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .new-time {
    color: #909990;
    padding: 4px;
  }

  .new-text {
    padding: 4px;
  }
}
</style>
