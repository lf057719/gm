<template>
    <div>
        <h5>欢迎添加学生</h5>
        <el-form ref="form" :model="form" label-width="150px">
            <el-row :gutter="50">
                <el-col :span="8">
                    <el-form-item label="学生姓名：">
                        <el-input v-model="form.sname"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="年龄：">
                        <el-input v-model="form.sage"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="所在班级：">
                        <el-input v-model="form.sclass"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="身份证号：">
                        <el-input v-model="form.scard"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="家庭地址：">
                        <el-input v-model="form.saddress"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="电话：">
                        <el-input v-model="form.stel"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                     <el-form-item label="性别：" prop="ssex">
                        <el-radio-group v-model="form.ssex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="添加时间：">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.stime" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="其他信息：">
                        <el-input v-model="form.sisgra"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="add">
                <el-button type="primary" round @click="addStudent">立即添加</el-button>
            </div>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                sname:'',
                sage:'',
                sclass:'',
                scard:'',
                saddress:'',
                stel:'',
                ssex:'',
                sisgra:'',
                stime:''
            }
        }
    },
    methods:{
        addStudent(){
            this.$http.get('http://booka1016.ip10g50gy.tumm.top/addstudent.php',{
                params:this.form
            }).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>
<style scoped>
h5{
    font-size: 24px;
    text-align: center;
    line-height: 50px;
}
.add{
    text-align: center;
}
</style>
