<template>
  <div class="block" v-if="total">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="sizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: [Number, String],
      default: 0
    },
    sizes: {
      type: [Number],
      default: 8
    }
  },
  methods: {
    handleSizeChange(size) {
      console.log(`每页 ${size} 条`)
      this.$emit('childByValue', { page: 1, size: size })
    },
    handleCurrentChange(page) {
      console.log(`当前页: ${page}`)
      this.$emit('childByValue', { page: page, size: this.sizes })
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSizes: [this.sizes, 15, 20, 30, 100]
    }
  }
}
</script>
<style lang="scss" scoped>
.block {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
}
</style>
