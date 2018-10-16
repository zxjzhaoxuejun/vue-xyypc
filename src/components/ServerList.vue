<template>
  <div class="case-list-item">
      <div class="title-mode">
        <div class="main-title">
          <span class="text-green">{{serverData.title}}</span>
        </div>
        <div class="small-title">{{serverData.sub_title}}</div>
      </div>
      <div class="s-img">
        <img :src="serverData.img" alt="图">
      </div>
      <div class="info">{{serverData.alias}}</div>
      <div class="tag-list">
        <span class="tag-item" v-for="item in serverData.tag" :key="item.id">{{item}}</span>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    serverData: {
      type: [Object, String],
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.case-list-item {
  background: #fff;
  text-align: left;
  font-size: 14px;
  margin: 40px 0;
  border-radius: 4px;
  height: auto;
  box-shadow: 2px 2px 5px 1px #d1d1d1;
  -moz-box-shadow: 2px 2px 5px 1px #d1d1d1;

  &:hover {
    transform: scale(1.02);
    transition: 0.1s;
  }

  .title-mode {
    border-bottom: 1px #dedede solid;
    padding-bottom: 10px;
  }

  .main-title {
    font-size: 1.6em;
    font-weight: 600;
    padding: 10px 0px 0 15px;
    letter-spacing: 1px;
  }

  .small-title {
    font-size: 14px;
    color: #cccccc;
    padding-left: 15px;
  }

  .info {
    margin: 0;
    padding: 0 10px;
    font-weight: normal;
    color: #909991;
  }

  .s-img {
    padding: 10px 10px;
  }
  img {
    max-width: 100%;
    display: block;
    height: auto;
  }

  .tag-list {
    padding: 10px;

    .tag-item {
      display: inline-block;
      border: 1px #dedede solid;
      border-radius: 4px;
      padding: 4px 8px;
      margin: 4px 2px;
    }
  }
}
</style>
