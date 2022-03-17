<template>
  <div class="navbar">
    <i
      v-if="isCollapse"
      class="collapse iconfont icon-cebianlandanchu"
      @click="toggleSideBar"
    ></i>
    <i
      v-else
      class="collapse iconfont icon-cebianlanshousuo"
      @click="toggleSideBar"
    ></i>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="nav-right">
        <!-- 双语切换 -->
        <div class="translate">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="iconfont icon-translate"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  @click="changeLanguage('zh-CN')"
                  :disabled="locale === 'zh-CN'"
                  >{{ t("chinese") }}</el-dropdown-item
                >
                <el-dropdown-item
                  @click="changeLanguage('en-US')"
                  :disabled="locale === 'en-US'"
                  >{{ t("english") }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>

        <!-- 头像部分 -->
        <div class="avatar">
          <img src="@/assets/images/15919_100.gif" alt="" />
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>admin</span>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout">{{
                  t("logout")
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { ref } from "vue";
import emitter from "@/plugins/mitt";

const router = useRouter();

// 切换语言
const { locale, t } = useI18n();
const changeLanguage = (language: string) => {
  if (language === locale.value) return;
  locale.value = language;
  ElMessage({
    message: t("languageSwitchSucceeded"),
    type: "success"
  });
};

// 切换侧边栏;
let isCollapse = ref(false);
const toggleSideBar = () => {
  isCollapse.value = !isCollapse.value;
  emitter.emit("isCollapse", isCollapse.value);
};

// 退出登录
const logout = () => {
  localStorage.removeItem("token");
  router.push({ name: "login" });
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 15px 0 5px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  .collapse {
    margin-right: 20px;
    cursor: pointer;
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .translate {
    margin-right: 20px;
    cursor: pointer;
  }
  .nav-right {
    display: flex;
    align-items: center;
    .avatar {
      display: flex;
      align-items: center;
      :deep(.el-dropdown-link) {
        display: flex;
        align-items: center;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>
