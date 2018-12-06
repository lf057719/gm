<template>
	<div class="ckfl">
		<el-dialog title="修改" :visible.sync="dvisible" :modal-append-to-body="false" :modal="false" width="1000px">
			<el-row :gutter="20">
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<el-form :label-position="labelPosition" label-width="80px" :model="dataRow">
							<el-form-item label="学生姓名">
								<el-input v-model="dataRow.sname"></el-input>
							</el-form-item>
							<el-form-item label="身份证号">
								<el-input v-model="dataRow.scard"></el-input>
							</el-form-item>
							<el-form-item label="性别">
								<el-radio v-model="dataRow.ssex" label="1">男</el-radio>
								<el-radio v-model="dataRow.ssex" label="2">女</el-radio>
							</el-form-item>
						</el-form>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<el-form :label-position="labelPosition" label-width="80px" :model="dataRow">
							<el-form-item label="年龄">
								<el-input v-model="dataRow.sage"></el-input>
							</el-form-item>
							<el-form-item label="家庭住址">
								<el-input v-model="dataRow.saddress"></el-input>
							</el-form-item>
							<el-form-item label="添加时间">
								<el-date-picker type="date" placeholder="选择日期" v-model="dataRow.stime" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-form>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<el-form :label-position="labelPosition" label-width="80px" :model="dataRow">
							<el-form-item label="所在班级">
								<el-input v-model="dataRow.sclass"></el-input>
							</el-form-item>
							<el-form-item label="电话">
								<el-input v-model="dataRow.stel"></el-input>
							</el-form-item>
							<el-form-item label="其他信息">
								<el-input v-model="dataRow.sisgra"></el-input>
							</el-form-item>
						</el-form>
					</div>
				</el-col>
			</el-row>
			<span slot="footer" class="dialog-footer">
    			<el-button @click="dvisible = false">取 消</el-button>
    			<el-button type="primary" @click="rel(dataRow.id),dvisible = false">确 定</el-button>
  			</span>
		</el-dialog>
		<div class="ckfl_title">
			查询信息
		</div>
		<div class="ckfl_content">
			<el-row>
				<el-col :span="24">
					<div class="grid-content bg-purple-dark" style="text-align: center;line-height: 60px;">欢迎查看添加学生信息</div>
				</el-col>
			</el-row>
			<!-- 表格开始 -->
			<el-table :data="arr" align="center" style="width: 100%">
				<el-table-column label="身份证号" width="180" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.scard }}</span>
					</template>
				</el-table-column>

				<el-table-column label="姓名" width="180" align="center">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">
							<p>其他信息: {{ scope.row.sisgra }}</p>
							<p>住址: {{ scope.row.saddress }}</p>
							<p>电话: {{ scope.row.stel }}</p>
							<p>性别: {{ scope.row.ssex | sex }}</p>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">{{ scope.row.sname }}</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="年龄" width="180" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.sage }}</span>
					</template>
				</el-table-column>
				<el-table-column label="班级" width="180" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.sclass }}</span>
					</template>
				</el-table-column>
				<el-table-column label="操作" align="center">
					<template slot-scope="scope">
						<el-button type="primary" plain size="mini" @click="handleWrite(scope.$index, scope.row),dvisible=true">编辑</el-button>
						<el-button type="danger" plain size="mini" @click="handleDelete(scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 表格结束 -->
			<!-- 分页 开始 -->
			<div class="block">
				<el-pagination background layout="prev,pager,next" :total=this.num :page-size=size :current-page=current @current-change="handleCurrentChange">
				</el-pagination>
			</div>
			<!-- 分页 结束 -->

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [],
				num: 0,
				current: 1,
				size: 5,
				dvisible: false,
				dataRow: [],
				labelPosition: 'right'
			}
		},
		mounted() {
			fetch('http://booka1016.ip10g50gy.tumm.top/sestudent.php?', {
				method: 'GET'
			}).then((res) => {
				res.json().then((res) => {
					this.arr = res.studentsList
					this.num = res.recordsAll
				})
			})
		},
		filters: {
			sex(data) {
				if(data == '1') {
					return '男'
				} else {
					return '女'
				}
			}
		},
		methods: {
			rel(idx) {
				fetch('http://booka1016.ip10g50gy.tumm.top/changes.php?id=' + idx +
					'&sname=' + this.dataRow.sname + '&sage=' +
					this.dataRow.sage + '&sclass=' + this.dataRow.sclass + '&scard=' + this.dataRow.scard +
					'&saddress=' + this.dataRow.saddress + '&stel=' + this.dataRow.stel + '&ssex=' + this.dataRow.ssex +
					'&sisgra=' + this.dataRow.sisgra + '&stime=' + this.dataRow.stime, {
						methods: 'GET',
					}).then((res) => {
					res.json().then((res) => {
						console.log(res)
					})
				})
			},
			handleDelete(row) {
				console.log(row.id)
				var token = localStorage.getItem('token')
				console.log(token)
				fetch('http://booka1016.ip10g50gy.tumm.top/del.php?id=' + row.id + '&token=' + token, {
					method: 'get'
				}).then((res) => {
					res.json().then((res) => {
						console.log(res)
						if (res.code==1) {
							this.$message({
								message: '删除成功',
								type: 'warning'
							});
						}
						fetch('http://booka1016.ip10g50gy.tumm.top/sestudent.php?page=' + this.current, {
							method: 'GET'
						}).then((res) => {
							res.json().then((res) => {
								this.arr = res.studentsList
								this.num = res.recordsAll
							})
						})
					})
				})
			},
			handleWrite(index, row) {
				this.dataRow = row
			},
			handleCurrentChange(val) {
				this.current = val
				fetch('http://booka1016.ip10g50gy.tumm.top/sestudent.php?page=' + this.current, {
					method: 'GET'
				}).then((res) => {
					res.json().then((res) => {
						this.arr = res.studentsList
						this.num = res.recordsAll
					})
				})
			}
		}
	}
</script>

<style scoped>
	.ckfl {
		border: solid 1px #ddd;
		border-radius: 4px;
		position: relative;
	}
	
	.el-dialog__wrapper {
		position: absolute;
		background: rgba(0, 0, 0, .1);
		height: 630px;
	}
	
	.el-main {
		line-height: 40px !important;
	}
	
	.ckfl_title {
		background-color: #fcfcfc;
		padding: 10px 15px;
		border-radius: 4px 4px 0 0;
		border-bottom: solid 1px #ddd;
		color: #333;
		font-size: 14px;
		height: 17px;
		line-height: 17px;
		text-align: left;
		font-weight: bold;
	}
	
	.ckfl_content {
		padding: 20px;
	}
	
	.block {
		text-align: center;
		margin-top: 10px;
	}
	
	.el-table-column {
		text-align: center;
	}
	
	th,
	tr {
		text-align: center !important;
	}
	
	.el-table,
	.el-table td,
	.el-table th {
		text-align: center !important;
	}
	
	.el-table .cell {
		display: flex;
	}
	
	.ckfl_content_add {
		padding: 25px 10px 10px;
	}
	
	.ckfl_content_add p {
		margin-bottom: 15px;
		line-height: 24px;
		font-size: 14px;
		display: flex;
	}
	
	.el-input__inner,
	.el-input {
		width: 153px !important;
		margin-left: 20px !important;
		margin-right: 3px;
	}
</style>