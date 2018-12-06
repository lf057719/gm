<template>
    <div class="cwxq">
            <div class="ckfl_title">
                财务详情
            </div>
            <div class="cwxq_content">
              <ul>
                <li v-for="i in list">
                    <span class="icons"  :style="{'background':i.color}">￥</span>
                    <span class="txt">
                      <p class="txt_h">{{i.name}}</p>
                      <p class="txt_r">{{i.num}}</p>
                    </span>
                </li>
              </ul>
              <div class="cwxq_view" ref="ab"></div>
            </div>
    </div>   
</template>

<script>
  var echarts = require('echarts');

export default {
  name: 'App',
  data() {
      return {
       list:[
         {
           name:'总收入',
           num:'5345654.68',
           color:'#e33'
         }, {
            name:'总支出',
           num:'50656',
           color:'#fee'
         }, {
           name:'本月收入',
           num:'593456.68',
           color:'#2c7'
         }, {
          name:'本月支出',
           num:'100656',
           color:'#efd'
         }, {
          name:'今日收入',
           num:'52565.68',
           color:'#0ae'
         }, {
          name:'今日支出',
           num:'20056',
           color:'#eff'
         }
         
       ]
      }
    },
  mounted(){
  	var main = this.$refs.ab;
  	console.log(main)
	var myChart = echarts.init(main);
	//
	var option = {
    title : {
        text: '收支统计'
        // ,subtext: '纯属虚构'
    },
    axisLabel :{　
      margin:25
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['收入','支出'],
        
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'收入',
            type:'bar',
            data:[120, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 164, 133],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            color: '#63c8ca'　　
        },
        {
            name:'支出',
            type:'bar',
            data:[26, 59, 30, 84, 27, 77, 176, 1822, 487, 188, 60, 23],
            markPoint : {
                data : [
                    {name : '年最高', value : 1822, xAxis: 7, yAxis: 1800},
                    {name : '年最低', value : 23, xAxis: 5, yAxis: 3}
                ]
            },
            color:'#b6a2de'
        }
    ]
};
	//
 	myChart.setOption(option);
  }
}

</script>

<style scoped>
    .cwxq{
        border: solid 1px #ddd;
        border-radius: 4px;
    }
    .cwxq .el-main {
        line-height: 40px !important;
    }
    .cwxq .ckfl_title{
        background-color: #fcfcfc;
        padding: 10px 15px;
        border-radius: 4px 4px 0 0;
        border-bottom: solid 1px #ddd;
        color: #333;
        font-size: 14px;
        height: 17px;
        line-height: 17px;
        text-align: left;
        font-weight: bold;
    }
   .cwxq .cwxq_content{
     width: 100%;
     box-sizing: border-box;
     padding: 20px;
   }
   .cwxq ul {
     display: flex;
     width: 90%;
     flex-wrap: wrap;
   }
   .cwxq ul li {
    width: 200px;
    float: left;
    margin: 10px 5px;
    list-style-type: none;
    font-size: 14px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
   }
  
   .cwxq .icons{
    width: 40%;
    height: 72px;
    float: left;
    line-height: 72px;
    text-align: center;
    border-radius: 4px 0 0 4px;
    font-size: 36px;
    color: white;
    font-weight: bold;
    background: red;
  }
  .cwxq ul li:nth-child(even) .icons{
     color: rgb(51, 51,51);
   }
  .cwxq .txt {
    width: 58%;
    height: 72px;
    padding: 10px 0;
    display: inline-block;
    text-align: center;
    line-height: 26px;
    font-size: 18px;
    box-sizing: border-box;
}
  .cwxq p{
    font-size: 16px;
    color: #F33;
    line-height: 26px;
    margin: 0;
  }
  .cwxq .txt_h{
    color: rgb(51, 51,51)
  }
  .cwxq .cwxq_view{
    width: 90%;
    padding-top: 40px;
    height: 400px;
  }
  .cwxq .cwxq_view>div{
    width: 90%;
    height: 400px;
  }
</style>
