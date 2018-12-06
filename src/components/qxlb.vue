<template>
	<div class="mslb">
		<el-dialog title="编辑"  
		:visible.sync=dialogTableVisible  :modal-append-to-body="false" :modal="false">
			<el-form :label-position="labelPosition" label-width="100px">
				<el-form-item label="订单编号">
					A-52314652
				</el-form-item>
				<el-form-item label="产品名称">
					民国学生服女
				</el-form-item>
				<el-form-item label="客户">
					乔慧
				</el-form-item>
				<el-form-item label="磨损价格">
					<el-input v-model="input"></el-input>元
				</el-form-item>
				<el-form-item label="说明">
					<el-input type="textarea" :rows="2">
					</el-input>
				</el-form-item>
			</el-form>
		</el-dialog>
		<div class="rklb">
			<div class="rklb_title">
				清洗列表
			</div>
			<div class="rklb_content">
				<div class="ckfl_content_add">
					<p>
						<el-button type="success" plain>批量维修</el-button>
						<el-button type="danger" plain>批量删除</el-button>
						<el-select v-model="value" placeholder="请选择联营商属性">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
						<el-input placeholder="输入产品名称" v-model="input10" clearable>
						</el-input>
						<el-button style="margin-right: 200px;" type="primary" plain>搜索</el-button>
						<el-button type="success" plain>结算</el-button>
						<el-input type="text"></el-input>
					</p>
				</div>
				<!-- 表格开始 -->
				<el-table :data="tableData" align="center" style="width: 100%">
					<el-table-column type="selection" width="30">
					</el-table-column>
					<el-table-column label="ID" type="index" width="40">
					</el-table-column>
					<el-table-column label="订单编号" width="100" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">A-10001</span>
						</template>
					</el-table-column>
					<el-table-column label="客户" width="80" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">乔欢</span>
						</template>
					</el-table-column>
					<el-table-column label="产品名称" width="120" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">民国学生服女</span>
						</template>
					</el-table-column>

					<el-table-column label="产品编号" width="130" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">BMG-0200072</span>
						</template>
					</el-table-column>
					<el-table-column label="联营商" width="150" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">北京造型影视公司</span>
						</template>
					</el-table-column>
					<el-table-column label="出租价格" width="90" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">200</span>
						</template>
					</el-table-column>
					<el-table-column label="折扣优惠" width="90" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">9</span>
						</template>
					</el-table-column>
					<el-table-column label="磨损价格" width="90" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">200</span>
						</template>
					</el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button type="warning" plain size="mini">维修</el-button>
							<el-button type="success" plain size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
							<el-button type="primary" plain size="mini" @click="handleWrite(scope.$index, scope.row)">修改</el-button>
							<el-button type="danger" plain size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

				<!-- 表格结束 -->
				<!-- 分页 开始 -->
				<div class="block">
					<el-pagination background layout="prev,pager,next" :total="30">
					</el-pagination>
					<p class="margin">
						<el-button type="primary" plain>点击生成磨损价格</el-button>
						<el-input type="text"></el-input>元
					</p>
				</div>
				<!-- 分页 结束 -->

			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				gridData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				dialogTableVisible: true,
				input: '',
				labelPosition: 'right',
				tableData: [{}],
				input10: '',
				options: [{
					value: '选项1',
					label: '常州影视公司'
				}, {
					value: '选项2',
					label: '山东影视公司'
				}],
				value: '',
			};
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleWrite(index, row) {
				console.log(index, row);
			}
		}
	}
</script>

<style scoped>
	.main {
		position: relative;
	}
	
	.el-dialog__wrapper {
		position: absolute;
		background: rgba(0, 0, 0, .1);
		height: 630px;
	}
	
	.el-input {
		width: 40%;
	}
	
	.rklb {
		border: solid 1px #ddd;
		border-radius: 4px;
	}
	
	.el-main {
		line-height: 40px !important;
	}
	
	.rklb_title {
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
	
	.rklb_content {
		padding: 20px;
	}
	
	.block {
		text-align: center;
		margin-top: 10px;
	}
	
	.el-table-column {
		text-align: center;
	}
	.margin{
		margin-top: 20px;
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
		padding-bottom: 20px;
	}
	
	.rklb_content_add p {
		margin-bottom: 15px;
		line-height: 24px;
		font-size: 14px;
		display: flex;
	}
	
	.el-input__inner,
	.el-input {
		width: 153px !important;
		margin-right: 3px;
	}
	
	.el-button {
		margin-left: 0 !important;
	}
	
	.ckfl_content_add .el-button:nth-child(4) {
		margin-right: 10px;
	}
	.qxlb .el-dialog__header {
		text-align: left !important;
	}


</style>