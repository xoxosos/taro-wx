<template>
  <view>
    <countVue></countVue>
    <CountTow></CountTow>
  </view>
</template>
<script>
import { Dongdong } from '@nutui/icons-vue-taro'
import countVue from '../count/count'
import CountTow from '../count/countTow.vue'
export default {
  name: 'Index',
  components: {
    Dongdong,
    countVue,
    CountTow,
  },
  setup() {},
}
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
