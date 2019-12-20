<template>
  <div class="tab-bar-item" @click="clickItem">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props: {
    path: String
  },
  methods: {
    clickItem() {
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path);
      }
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>