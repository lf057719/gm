<template>
  <div class="hello">
    <div class="login">
      <h3>高老庄后台管理中心</h3>
      <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
        <el-form-item prop="user" :rules="[{ required: true, message: '用户名不能为空'}]">
          <el-input type="text" placeholder="用户名" autocomplete="off" v-model="numberValidateForm.user" suffix-icon="el-icon-date"></el-input>
        </el-form-item>
        <el-form-item prop="pass" :rules="[{ required: true, message: '密码不能为空'}]">
          <el-input type="password" placeholder="密码" autocomplete="off" v-model="numberValidateForm.pass" suffix-icon="el-icon-date"></el-input>
        </el-form-item>
        <el-form-item prop="yz" :rules="[{ required: true, message: '验证码不能为空'}]">
          <el-input type="text" placeholder="验证码" autocomplete="off" v-model="numberValidateForm.yz"></el-input>
          <img src="http://pic.pptbz.com/201506/2015070581208537.JPG" alt="" class="yzm">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')">登录</el-button>
        </el-form-item>
        <router-link to="/register">注册</router-link>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          user: '',
          pass:'',
          yz:''
        }
      }
    },
    methods: {
      open(a) {
        this.$message(a);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get('http://booka1016.ip10g50gy.tumm.top/login.php?username='+this.numberValidateForm.user+'&password='+this.numberValidateForm.pass).then((res)=>{
              if(res.data.code){
                console.log(res.data)
                localStorage.setItem('token',res.data.token)
                this.$router.push('/')
              }else{
                this.open(res.data.msg)
              }
            })
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
.hello{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../img/bg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 400%;
}
.login{
  width: 340px;
  padding: 24px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-60%,-60%);
  box-sizing: border-box;
  text-align: center;
}
.login h3{
  text-align: center;
  line-height: 60px;
  font-size: 24px;
}
.login .user,.login .pass{
  display: block;
  width: 100%;
  height: 30px;
}
.yzm{
  position: absolute;
  right: 0;
  top: 1px;
  width: 100px;
  height: 40px;
  border-radius: 2px;
}
.el-button--primary{
  width: 100%;
}
.hello a{
  float: right;
}
</style>
