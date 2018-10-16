<template>
  <div class="case-list-item" @click="headleUrl(caseData.url)">
      <img :src="caseData.img" alt="图">
      <h4 class="headline">{{caseData.title}}</h4>
      <ul class="info">
        <li><b>网址:</b>{{caseData.url}}</li>
        <li class="max-h"><b>简介:</b>{{caseData.alias}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  props: {
    caseData: {
      type: [Object, String],
      default: null
    }
  },
  methods: {
    headleUrl(e) {
      console.log(e)
      window.open = e
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
  border: 1px #dedede solid;
  border-radius: 4px;
  height: 400px;

  &:hover {
    transform: scale(1.02);
    transition: 0.1s;
    color: #10c55b;
  }

  a {
    color: #303331;

    &:hover {
      color: #10c55b;
    }
  }

  .headline {
    margin: 0;
    padding: 10px;
  }

  img {
    width: 100%;
    display: block;
    max-height: 180px;
  }

  .info {
    padding: 0 10px 20px 10px;

    li {
      color: #909399;
      padding: 4px 0;

      b {
        color: #303331;
      }
    }
  }
  .max-h {
    height: 100px;
    overflow: hidden;
  }
}
</style>
