<template>
  <div class="home-page">
    <el-card
      class="box-card"
      shadow="hover"
      v-for="(item, index) in cards"
      :key="index"
    >
      <template #header>
        <div class="card-header">
          <span class="title">{{ item.title }}</span>
          <el-tag type="danger" size="small" effect="dark">月</el-tag>
        </div>
      </template>
      <div class="card-body">
        <div class="first">
          <div class="count">{{ item.count }}</div>
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#${item.icon}`"></use>
          </svg>
        </div>
        <div class="second">
          <div class="people">{{ item.totalTitle }}</div>
          <div class="total">{{ item.total }}</div>
        </div>
      </div>
    </el-card>
    <div class="echarts">
      <div>
        <div class="echart" id="echart1"></div>
      </div>
      <div>
        <div class="echart" id="echart2"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from "vue";
import { echart1, echart2 } from "./echarts";

interface ICard {
  title: string;
  count: string;
  icon: string;
  totalTitle: string;
  total: number;
}

const cards = ref<ICard[]>([
  {
    title: "总人数",
    count: "23343",
    icon: "icon-zhuce",
    total: 3892982,
    totalTitle: "总人数"
  },
  {
    title: "销售额",
    count: "$18393",
    icon: "icon-touzi-03",
    total: 9387382,
    totalTitle: "总销售额"
  },
  {
    title: "订单数",
    count: "3803",
    icon: "icon-dingdan",
    total: 83493,
    totalTitle: "总订单数"
  },
  {
    title: "评论数",
    count: "8994",
    icon: "icon-liaoba",
    total: 48920,
    totalTitle: "总评论"
  }
]);
nextTick(() => {
  echarts.init(document.getElementById("echart1")).setOption(echart1);
  echarts.init(document.getElementById("echart2")).setOption(echart2);
});
</script>

<style lang="scss" scoped>
.home-page {
  padding: 0 10px 10px 0;
  display: flex;
  flex-wrap: wrap;
  .box-card {
    margin: 10px 0 0 10px;
    width: calc((100% - 50px) / 4);
    .card-header {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 16px;
      }
    }
    .card-body {
      .first,
      .second {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .first {
        margin-bottom: 20px;
        .count {
          font-size: 24px;
        }
        .icon {
          font-size: 44px;
        }
      }
      .second {
        .people,
        .total {
          font-size: 14px;
        }
      }
    }
  }
  .echarts {
    margin: 10px 0 0 10px;
    padding: 25px 0 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .echart {
      width: 800px;
      height: 500px;
    }
  }
}
</style>
