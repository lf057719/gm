<template>
    <div>
        <form action="" class="Addcustomers">
            <h5 class="title">
                <i class="el-icon-document add"></i>编辑客户
            </h5>
            <div class="form">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="客户姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="客户类型">
                        <el-select v-model="form.Ctype" placeholder="请选择客户类型">
                        <el-option label="个体" value="个体"></el-option>
                        <el-option label="公司" value="公司"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="form.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="职位">
                        <el-input v-model="form.position"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="form.tel"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ">
                        <el-input v-model="form.qq"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="form.em"></el-input>
                    </el-form-item>
                    <el-form-item label="客户备注">
                        <el-input type="textarea" v-model="form.remarks"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                name:'',
                Ctype:'',
                sex:'',
                position:'',
                tel:'',
                qq:'',
                em:'',
                remarks:''
            }
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
</style>
