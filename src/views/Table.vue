<template>
  <div class="table">
    <el-table :data="tableData" border>
      <el-table-column label="水果" prop="name"></el-table-column>
      <el-table-column label="价格" prop="price">
        <template #default="{ row }">
          <span>{{ "¥" + row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <!-- <template #default="{ row, $index }"> 
          <el-button type="text" @click="deleteData($index)">删除</el-button>
          <el-button type="text" @click="priceIncrease(row)">提价</el-button>
        </template> -->
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChange"
      :page-sizes="[2, 3, 4, 5]"
      :current-page="currentPage"
      @current-change="currentPageChange"
      :page-size="pageSize"
      layout="prev, pager, next,sizes"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
const data = [
  {
    name: "苹果",
    price: 3.5,
  },
  {
    name: "栗子",
    price: 35,
  },
  {
    name: "香蕉",
    price: 7,
  },
  {
    name: "葡萄",
    price: 7,
  },
  {
    name: "菠萝",
    price: 7,
  },
  {
    name: "芒果",
    price: 7,
  },
  {
    name: "梨",
    price: 7,
  },
];
// import BreadCrumb from './BreadCrumb.vue'
export default {
  name: "Table",
  data() {
    return {
      tableData: [],
      total: data.length,
      pageSize: 5,
      currentPage: 1,
    };
  },
  methods: {
    getTableData() {   // 计算尽可能以data数据作为变量 一个方法尽可能只做一件事
      let start = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;
      this.tableData = data.filter(function (ele, index) {
        return index >= start && index < end;
      });
    },
    currentPageChange(num) {
      this.currentPage = num;
      this.getTableData();
    },
    sizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getTableData();
    },
  },
  mounted() {
    this.getTableData();
  },

  //   methods: {
  //     deleteData(index) {
  //       this.tableData.splice(index, 1);
  //     },
  //     priceIncrease(row) {
  //       row.price = row.price + 1;
  //     },
  //   },
};
</script>

<style>
</style>