<template>
  <div class="hello">
    <div class="login">
      <h3>欢迎注册高老庄</h3>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
            <el-form-item prop="user" :rules="[{ required: true, message: '用户名不能为空'}]">
                <el-input type="text" placeholder="用户名" autocomplete="off" v-model="ruleForm2.user" suffix-icon="el-icon-date"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        user: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    open(a) {
      this.$message(a);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let post_data=this.$qs.stringify({
            username:this.ruleForm2.user,
            password:this.ruleForm2.pass
          })
          this.$http({
            method: 'post',
            url:'http://booka1016.ip10g50gy.tumm.top/signup.php',
            data:post_data
          }).then(res => {
              if (res.data.code) {
                this.open(res.data.msg);
                setTimeout(() => {
                  this.$router.push('/login')
                }, 2000);
              } else {
                this.open(res.data.msg);
              }
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.hello {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../img/bg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 400%;
}
.login {
  width: 340px;
  padding: 24px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-60%, -60%);
  box-sizing: border-box;
  text-align: center;
}
.login h3 {
  text-align: center;
  line-height: 60px;
  font-size: 24px;
}
.login .user,
.login .pass {
  display: block;
  width: 100%;
  height: 30px;
}
.yzm {
  position: absolute;
  right: 0;
  top: 1px;
  width: 100px;
  height: 40px;
  border-radius: 2px;
}
.el-button--primary {
  width: 100%;
}
</style>
