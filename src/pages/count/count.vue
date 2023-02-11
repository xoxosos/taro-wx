<!--
 * @Author: LinRenJie
 * @Date: 2023-02-11 14:34:31
 * @LastEditTime: 2023-02-11 15:00:30
 * @Description: 
 * @FilePath: /taro-nut4/src/pages/count/count.vue
 * @Email: xoxosos666@gmail.com
-->
<template>
  <view>
    <NutButton type="primary" @click="handleClick">click me</NutButton>
    <view>{{ msg }}</view>
    <view>{{ count }}</view>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'count-vue',
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false,
      count: 0,
    })

    const handleClick = (type, msg, cover = false) => {
      state.show = true
      state.msg2 = msg
      state.type = type
      state.cover = cover
      state.count++
      console.log(state)
    }
    return {
      ...toRefs(state),
      handleClick,
    }
  },
}
</script>

<style lang="scss"></style>
