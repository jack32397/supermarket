<template>
    <div>
        <GoodsListItem v-for="item in goods" :goodsItem="item"/>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: 'goodslist',
    components: {
       GoodsListItem 
    },
    props:{
        goods: {
            type: Array,
            default () {
                return []
            } 
        }
    }
}
</script>