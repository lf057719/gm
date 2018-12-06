<template>
	<div class="content">
		<div class="head">
			<i class="el-icon-edit"></i>权限设置
		</div>
		<div class="ckfl_content">
			<div class="ckfl_content_add">
				<p>
					<el-button type="danger" plain>批量删除</el-button>
					<el-button type="primary" plain>新增</el-button>
					<el-input placeholder="输入标题" v-model="input10" clearable>
					</el-input>
					<el-button type="primary" plain>搜索</el-button>
				</p>
			</div>
			<!-- 表格开始 -->
			<el-table :data="tableData" align="center" style="width: 100%">
				<el-table-column type="selection" width="55" align="center">
				</el-table-column>
				<el-table-column label="权限名称" width="180" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.name }}</span>
					</template>
				</el-table-column>

				<el-table-column label="排序" width="180" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.idx }}</span>
					</template>
				</el-table-column>
				<el-table-column label="操作" align="center">
					<template slot-scope="scope">
						<el-button type="success" plain size="mini" @click="handleEdit(scope.$index, scope.row)">详细功能</el-button>
						<el-button type="primary" plain size="mini" @click="handleWrite(scope.$index, scope.row)">修改</el-button>
						<el-button type="danger" plain size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>

			<!-- 表格结束 -->
			<!-- 分页 开始 -->
			<div class="block">
				<el-pagination layout="prev, pager, next" :total="50">
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
				tableData: [{
					idx: 1,
					name: '仓库分类'
				}, {
					idx: 2,
					name: '出租列表'
				}, {
					idx: 3,
					name: '入库添加'
				}, {
					idx: 4,
					name: '出租订单管理'
				}, {
					idx: 5,
					name: '销售订单管理'
				}, {
					idx: 6,
					name: '联营商管理'
				}],
				input10: ''
			}
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
	.ckfl_content {
		padding: 20px;
	}
	
	.ckfl_content_tit {
		height: 36px;
		border-bottom: solid 1px #ddd;
	}
	
	.ckfl_content_tit ul {
		padding-left: 20px;
		display: flex;
	}
	
	.ckfl_content_tit ul li {
		color: #333;
		padding: 8px 20px;
		font-size: 13px;
		border: solid 1px #ddd;
		line-height: 20px;
		border-bottom: none;
		border-radius: 4px 4px 0 0;
		background: #ffffff;
		z-index: 2;
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
	.block{
		width: 300px;
		margin: 20px auto;
	}
</style>