<template>
  <div class="bo-banner">
      <img src="../assets/imgs/bobanner.jpg" alt="banner">
      <div class="img-text">
        <div class="code">{{topInfo.code}}</div>
        <div class="text">{{topInfo.text}}</div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    topInfo: {
      type: [Object],
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.bo-banner {
  position: relative;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;

  img {
    display: block;
    max-width: 100%;
    min-height: 150px;
    height: auto;
  }

  .img-text {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #ffffff;
  }

  .code {
    position: relative;
    font-size: 2.6em;
    font-weight: 600;
    padding: 15px 0;

    &::after {
      position: absolute;
      bottom: 0;
      left: 45%;
      display: inline-block;
      content: '';
      width: 30px;
      height: 2px;
      background: #05ad4a;
      margin: 0 auto;
    }
  }
  .text {
    font-size: 1.5em;
    text-align: center;
    margin-top: 15px;
  }
}
</style>
