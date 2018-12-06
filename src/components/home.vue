<template>
    <div class="home">
        <el-container>
            <el-header>
                <div class="header">
                    <img src="../img/logo.png" alt="" class="logo">
                    <h3>    高老庄后台管理系统</h3>
                    <div class="header_btn">
                        <el-button type="success" @click="sy"><i class="el-icon-date"></i><span>前台首页</span> </el-button>
                        <el-button type="primary"><i class="el-icon-delete"></i><span>清除缓存</span></el-button>
                        <el-button type="danger" @click="Signout"><i class="el-icon-circle-close"></i> <span>退出登录</span></el-button>
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside width="160px">
                    <div class="left">
                        <GeminiScrollbar
                            class="my-scroll-bar">
                        <el-row class="tac">
                            <el-col :span="24">
                                <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose"
                                background-color="#fff"
                                text-color="#333"
                                router="true"
                                active-text-color="#e33">
                                    <el-submenu index="1">
                                        <template slot="title">
                                            <i class="el-icon-goods icc"></i>
                                            <span slot="title">自营仓库</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="private"><i class="el-icon-caret-right ic"></i>仓库分类</el-menu-item>
                                            <el-menu-item index="Warehousing"><i class="el-icon-caret-right ic"></i>入库添加</el-menu-item>
                                            <el-menu-item index="warehouses"><i class="el-icon-caret-right ic"></i>入库列表</el-menu-item>
                                            <el-menu-item index="Outof"><i class="el-icon-caret-right ic"></i>出库列表</el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                    <el-submenu index="2">
                                        <template slot="title">
                                            <i class="el-icon-sold-out icc"></i>
                                            <span slot="title">联营仓库</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="jointH"><i class="el-icon-caret-right ic"></i>仓库分类</el-menu-item>
                                            <el-menu-item index="as"><i class="el-icon-caret-right ic"></i>入库列表</el-menu-item>
                                            <el-menu-item index="as"><i class="el-icon-caret-right ic"></i>批量生成码</el-menu-item>
                                            <el-menu-item index="as"><i class="el-icon-caret-right ic"></i>已生成列表</el-menu-item>
                                            <el-menu-item index="as"><i class="el-icon-caret-right ic"></i>出库列表</el-menu-item>
                                            <el-menu-item index="as"><i class="el-icon-caret-right ic"></i>回库清算</el-menu-item>
                                            <el-menu-item index="mslb"><i class="el-icon-caret-right ic"></i>磨损列表</el-menu-item>
                                            <el-menu-item index="qxlb"><i class="el-icon-caret-right ic"></i>清洗列表</el-menu-item>
                                            <el-menu-item index="dslb"><i class="el-icon-caret-right ic"></i>丢失报损列表</el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                    <el-submenu index="3">
                                        <template slot="title">
                                            <i class="el-icon-document icc"></i>
                                            <span slot="title">订单管理</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="lease"><i class="el-icon-caret-right ic"></i>出租订单</el-menu-item>
                                            <el-menu-item index="sale"><i class="el-icon-caret-right ic"></i>销售订单</el-menu-item>
                                            <el-menu-item index="history"><i class="el-icon-caret-right ic"></i>历史订单</el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                    <el-submenu index="4">
                                        <template slot="title">
                                            <i class="el-icon-phone icc"></i>
                                            <span slot="title">联营商管理</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="lyslb"><i class="el-icon-caret-right ic"></i>联营商列表</el-menu-item>
                                            <el-menu-item index="tjlys"><i class="el-icon-caret-right ic"></i>添加联营商</el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                    <el-submenu index="5">
                                        <template slot="title">
                                            <i class="el-icon-service icc"></i>
                                            <span slot="title">客户管理</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="stus"><i class="el-icon-caret-right ic"></i>客户列表</el-menu-item>
                                            <el-menu-item index="Addcustomers"><i class="el-icon-caret-right ic"></i>添加客户</el-menu-item>
                                            <el-menu-item index="add"><i class="el-icon-caret-right ic"></i>添加学生</el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                    <el-submenu index="6">
                                        <template slot="title">
                                            <i class="el-icon-star-on icc"></i>
                                            <span slot="title">财务管理</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="/"><i class="el-icon-caret-right ic"></i>财务详情</el-menu-item>
                                            <el-menu-item index="cwgl"><i class="el-icon-caret-right ic"></i>账户明细</el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                    <el-submenu index="7">
                                        <template slot="title">
                                            <i class="el-icon-setting icc"></i>
                                            <span slot="title">系统设置</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="glylb"><i class="el-icon-caret-right ic"></i>管理员列表</el-menu-item>
                                            <el-menu-item index="qxgl"><i class="el-icon-caret-right ic"></i>权限管理</el-menu-item>
                                            <el-menu-item index="jbsz"><i class="el-icon-caret-right ic"></i>基本设置</el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                </el-menu>
                            </el-col>
                        </el-row>
                        </GeminiScrollbar>
                    </div>
                </el-aside>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default ({
    methods:{
        Signout(){
            localStorage.clear()
            window.location.reload()
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        sy(){
            this.$router.push('/')
        }
    }
})
</script>
<style scoped>

  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
    background-image: url(../img/bg.jpg);
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
.logo{
    height: 50px;
    border-radius: 50%;
    float: left;
    margin: 10px;
}
header h3,header h6{
    float: left;
    font-size: 24px;
    color: #eee;
}
header h6{
    font-size: 16px;
    margin-left: 50px;
}
header .header_btn{
    float: left;
    height: 70px;
    margin-left: 30px;
}
header .header_btn span{
    font-size: 12px;
}
.el-container .el-container .el-aside{
    height: 100%;
    background: #000;
}
.el-menu-item{
    font-size: 12px;
}
.el-submenu__title{
    font-size: 16px;
}
.icc{
    margin-left: -40px;
}
.el-container{
    height: 100%!important;
}
.ic{
    margin-left: -10px;
}
.left{
    position: fixed;
    top: 60px;
    left: 0;
    width: 160px;
    height: 90%;
    box-sizing: border-box;
    overflow: hidden;
    border-right: 1px solid #ddd;
}
.el-menu-item{
   min-width: 120px!important;
}
</style>
