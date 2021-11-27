<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item v-for="p in routes" :key="p.name">{{p.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  computed: {
    routes() {
      const routes = this.$router.options.routes;
      const route = routes.find((ele) => ele.name === "主页");
    },
  },
};
</script>

<style>
</style>