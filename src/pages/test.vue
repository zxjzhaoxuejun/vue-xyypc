<template>
  <div>
    <a href="javascript:;" @click="tryOpen">贴吧客户端</a>
  </div>
</template>
<script>
export default {
  methods: {
    tryOpen() {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        this.openApp(
          'com.baidu.tieba://',
          'https://itunes.apple.com/cn/app/id477927812'
        )
      }
      if (navigator.userAgent.match(/android/i)) {
        this.openApp(
          'https://itunes.apple.com/cn/app/id477927812',
          'https://****.apk'
        )
      }
    },
    openApp(appPort, appUrl) {
      this.$http
        .get(appPort)
        .then(res => {
          window.location.href = appPort
        })
        .catch(res => {
          window.setTimeout(function() {
            window.location.href = appUrl
          }, 2000)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
