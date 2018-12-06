<template>
    <div class="private">
        <h5 class="title">
            <i class="el-icon-share add"></i>出租订单
        </h5>
        <div class="main">
            <div class="p_btn">
                <el-button type="danger" plain icon="el-icon-delete">批量删除</el-button>
                <div class="in"><el-input placeholder="请输入内容"></el-input></div>
                <el-button type="primary" plain icon="el-icon-search">搜索</el-button>
            </div>
            <div class="ta">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%">
                    <el-table-column
                    type="selection"
                    align="center"
                    width="50">
                    </el-table-column>
                    <el-table-column
                    label="订单编号"
                    align="center"
                    width="180"
                    prop="number">
                    </el-table-column>
                    <el-table-column
                    prop="user"
                    label="客户名称"
                    align="center"
                    width="100">
                    </el-table-column>
                    <el-table-column
                    prop="num"
                    label="数量"
                    align="center"
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="mode"
                    label="收款方式"
                    align="center"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="time"
                    label="时间"
                    align="center"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    prop="money"
                    label="订单金额"
                    align="center"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="产品列表"
                    align="center"
                    width="120">
                    <router-link to="">查看</router-link>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="primary" size="mini" plain>查看</el-button>
                            <el-button type="danger" size="mini" plain>删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script> 
export default {
    data() {
      return {
        tableData:[
            {
                number:'MG20171125001',
                user:'小红',
                num:'20',
                mode:'现金',
                time:'2018-01-01 12:00:20',
                money:'3000',
                id:1
            },
            {
                number:'MG20171125001',
                user:'小花',
                num:'20',
                mode:'现金',
                time:'2018-01-01 12:00:20',
                money:'3000',
                id:1
            },
            {
                number:'MG20171125001',
                user:'小李',
                num:'20',
                mode:'现金',
                time:'2018-01-01 12:00:20',
                money:'3000',
                id:1
            },
            {
                number:'MG20171125001',
                user:'小黄',
                num:'20',
                mode:'现金',
                time:'2018-01-01 12:00:20',
                money:'3000',
                id:1
            },
            {
                number:'MG20171125001',
                user:'小白',
                num:'20',
                mode:'现金',
                time:'2018-01-01 12:00:20',
                money:'3000',
                id:1
            }
        ],
        multipleSelection: []
      }
    },
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('div', null, [
            h('el-button', {'type':'success'}, '新增 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          dangerouslyUseHTMLString: true,
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 1000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    }
  }
</script>
<style scoped>
.add{
    margin-right: 6px;
}
.title{
    border-bottom: 1px solid #ddd;
    line-height: 30px;
}
.form{
    width: 300px;
    margin-left: 100px;
    margin-top: 20px;
}
.private{
    border: 1px solid #ddd;
    border-radius: 5px;
}
.main{
    margin: 20px auto;
}
.tab_nav{
    height: 38px;
    border-bottom: 1px solid #ddd;
}
.tab_nav a:link{
    cursor: default;
    display: block;
    color: #333;
    width: 96px;
    height: 38px;
    border: 1px solid #ddd;
    line-height: 38px;
    text-align: center;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    margin-left: 30px;
    margin-bottom: -3px;
    background: #fff;
    font-size: 12px;
}
.p_btn{
    margin: 20px 24px;
}
.in{
    display: inline-block;
    width: 200px;
}
.ta .el-button--mini{
    margin-left: 0px;
}
</style>
