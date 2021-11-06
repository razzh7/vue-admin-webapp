<template>
  <div id="login">
    <div class="login-container">
      <i class="avator"></i>
      <el-form
        class="login-form"
        label-width="80px"
        :model="loginInfo"
        :rules="rules"
      >
        <el-form-item label="账号" prop="user">
          <el-input
            prefix-icon="el-icon-s-custom"
            v-model="loginInfo.user"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            type="password"
            v-model="loginInfo.password"
          ></el-input>
        </el-form-item>
        <div class="item-button">
          <el-button type="primary" @click="Login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginInfo: { // 用户名和密码
        user: '',
        password: ''
      },
      rules: { // 表单验证
        user: [
            {require: true, message: '请输入账号', trigger: 'blur'},
            {min: 3, max: 8, message: '账号长度在3到8个字符', trigger: 'blur'}
        ],
        password: [
          {require: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 8, message: '密码长度在3到8个字符', trigger: 'blur'}
        ]
      }

    }
  },
  methods: {
    Login() {
      console.log(this.$store)
      this.$store.dispatch('user/_login',this.loginInfo).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    reset() {

    }
  },
  rules: {

  }
}
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background: #409eff;
}
.login-container {
  width: 700px;
  height: 400px;
  background: #fff;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;
  .avator {
    display: inline-block;
    width: 150px;
    height: 150px;
    background: url("https://portrait.gitee.com/uploads/avatars/user/2172/6517203_razzh_1606442093.png!avatar200") no-repeat;
    background-size: 100% 100%;
    position: relative;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .login-form {
    .item-button {
      text-align: center;
    }
  }
}
</style>