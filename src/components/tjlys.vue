<template>
	<div>
		<div class="content">
			<div class="head">
				<i class="el-icon-edit"></i>编辑联营商
			</div>
			<el-form :label-position="labelPosition" label-width="130px" :model="form">
				<el-form-item label="联营商名字：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="联营商属性：">
					<el-select v-model="form.type" :placeholder="form.type">
						<el-option label="公司" value="公司"></el-option>
						<el-option label="个体" value="个体"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="联营商身份：">
					<el-checkbox v-model="form.checked1">出租型</el-checkbox>
					<el-checkbox v-model="form.checked2">出售型</el-checkbox>
				</el-form-item>
				<el-form-item label="合同比例：">
					<el-input v-model="form.bili"></el-input>
				</el-form-item>
				<el-form-item label="负责人：">
					<el-input v-model="form.fuzeren"></el-input>
				</el-form-item>
				<el-form-item label="客户性别：">
					<el-radio v-model="form.radio" label="1">男</el-radio>
					<el-radio v-model="form.radio" label="2">女</el-radio>
				</el-form-item>
				<el-form-item label="职位：">
					<el-input v-model="form.zhiwei"></el-input>
				</el-form-item>
				<el-form-item label="手机号码：">
					<el-input v-model="form.shouji"></el-input>
				</el-form-item>
				<el-form-item label="QQ：">
					<el-input v-model="form.qq"></el-input>
				</el-form-item>
				<el-form-item label="邮箱：">
					<el-input v-model="form.youxiang"></el-input>
				</el-form-item>
				<el-form-item label="联营商证件：">
					<el-upload
						action="https://jsonplaceholder.typicode.com/posts/"
						list-type="picture-card"
						:on-preview="handlePictureCardPreview"
						:on-remove="handleRemove">
  						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="form.dialogVisible">
					  <img width="100%" :src="form.dialogImageUrl" alt="">
					</el-dialog>
					<el-upload
						action="https://jsonplaceholder.typicode.com/posts/"
						list-type="picture-card"
						:on-preview="handlePictureCardPreview"
						:on-remove="handleRemove">
  						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="form.dialogVisible">
					  <img width="100%" :src="form.dialogImageUrl" alt="">
					</el-dialog>
					<el-upload
						action="https://jsonplaceholder.typicode.com/posts/"
						list-type="picture-card"
						:on-preview="handlePictureCardPreview"
						:on-remove="handleRemove">
  						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="form.dialogVisible">
					  <img width="100%" :src="form.dialogImageUrl" alt="">
					</el-dialog>
					<el-upload
						action="https://jsonplaceholder.typicode.com/posts/"
						list-type="picture-card"
						:on-preview="handlePictureCardPreview"
						:on-remove="handleRemove">
  						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="form.dialogVisible">
					  <img width="100%" :src="form.dialogImageUrl" alt="">
					</el-dialog>
				</el-form-item>
				<el-form-item label="联营商说明：">
					<div class="edui-container" style="width: 930px; z-index: 999;">
                                <div class="editor-container">
                                    <UE :defaultMsg=form.defaultMsg :config=form.config ref="ue"></UE>
                                </div>
                            </div>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" plain>保存</el-button>
					<el-button type="danger" plain>取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	import UE from './fuwenben.vue';
	export default {
		data() {
			return {
				labelPosition: 'right',
				form: {
					name: '',
					type: '个体',
					radio: '1',
					zhiwei: '',
					shouji: '',
					qq: '',
					youxiang: '',
					beizhu: '',
					checked1:false,
					checked2:false,
					bili:'',
					fuzeren:'',
					dialogImageUrl: '',
					dialogVisible: false,
					defaultMsg: '这里是UE测试',
			        config: {
			          initialFrameWidth: null,
			          initialFrameHeight: 180
			        }
				}
			}
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
		},
		components: {UE}
	}
</script>
<style>
	.el-upload{
		float: left;
		margin-right: 15px;
	}
</style>