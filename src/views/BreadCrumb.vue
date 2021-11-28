<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item v-for="p in routes" :key="p.name">{{`/${p.name}`}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  computed: {
      routes(){
          const arr =  this.$route.matched.filter(function(ele, index){
            //   console.log('$',ele,index)
                return index != 0;
          })
          return arr;
      }
  },
//   mounted(){
//       console.log('@',this.$route);
      
//   }
};
</script>

<style>
</style>