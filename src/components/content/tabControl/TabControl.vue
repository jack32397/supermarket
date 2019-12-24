<template>
  <div class="tab-control">
    <div v-for="item in titles" v-bind:key="item" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
  .tab-control{
      display: flex;
      text-align: center;
      font-size: 14px;
      height: 44px;
      line-height: 44px;
  }
  .tab-control-item{
      flex: 1;
  }
</style>
