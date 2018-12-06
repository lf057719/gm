<template>
	<div class="cwgl">
		<div class="ckfl_title">
			账号明细
		</div>
		<div class="ckfl_content_tit">
			<ul>
				<li class="ckfl_content_tit_lis active" v-focus="[tableData,2]" @click="btns(1)">收入</li>
				<li v-focus="[tableData2,0]" @click="btns(0)">支出</li>
			</ul>
		</div>
		<div class="ckfl_content">

			<div class="ckfl_content_add">
				<p>
					<el-button type="danger" plain>批量删除</el-button>
					<el-input placeholder="输入客户名称" v-model="input10" clearable>
					</el-input>
					<span style="width:120px;margin-right:5px;">
                                <el-select v-model="region">
                                    <el-option label="选择方式" value="选择方式"></el-option>
                                    <el-option label="现金" value="现金"></el-option>
                                    <el-option label="微信" value="微信"></el-option>
                                    <el-option label="支付宝" value="支付宝"></el-option>
                                    <el-option label="银行卡" value="银行卡"></el-option>
                                </el-select>
                            </span>
					<el-button type="primary" plain>搜索</el-button>
				</p>
			</div>
			<!-- 表格开始 -->
			<div v-if="datakg">
				<el-table :data="tableData" align="center" style="width: 100%">
					<el-table-column type="selection" width="55" align="center">
					</el-table-column>
					<el-table-column label="订单编号" width="180" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.idx }}</span>
						</template>
					</el-table-column>

					<el-table-column label="时间" width="220" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.time }}</span>
						</template>
					</el-table-column>
					<el-table-column label="支付方式" width="150" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.zffs }}</span>
						</template>
					</el-table-column>
					<el-table-column label="客户名称" width="150" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.khmc }}</span>
						</template>
					</el-table-column>
					<el-table-column label="收款金额" width="150" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.hkjr }}</span>
						</template>
					</el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button type="danger" plain size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

			</div>
			<div v-else>
				<el-table :data="tableData2" align="center" style="width: 100%">
					<el-table-column type="selection" width="55" align="center">
					</el-table-column>
					<el-table-column label="订单编号" width="180" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.idx }}</span>
						</template>
					</el-table-column>

					<el-table-column label="时间" width="220" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.time }}</span>
						</template>
					</el-table-column>
					<el-table-column label="支付方式" width="150" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.zffs }}</span>
						</template>
					</el-table-column>
					<el-table-column label="联营商名称" width="200" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.khmc }}</span>
						</template>
					</el-table-column>
					<el-table-column label="支出金额" width="100" align="center">
						<template slot-scope="scope">
							<span style="margin-left: 10px">{{ scope.row.hkjr }}</span>
						</template>
					</el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button type="danger" plain size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

			</div>
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
					idx: 'M-13541961842',
					time: '2017-12-26 10:45:20',
					zffs: '支付宝',
					khmc: '刘元',
					hkjr: '30000'
				}, {
					idx: 'M-13541961842',
					time: '2017-12-26 10:45:20',
					zffs: '支付宝',
					khmc: '刘元',
					hkjr: '30000'
				}, {
					idx: 'M-13541961842',
					time: '2017-12-26 10:45:20',
					zffs: '支付宝',
					khmc: '刘元',
					hkjr: '30000'
				}],
				tableData2: [{
					idx: 'M-13541961842',
					time: '2017-12-26 10:45:20',
					zffs: '微信',
					khmc: '常州影视有限公司',
					hkjr: '26920'
				}, {
					idx: 'M-13541961842',
					time: '2017-12-26 10:45:20',
					zffs: '微信',
					khmc: '常州影视有限公司',
					hkjr: '26920'
				}, {
					idx: 'M-13541961842',
					time: '2017-12-26 10:45:20',
					zffs: '微信',
					khmc: '常州影视有限公司',
					hkjr: '26920'
				}],
				input10: '',
				datakg: true,
				region: '选择方式'
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
			},
			btns(a) {
				if(a) {
					this.datakg = true;
				} else {
					this.datakg = false;
				}
			}
		},
		directives: {
			focus(a, b) {
				a.onclick = function() {
					var idx = b.value[1];
					a.style.borderBottomColor = "transparent";
					var as = a.parentNode;
					var doms = as.childNodes;
					doms[idx].style.borderBottomColor = "#ddd"
				}
			}
		}
	}
</script>

<style scoped>
	.cwgl {
		border: solid 1px #ddd;
		border-radius: 4px;
	}
	
	.cwgl .el-main {
		line-height: 40px !important;
	}
	
	.cwgl .ckfl_title {
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
	
	.cwgl .ckfl_content {
		padding: 0 20px 20px;
	}
	
	.cwgl .ckfl_content_tit {
		padding-top: 20px;
		height: 36px;
		border-bottom: solid 1px #ddd;
	}
	.block{
		text-align: center;
		margin-top: 10px;
	}
	.cwgl .ckfl_content_tit ul {
		padding-left: 20px;
		display: flex;
	}
	
	.cwgl .ckfl_content_tit ul li {
		color: #333;
		padding: 8px 20px;
		margin-right: 5px;
		font-size: 13px;
		border: solid 1px #ddd;
		line-height: 20px;
		border-radius: 4px 4px 0 0;
		background: #ffffff;
		z-index: 2;
		position: relative;
		top: -1px;
	}
	
	.cwgl .ckfl_content_tit ul .active {
		border-bottom-color: transparent;
	}
	
	.cwgl .el-table-column {
		text-align: center;
	}
	
	.cwgl th,
	tr {
		text-align: center !important;
	}
	
	.cwgl .el-table,
	.el-table td,
	.el-table th {
		text-align: center !important;
	}
	
	.cwgl .el-table .cell {
		display: flex;
	}
	
	.cwgl .ckfl_content_add {
		padding: 25px 10px 10px;
	}
	
	.cwgl .ckfl_content_add p {
		margin-bottom: 15px;
		line-height: 24px;
		font-size: 14px;
		display: flex;
	}
	
	.cwgl .el-input__inner,
	.el-input {
		width: 153px !important;
		margin-left: 20px !important;
		margin-right: 3px;
	}
</style>