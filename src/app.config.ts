/*
 * @Author: LinRenJie
 * @Date: 2023-02-11 14:18:36
 * @LastEditTime: 2023-02-11 15:04:34
 * @Description:
 * @FilePath: /taro-nut4/src/app.config.ts
 * @Email: xoxosos666@gmail.com
 */
export default defineAppConfig({
  pages: ['pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  // subpackages: [
  //   {
  //     root: 'pages/featureA',
  //     pages: ['index/index'],
  //   },
  // ],
})
