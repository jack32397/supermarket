<template>
  <tabbar>
    <tabbarItem path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" />

      <div slot="item-text">首页</div>
    </tabbarItem>
    <tabbarItem path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" />
      <div slot="item-text">分类</div>
    </tabbarItem>
    <tabbarItem path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" />
      <div slot="item-text">购物车</div>
    </tabbarItem>
    <tabbarItem path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" />
      <div slot="item-text">我的</div>
    </tabbarItem>
  </tabbar>
</template>
<script>
import tabbar from '../../common/tabbar/tabbar'
import tabbarItem from '../../common/tabbar/tabbarItem'

export default {
  name: 'MainTabBar',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>
