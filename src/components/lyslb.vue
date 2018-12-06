<template>
	<div class="content">
		<div class="head">
			<i class="el-icon-edit"></i>联营商列表
		</div>
		<div class="ckfl_content">
			<div class="ckfl_content_add">
				<p>
					<el-button type="primary" plain>新增</el-button>
					<el-button type="danger" plain>批量删除</el-button>
					<el-input placeholder="输入联营商名称" v-model="input10" clearable>
					</el-input>
					<el-select v-model="value" placeholder="请选择联营商属性">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-button type="primary" plain>搜索</el-button>
				</p>
			</div>
			<!-- 表格开始 -->
			<el-table :data="tableData" align="center" style="width: 100%">
				<el-table-column type="selection" width="55" align="center">
				</el-table-column>
				<el-table-column label="ID" type="index" width="50" align="center">
				</el-table-column>
				<el-table-column label="联营商名称" width="150" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.doc }}</span>
					</template>
				</el-table-column>
				<el-table-column label="属性" width="130" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.type }}</span>
					</template>
				</el-table-column>
				<el-table-column label="负责人" width="130" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.name }}</span>
					</template>
				</el-table-column>
				<el-table-column label="性别" width="130" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.sex }}</span>
					</template>
				</el-table-column>
				<el-table-column label="职位" width="130" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.job }}</span>
					</template>
				</el-table-column>
				<el-table-column label="产品" width="130" align="center">
					<template slot-scope="scope">
						<span style="margin-left: 10px;color: #0ae;">查看全部</span>
					</template>
				</el-table-column>
				<el-table-column label="操作" align="center">
					<template slot-scope="scope">
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
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					name: '王媛',
					sex: '女',
					job: '采购部经理',
					doc:'常州影视公司',
					type:'公司'
				}, {
					name: '乔东',
					sex: '女',
					job: '采购部员工',
					doc:'北京影视公司',
					type:'公司'
				}, {
					name: '李旭',
					sex: '男',
					job: '采购部主管',
					doc:'华谊兄弟',
					type:'公司'
				}, {
					name: '王晓倩',
					sex: '女',
					job: '采购部员工',
					doc:'杨幂工作室',
					type:'个体'
				}],
				options: [{
					value: '选项1',
					label: '公司'
				}, {
					value: '选项2',
					label: '个体'
				}],
				value: '',
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
		padding: 10px 10px 10px;
		border-bottom: 1px solid #ddd;
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
	
	.block {
		width: 300px;
		margin: 20px auto;
	}
</style>