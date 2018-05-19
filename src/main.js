import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/logs', '^pages/calculator/calculator'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#1AAD19',
      navigationBarTitleText: '监理费计算器',
      navigationBarTextStyle: '#f0f0f0'
    }
    // tabBar: {
    //   selectedColor: '#fff',
    //   color: '#f0f0f0',
    //   backgroundColor: '#1AAD19',
    //   position: 'top',
    //   list: [{
    //     pagePath: 'pages/calculator/calculator',
    //     text: '计算界面'
    //   },
    //   {
    //     pagePath: 'pages/suggestion/suggestion',
    //     text: '建议界面'
    //   }]
    // }
  }
}
