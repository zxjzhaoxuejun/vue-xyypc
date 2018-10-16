<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
$green: #10c55b;
$white: #ffffff;
$high-green: #05ad4a;

body,
html {
  padding: 0;
  margin: 0;
  font-size: 14px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */

  .no-data {
    text-align: left;
    margin-top: 20px;
  }

  .xy-container {
    max-width: 1200px;
    margin: 0 auto;
    height: auto;
    padding: 0 15px;
  }

  .new-mode {
    margin: 10px 0;
    padding: 0 15px;
  }

  .loading-class {
    background: #333;
    opacity: 0.8;

    .el-loading-spinner {
      top: 4%;
    }

    .el-loading-spinner .path {
      stroke: $green;
    }

    .el-loading-text {
      color: #fff;
    }
  }
  .details-con {
    max-width: 1200px;
    height: auto;
    margin: 0 auto;
    padding: 20px 15px;

    .detail-title {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: #ff6600;
    }

    .athu {
      text-align: center;
      padding: 15px 0;
      border-bottom: 1px #dedede dashed;
      color: #909399;

      span {
        margin-right: 20px;
      }
    }

    .detail-info {
      font-size: 14px;
      padding: 10px 0;

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }
  }
}

.mode {
  width: 100%;
  padding: 20px 0;

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mode-item {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 0 15px;

    .title-text {
      font-size: 2.2em;
      padding: 15px 0;
      margin: 0;
    }

    .text-style {
      padding: 15px 0;

      &::after {
        display: block;
        content: '';
        width: 80px;
        height: 2px;
        background: #05ad4a;
        margin: 20px auto;
      }
    }
  }

  .f-mode {
    display: flex;
    text-align: left;
    justify-content: space-between;

    .f-img {
      display: inline-block;
      max-width: 100%;
    }

    .f-con {
      padding: 0 10px;
    }
  }

  .m-t {
    margin-bottom: 25px;
  }

  .case-list {
    padding: 40px 0;
  }

  .menu-ul {
    width: 100%;
    font-size: 14px;
    color: #909399;

    .menu-li-item {
      display: inline-block;
      padding: 10px 4px;
      margin-right: 15px;
      cursor: pointer;

      &:hover {
        color: #303133;
      }
    }
    .active {
      border-bottom: 1px $green solid;
      color: $green;
    }
  }
}

.btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: $white;
  border: 1px solid $green;
  color: $white;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  margin: 10px 0;
  text-decoration: none;
}
.btn-green {
  background: $green;

  &:hover {
    background: $high-green;
    color: $white;
    transform: scale(1.08);
    transition: 0.1s;
  }
}
.text-green {
  color: $green;
}
.headline {
  font-size: 1em;
  font-weight: 600;
}
.info-text {
  font-size: 14px;
  color: #666;
}
a {
  text-decoration: none;
  color: #303331;
  cursor: pointer;

  &:hover {
    color: #10c55b;
  }
}

.el-pager li.active {
  color: #05ad4a;
}
@media screen and (max-width: 768px) {
  .el-col-6,
  .el-col-18,
  .el-col-8,
  .el-col-7,
  .el-col-12,
  .el-col-4,
  .el-col-5,
  .el-col-9,
  .el-col-14,
  .el-col-10 {
    width: 100%;
  }
  #app .block {
    width: 100%;
  }

  .el-pagination {
    white-space: normal;
  }

  #app .bo-banner {
    .code {
      font-size: 1em;
    }

    .text {
      font-size: 12px;
    }
  }

  #app .details-con {
    max-width: 100%;
  }
}
</style>
