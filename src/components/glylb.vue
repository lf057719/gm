<template>
	<div class="content">
		<div class="rklb">
			<div class="rklb_title">
				员工列表
			</div>
			<div class="rklb_content">
				<div class="ckfl_content_add">
					<p>
						<el-button type="danger" plain>批量删除</el-button>
						<el-button>所属部门</el-button>
						<el-button>所属岗位</el-button>
						<el-input placeholder="用户名，手机号" v-model="input10" clearable>
						</el-input>
						<el-button type="primary" plain>搜索</el-button>
						<el-button type="primary" plain style="margin-left: 140px;"><i class="el-icon-plus"></i>添加部门</el-button>
						<el-button type="primary" plain><i class="el-icon-plus"></i>添加岗位</el-button>
						<el-button type="primary" plain><i class="el-icon-plus"></i>添加用户</el-button>
					</p>
				</div>
				<!-- 表格开始 -->
				<el-table :data="tableData" align="center" style="width: 100%">
					<el-table-column type="selection" width="30">
					</el-table-column>
					<el-table-column label="用户名" width="90" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.name }}</span>
						</template>
					</el-table-column>

					<el-table-column label="性别" width="90" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.sex }}</span>
						</template>
					</el-table-column>
					<el-table-column label="所属部门" width="120" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">销售部</span>
						</template>
					</el-table-column>
					<el-table-column label="所属岗位" width="150" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">销售部-客户经理</span>
						</template>
					</el-table-column>
					<el-table-column label="手机号" width="150" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">13787021401</span>
						</template>
					</el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button type="warning" plain size="mini" @click="handleEdit(scope.$index, scope.row)">启用</el-button>
							<el-button type="warning" plain size="mini" @click="handleEdit(scope.$index, scope.row)">关闭</el-button>
							<el-button type="success" plain size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
							<el-button type="primary" plain size="mini" @click="handleWrite(scope.$index, scope.row)">编辑</el-button>
							<el-button type="danger" plain size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

				<!-- 表格结束 -->
				<!-- 分页 开始 -->
				<div class="block">
					<el-pagination background layout="prev,pager,next" :total="30">
					</el-pagination>
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
				tableData: [{
					name:'zgw',
					sex:'男'
				},{
					name:'wtt',
					sex:'女'
				},{
					name:'zy',
					sex:'女'
				},{
					name:'sbz',
					sex:'女'
				},{
					name:'tjy',
					sex:'男'
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
		margin-left: 20px !important;
		margin-right: 3px;
	}
</style>