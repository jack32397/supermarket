<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{active: index === currrentIndex}"  v-bind:key="item" @click="itemClick(index)">
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
  },
  data () {
    return {
      currrentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currrentIndex = index
      this.$emit('tabClick',index)
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
   .tab-control-item span{
     padding: 5px
   }
  .active{
    color: var(--color-high-text)
  }
  .active span{
    border-bottom: 2px solid var(--color-tint)
  }
</style>
