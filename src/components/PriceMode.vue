<template>
  <div class="price-mode">
    <div class="top-q">
      <div class="price">{{typeInfo.price}}元</div>
      <div class="uint">起</div>
    </div>
    <div class="headline">
      {{typeInfo.title}}
    </div>
    <router-link :to="'/contact'"  class="btn btn-green" >立即咨询</router-link>
    <div class="headline-tag">{{typeInfo.sun_title}}</div>
    <div class="info">
      <p>功能：{{typeInfo.content}}</p>
      <p>注：{{typeInfo.text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    typeInfo: {
      type: [Object, String],
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
$green: #10c55b;

.price-mode {
  height: 430px;
  padding: 15px;
  border: 1px #ccc solid;
  border-radius: 4px;
  box-shadow: 2px 2px 5px 1px #d1d1d1;
  -moz-box-shadow: 2px 2px 5px 1px #d1d1d1;
  background: #fff;
  margin: 40px 0;

  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
    cursor: pointer;
  }

  .top-q {
    width: 120px;
    height: 120px;
    border: 4px $green solid;
    border-radius: 50%;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }

  .price {
    font-size: 1.8em;
    color: $green;
    margin-top: 1.1em;
  }
  .uint {
    color: #999;
    font-size: 1em;
  }

  .headline {
    font-size: 1.1em;
    margin-top: 1em;
    font-weight: 600;
  }

  .headline-tag {
    color: #666;
    margin-top: 0.8em;
  }

  .info {
    color: #666;
    font-size: 14px;
    text-align: left;
  }
}
</style>
