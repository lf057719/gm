<template>
    <div class="private">
        <h5 class="title">
            <i class="el-icon-share add"></i>仓库分类
        </h5>
        <div class="main">
            <div class="tab_nav">
                <a href="javascript:;">仓库分类</a>
            </div>
            <div class="p_btn">
                <el-button plain type="primary" icon="el-icon-plus">新增</el-button>
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
                    width="120">
                    </el-table-column>
                    <el-table-column
                    label="商品分类"
                    align="center"
                    width="180"
                    prop="class_name">
                    </el-table-column>
                    <el-table-column
                    prop="id"
                    label="排序"
                    align="center"
                    width="120">
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="success" size="mini" plain @click="open">子类</el-button>
                            <el-button type="primary" size="mini" plain>修改</el-button>
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
                class_name:'化妆',
                id:1
            },
            {
                class_name:'服装',
                id:2
            },
            {
                class_name:'灯光',
                id:3
            },
            {
                class_name:'头饰',
                id:4
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
