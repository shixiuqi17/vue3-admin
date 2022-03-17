<template>
  <div class="error-404">
    <div class="text">
      <h3>404</h3>
      <h4>Sorry we couldn't find this page.</h4>
      <div>
        But dont worry, you can find plenty of other things on our homepage.
      </div>
      <el-button type="primary" round @click="reset"
        >{{ countDown }}s {{ $t("backHomePage") }}</el-button
      >
    </div>
    <Cat />
  </div>
</template>

<script lang="ts" setup>
import Cat from "@/components/svg/Cat.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

// 倒计时返回首页
let countDown = ref(5);
let timer: any = null;
const router = useRouter();

timer = setInterval(() => {
  countDown.value--;
}, 1000);

watch(countDown, (val) => {
  if (val < 1) reset();
});

const reset = () => {
  clearInterval(timer);
  router.push("/");
};
</script>

<style lang="scss" scoped>
.error-404 {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 15% 0 0 10%;
  display: flex;
  background-color: rgba(237, 242, 247, 0.7);
  .text {
    h3 {
      margin: 0;
      color: rgba(74, 85, 104, 1);
      font-size: 42px;
    }
    h4 {
      margin: 10px 0 10px;
      color: #4a5568;
      font-size: 32px;
      font-weight: 400;
    }
    & > div {
      color: rgba(74, 85, 104, 0.7);
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
}
</style>
