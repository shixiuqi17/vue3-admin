<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto "> <EMenu /></el-aside>
      <el-container>
        <el-header>
          <Navbar />
          <HistoryNav />
        </el-header>
        <el-main>
          <router-view #default="{ Component }">
            <transition
              enter-active-class="animate__animated animate__fadeInRight"
              leave-active-class="animate__animated animate__fadeOutLeft"
            >
              <component :is="Component"></component>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import EMenu from "@/components/layouts/Menu.vue";
import Navbar from "@/components/layouts/Navbar.vue";
import HistoryNav from "@/components/layouts/HistoryNav.vue";
</script>

<style lang="scss" scoped>
.el-main {
  background-color: #f5f5f5;
}
.el-header {
  height: auto;
  padding: 0;
}
.el-main {
  padding: 10px;
}
</style>
