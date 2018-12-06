<template>
    <div>
        <form action="" class="Addcustomers">
            <h5 class="title">
                <i class="el-icon-document add"></i>编辑自营产品
            </h5>
            <div class="head">
                基本信息
            </div>
            <el-form ref="form" :model="form" label-width="88px">
                <div class="item">
                    <el-form-item label="产品名称：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="产品编号：">
                        <el-input v-model="form.number"></el-input>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="产品型号：">
                        <el-input v-model="form.Model"></el-input>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="产品分类：">
                        <el-select v-model="form.classification" placeholder="请选择">
                        <el-option label="梳妆" value="梳妆"></el-option>
                        <el-option label="服装" value="服装"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="入库类型：">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="出租" name="type"></el-checkbox>
                            <el-checkbox label="销售" name="type"></el-checkbox>
                            <el-checkbox label="自用" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="入库价格：">
                        <el-input v-model="form.pirce"></el-input>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="总库存：">
                        <el-input v-model="form.stock"></el-input>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="剩余数量：">
                        <el-input v-model="form.surplus"></el-input>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="产品状态：">
                        <el-select v-model="form.state" placeholder="请选择">
                        <el-option label="完好" value="完好"></el-option>
                        <el-option label="有磨损" value="有磨损"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="item last"> 
                    <el-form-item label="产品属性：">
                        <el-radio-group v-model="form.attribute">
                            <el-radio label="实体"></el-radio>
                            <el-radio label="虚拟"></el-radio>
                        </el-radio-group>
                            (注：虚拟产品不会参与出入库)
                    </el-form-item>
                </div>
            </el-form>
            <div class="head">
                图片信息
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
                number:'',
                Models:'',
                type:[],
                classification:'',
                pirce:'',
                stock:'',
                surplus:'',
                state:'',
                attribute:''
            }
        }
    }
}
</script>
<style scoped>
.title{
    border-bottom: 1px solid #ddd;
    line-height: 30px;
}
.head{
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #0ae;
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
    margin-top: 10px;
}
.item{
    width: 33%;
    display: inline-block;
    border-bottom: 1px solid #ddd;
    padding: 12px 50px 0px 10px;
    box-sizing: border-box;
}
.el-form-item__label{
    font-size: 10px!important;
}
.last{
    width: 50%;
}
</style>
