<template>
  <div class="login-container">
    <div class="login-box">
      <el-form :model="user" class="user-form" ref="userData">
        <el-form-item
          label="账号"
          :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
          prop="account"
        >
          <el-input
            v-model="user.account"
            size="small"
            label-width="100px"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          :rules="[{ required: true, message: '密码不能为空', trigger: 'blur' }]"
          prop="password"
        >
          <el-input
            v-model="user.password"
            size="small"
            label-width="100px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="user.checked">记住我的信息</el-checkbox>
        </el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        account: "",
        password: "",
        checked: true,
      },
    };
  },
  methods :{
    handleLogin(){
      const p =this.$refs.userData.validate()
      p.then(()=>{
        // this.$message({message: '登录成功！', type :'success'})
        // this.$message.success({message: '登录成功！'})
        this.$message('登录成功！')
      },()=>{
        this.$message({message:'登录失败！'})
        this.$message('登录失败！')
        this.$message.error('登录失败！')
      })
    }
  }
};
</script>

<style scoped>
.login-container {
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  background-color: #304156;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container .login-box {
  width: 400px;
  height: 280px;
  background-color: white;
  padding: 50px;
  /* display: flex;
    justify-content: center; */
}
</style>

