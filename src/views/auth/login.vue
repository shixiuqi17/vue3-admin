<template>
  <div class="login-container">
    <div class="login-form-wapper">
      <h1 class="hello">hello!</h1>
      <div class="login-form-title">{{ t("welcome") }}</div>
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
        <!-- 用户名 -->
        <el-form-item prop="name">
          <el-input
            :prefix-icon="User"
            v-model="loginForm.name"
            :placeholder="t('pleaseEnterUserName')"
            size="large"
            clearable
          ></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            :prefix-icon="Unlock"
            v-model="loginForm.password"
            :placeholder="t('pleaseEnterPassword')"
            size="large"
            show-password
            type="password"
            clearable
          ></el-input>
        </el-form-item>

        <!-- 提交 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm(loginFormRef)"
            size="large"
            >{{ t("submit") }}</el-button
          >
          <el-button @click="resetForm(loginFormRef)" size="large">{{
            t("reset")
          }}</el-button>
          <el-button @click="changeLanguage">切换语言</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";
import { Unlock, User } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";

type FormInstance = InstanceType<typeof ElForm>;

const loginFormRef = ref<FormInstance>();
const { locale, t } = useI18n();

// 定义表单
let loginForm = reactive({
  name: "",
  password: ""
});

const changeLanguage = () => {
  locale.value = locale.value == "zh-CN" ? "en-US" : "zh-CN";
  ElMessage({
    message: t("switchLanguageSucceeded"),
    type: "success"
  });
};

// 验证函数
const loginFormRules = reactive({
  name: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    {
      min: 3,
      max: 10,
      message: "用户名长度需在3-10个字符之间",
      trigger: "blur"
    }
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    {
      min: 3,
      max: 15,
      message: "密码长度需在3-15个字符之间",
      trigger: "blur"
    }
  ]
});

// 提交表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((vaild) => {
    if (!vaild) {
      return false;
    }
  });
};

// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped>
.login-container {
  position: fixed;
  background: url("@/assets/login_bg.jpg") no-repeat;
  width: 100vw;
  height: 100vh;
  .login-form-wapper {
    background: url("@/assets/login_form_bg.png") no-repeat;
    width: 400px;
    padding: 30px 30px 15px;
    position: absolute;
    right: 15%;
    top: 30%;

    :deep(.el-form-item__content) {
      margin-top: 15px;
    }
    .hello {
      font-size: 54px;
      font-weight: 500;
      color: #fff;
    }
    .login-form-title {
      margin-top: 29px;
      font-size: 26px;
      font-weight: 400;
      color: #fff;
    }
  }
}
</style>
