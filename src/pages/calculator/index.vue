<template>
  <div class="calculator_container">
      <div class="card touzi">
          <span>投资额:</span>
          <input placeholder="请输入工程投资额" type="digit" @focus="clearValue" v-model="touzie"/>
          <span>万元</span>
      </div>
      <div class="card jianlifei">
          <h2>监理费：{{jianlifei}}万元</h2>
      </div>
       <div style=" margin: 0 10px 10px 10px">
        <div class="buttonGroup">
                   <button  type="primary" class="calButton" @click="calculatorValue">快速计算</button>
                   <button style="color:black" class="calButton" @click="reset">重置调整系数</button>
        </div>
      </div>
      <div>
            <div class="card adjust">
             <view class="picker">
              <div>
                  <span>专业调整系数:</span>
                  <span class="adjustValue">{{zhuanyeValue}}</span>
              </div>
              <picker  :value="zhuanyeValue" :range="zhuanye" @change="changeZhuanye">
                  <span class="selectValue">选择</span>
              </picker>
               </view>
          </div>
            <div class="card adjust">
             <view class="picker">
              <div>
                  <span>高程调整系数:</span>
                  <span class="adjustValue">{{gaochengValue}}</span>
              </div>
              <picker  :value="gaochengValue" :range="gaocheng" @change="changeGaocheng">
                  <span class="selectValue">选择</span>
              </picker>
               </view>
          </div>
          <div class="card adjust">
             <view class="picker">
              <div>
                  <span>工程复杂度调整系数:</span>
                  <span class="adjustValue">{{gongchengValue}}</span>
              </div>
              <picker  :value="gongchengValue" :range="gongcheng" @change="changeGongcheng">
                  <span class="selectValue">选择</span>
              </picker>
               </view>
          </div>
          
      </div>
      <div class="card">
          <span>浮动幅度值：{{fudong}}%</span>
           <slider :value="fudong" activeColor="#1AAD19" block-color="#1AAD19" color="#1AAD19" min=-50 max=50 @changing="sliderChange" step="1"/>
                
      </div>
     
      <div v-if="advShow_one" class="card  advertisement_one" >
        <h2>监理 房建、市政 甲级资质</h2>
        <h2>业务联系：18618421231</h2>
      </div>
      <div v-if="advShow_two" class="card  advertisement_two" >
        <h2>微信小程序 公众号制作</h2>
        <h2>业务联系：18618421231</h2>
      </div>
       <div class="card">
            <p id="pizhu">注:监理费依据《建设工程监理与相关服务收费管理规定》(发改价格【2007】670号)计算</p>
       </div>       
  </div>
</template>

<script>
// Use Vuex
export default {
  data () {
    return {
      advShow_one: true,
      advShow_two: false,
      touzie: null,
      fudong: 0,
      jianlifei: 0,
      zhuanyeValue: '1.0',
      gaochengValue: '1.0',
      gongchengValue: '1.0',
      zhuanye: ['0.8', ' 0.9', ' 1.0', '1.1', ' 1.2', ' 1.3'],
      gaocheng: ['1.0', '1.1', '1.2', '1.3'],
      gongcheng: ['0.85', '1.00', '1.15']
    }
  },
  computed: {
    touzieValue () {
      this.touzie = (this.touzie || '').replace(/^(\d+)\.(\d{6}).*/, '$1.$2')
      if (this.touzie.indexOf('.') < 0 && this.touzie !== '') {
        this.touzie = parseFloat(this.touzie)
        console.log('投资额' + this.touzie)
      }
      return this.touzie
    }
  },
  mounted () {
    setInterval(() => {
      this.advShow_one = !this.advShow_one
      this.advShow_two = !this.advShow_two
    }, 3000)
  },
  methods: {
    sliderChange (e) {
      this.fudong = e.target.value
    },
    clearValue () {
      this.touzie = ''
    },
    changeZhuanye (e) {
      this.zhuanyeValue = this.zhuanye[e.target.value]
    },
    reset () {
      this.zhuanyeValue = '1.0'
      this.gaochengValue = '1.0'
      this.gongchengValue = '1.0'
      this.fudong = 0
    },
    changeGaocheng (e) {
      this.gaochengValue = this.gaocheng[e.target.value]
    },
    changeGongcheng (e) {
      this.gongchengValue = this.gongcheng[e.target.value]
    },
    calculatorValue () {
      let X = parseFloat(this.touzie)
      let K = null
      if (X >= 0 && X < 500) {
        K = X * 16.5 / 500
      }
      if (X >= 500 && X < 1000) {
        K = (X - 500) * (30.1 - 16.5) / (1000 - 500) + 16.5
      }
      if (X >= 1000 && X < 3000) {
        K = (X - 1000) * (78.1 - 30.1) / (3000 - 1000) + 30.1
      }
      if (X >= 3000 && X < 5000) {
        K = (X - 3000) * (120.8 - 78.1) / (5000 - 3000) + 78.1
      }
      if (X >= 5000 && X < 8000) {
        K = (X - 5000) * (181 - 120.8) / (8000 - 5000) + 120.8
      }
      if (X >= 8000 && X < 10000) {
        K = (X - 8000) * (218.6 - 181) / (10000 - 8000) + 181
      }
      if (X >= 10000 && X < 20000) {
        K = (X - 10000) * (393.4 - 218.6) / (20000 - 10000) + 218.6
      }
      if (X >= 20000 && X < 40000) {
        K = (X - 20000) * (708.2 - 393.4) / (40000 - 20000) + 393.4
      }
      if (X >= 40000 && X < 60000) {
        K = (X - 40000) * (991.4 - 708.2) / (60000 - 40000) + 708.2
      }
      if (X >= 60000 && X < 80000) {
        K = (X - 60000) * (1255.8 - 991.4) / (80000 - 60000) + 991.4
      }
      if (X >= 80000 && X < 100000) {
        K = (X - 80000) * (1507 - 1255.8) / (100000 - 80000) + 1255.8
      }
      if (X >= 100000 && X < 200000) {
        K = (X - 100000) * (2712.5 - 1507) / (200000 - 100000) + 1507
      }
      if (X >= 200000 && X < 400000) {
        K = (X - 200000) * (4882.6 - 2712.5) / (400000 - 200000) + 2712.5
      }
      if (X >= 400000 && X < 600000) {
        K = (X - 400000) * (6835.6 - 4882.6) / (600000 - 400000) + 4882.6
      }
      if (X >= 600000 && X < 800000) {
        K = (X - 600000) * (8658.4 - 6835.6) / (800000 - 600000) + 6835.6
      }
      if (X >= 800000 && X < 1000000) {
        K = (X - 800000) * (10390.1 - 8658.4) / (1000000 - 800000) + 8658.4
      }
      if (X >= 1000000) {
        K = X * 1.039 / 100
      }
      let a = parseFloat(this.zhuanyeValue)
      let b = parseFloat(this.gongchengValue)
      let c = parseFloat(this.gaochengValue)
      let f = this.fudong / 100
      let y = K * a * b * c * (1 + f)
      const regexp = /(?:\.0*|(\.\d+?)0+)$/
      this.jianlifei = y.toFixed(6).replace(regexp, '$1')
    }
  }
}

</script>
<style>
.calculator_container {
    padding: 0;
    margin: 0;
    color: #373737;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.advertisement_one{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  height: 5em;
  background: #7a2300 !important;
  color: #f0f0f0;
}
.advertisement_two{
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  height: 5em;
  background:#004a6d !important;
  color: #f0f0f0;
}
.buttonGroup{
  display: flex;
  flex-direction:row;
}
.buttonGroup button{
  flex: 1;
}
.card{
    margin: 0 10px 10px 10px;
    background: #fff;
    padding: 10px;
}
.picker{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.picker:nth-child(1){
  flex:4
}
.picker:nth-child(3){
  flex:3
}
.radioG{
    display: flex;
    flex-direction: column;
}
.radio-group{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.touzi{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
}
.touzi>input{
    height: 2.0em;
}
.jianlifei{
    color:#f0f0f0;
    background:#1AAD19;
}
.calButton{
    color: #f0f0f0;
    border-radius: 0;
    margin-top: 0.5em;
    border: none;
}
.adjustValue{
  margin-left: 1em;
}
.selectValue{
  color: #f0f0f0;
  background: #1AAD19;
  padding: 0 1em;
}
#pizhu{
    font-size: 0.8em;
}
</style>
