<template>
    <div class="nav-bar">
        <div class="left">
            <slot name='left_'></slot>
        </div>
        <div class="center">
            <slot name='center_'></slot>
        </div>
        <div class="right">
            <slot name='right_'></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
    .nav-bar{
        display: flex;
        line-height: 44px;
        height: 44px;
        text-align: center;
    }
    .left, .right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>
