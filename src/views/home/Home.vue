<template>
  <div id="home">
    <NavBar class="home-nav">
        <div slot='center_'>购物车</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <feature/>
    <tabControl :titles="['流行','新款','精选']"/>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import feature from './childComps/Feature'
import tabControl from '../../components/content/tabControl/TabControl'
import { getHomeData } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    feature,
    tabControl
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    getHomeData().then(res => {
      console.log(res)
      this.result = res
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  #home{
     margin-top: 44px;
  }
  .home-nav{
      background-color: pink;
      color: #fff;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: 2;
  }
</style>
