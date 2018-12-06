<template>
	<div>
		<div class="jbsz">
			<div class="head">
				<i class="el-icon-edit-outline"></i> 系统信息
			</div>
			<el-form :label-position="labelPosition" label-width="130px" :model="form">
				<el-form-item label="系统标题：">
					<el-input v-model="form.title"></el-input>
				</el-form-item>
				<el-form-item label="系统LOGO：">
					<el-input v-model="form.logo"></el-input>
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList3">
						<el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
				</el-form-item>
				<el-form-item label="系统域名">
					<el-input v-model="form.yuming"></el-input>
				</el-form-item>
				<el-form-item label="系统关键字">
					<el-input type="textarea" v-model="form.guanjianzi"></el-input>
				</el-form-item>
				<el-form-item label="系统描述">
					<el-input type="textarea" v-model="form.miaoshu"></el-input>
				</el-form-item>
				<el-form-item label="联系人：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="手机：">
					<el-input v-model="form.shouji"></el-input>
				</el-form-item>
				<el-form-item label="电话：">
					<el-input v-model="form.dianhua"></el-input>
				</el-form-item>
				<el-form-item label="传真：">
					<el-input v-model="form.chuanzhen"></el-input>
				</el-form-item>
				<el-form-item label="QQ号码：">
					<el-input v-model="form.qq"></el-input>
				</el-form-item>
				<el-form-item label="Email：">
					<el-input v-model="form.email"></el-input>
				</el-form-item>
				<el-form-item label="地址：">
					<el-input v-model="form.dizhi"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">提交</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				labelPosition: 'right',
				form: {
					title: '',
					logo: '',
					yuming: '',
					guanjianzi: '',
					miaoshu: '',
					name: '',
					shouji: '',
					dianhua: '',
					chuanzhen: '',
					qq: '',
					email: '',
					dizhi: ''
				},
				fileList3: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}, {
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}]
			};
		},
		methods: {
			handleChange(file, fileList) {
				this.fileList3 = fileList.slice(-3);
			}
		}
	}
</script>
<style scoped>
	.jbsz {
		width: 100%;
	}
	.jbsz .el-input{
		width: 300px;
	}
	.jbsz .el-main {
		background-color: #E9EEF3;
		color: #333;
		width: 100%;
		height: 100%;
		padding: 15px;
	}
	.jbsz .content{
		width: 100%;
		height: auto;
		border: 1px solid #ddd;
		background-color: #fff;
		border-radius: 4px;
		overflow: auto;
		font-size: 14px;
		color: #333;
	}
	
	.jbsz .head {
		background-color: #fcfcfc;
		padding: 10px 15px;
		border-radius: 4px 4px 0 0;
		border-bottom: solid 1px #ddd;
		font-size: 14px;
		color: #333;
	}
	.jbsz .el-form{
		padding: 20px;
		box-sizing:border-box;
	}
</style>