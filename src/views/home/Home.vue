<template>
  <div id="home">
    <NavBar class="home-nav">
        <div slot='center_'>购物车</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <feature/>
    <tabControl :titles="['流行','新款','精选']" @tabClick="tabClick"/>
    <goodsList :goods="showGoods" />
  </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import feature from './childComps/Feature'
import tabControl from '../../components/content/tabControl/TabControl'
import goodsList from '../../components/content/goods/GoodsList'
import { getHomeData, getGoodsData } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    feature,
    tabControl,
    goodsList
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop' 
    }
  },
  created () {
    this.getHomeData()
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType ='pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    getHomeData () {
      getHomeData ().then(res => {
        this.result = res
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getGoodsData (type) {
      const page = this.goods[type].page+1
      getGoodsData (type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })
    }
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
