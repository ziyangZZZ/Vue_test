<template>
  <div>
    <el-menu router >
      <el-menu-item v-for="route in routes" :key="route.name" :index="route.path">
        {{ route.name }}</el-menu-item>
      <!-- <el-menu-item index="/form">表单</el-menu-item>
      <el-menu-item index="/table">表格</el-menu-item>
      <el-menu-item index='/button'>button</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  methods: {
    // routerSelect(path) {
    //   this.$router.push(path);
    // },
  },
  computed: {
    routes() {
      const routes = this.$router.options.routes;
      const route = routes.find((ele) => ele.name === "主页");
      return route ? route.children : [];
    },
  },
  mounted() {
    // console.log("@", this.$router);
    // console.log("@", this.$route);
    //   this.$router.option.routes
    // console.log("$", this.routes);
    // console.log("routes");
  },
};
</script>

<style>
</style>