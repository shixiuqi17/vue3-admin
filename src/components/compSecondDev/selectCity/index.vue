<template>
  <el-popover
    v-model:visible="visible"
    trigger="click"
    placement="bottom-start"
    :width="400"
  >
    <template #reference>
      <div class="result" @click="visible = !visible">
        <span>{{ result }}</span>
        <el-icon :class="{ rotate: visible }">
          <component :is="ArrowDown"></component>
        </el-icon>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="4"
          ><el-radio-group v-model="radioValue">
            <el-radio-button label="城市"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="18">
          <el-select
            v-model="selectValue"
            filterable
            :placeholder="$t('selectCity')"
            :filter-method="filterMethod"
            @change="citySelectChange"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-col>
      </el-row>

      <div class="city">
        <div
          v-for="(item, index) in Object.keys(cities)"
          :key="item"
          :class="['city-item', { active: currentChatIndex === index }]"
          @click="chooseChat(item, index)"
        >
          {{ item }}
        </div>
      </div>
      <el-scrollbar max-height="300px">
        <template v-for="(key, value) in cities" :key="value">
          <el-row :id="value">
            <el-col :span="2">{{ value }}</el-col>
            <el-col :span="22" class="city-name">
              <div class="city-name-item" v-for="item in key" :key="item.id">
                <div @click="chooseCityItem(item)">{{ item.name }}</div>
              </div>
            </el-col>
          </el-row>
        </template>
      </el-scrollbar>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import citiesData from "./data/city";
import { CityItem } from "./data/types";

const emits = defineEmits(["choose"]);

let result = ref("请选择"); //选择结果
let visible = ref(false); //弹出层显示
let radioValue = ref("城市");
let selectValue = ref(""); //下拉框搜索
let cities = ref(citiesData.cities); // 所有城市数据
let allCityNames = ref([] as CityItem[]);

// 处理筛选框数据
let options = ref<CityItem[]>([]);
onMounted(() => {
  Object.values(cities.value).map((item) => {
    item.forEach((item1) => {
      options.value.push(item1);
    });
  });
  allCityNames.value = options.value;
});

// 过滤筛选框的值
const filterMethod = (val: string) => {
  if (val !== "") {
    options.value = allCityNames.value.filter((item) => {
      return item.name.includes(val) || item.spell.includes(val);
    });
  }
};

const citySelectChange = (val: string) => {
  if (!val) return;
  let city = allCityNames.value.find((item) => item.name === val);
  chooseCityItem(city as CityItem);
};

// 选择字母
let currentChatIndex = ref(0);
const chooseChat = (item: string, index: number) => {
  let el = document.getElementById(item);
  if (el) {
    el.scrollIntoView();
    currentChatIndex.value = index;
  }
};

// 选择的城市
const chooseCityItem = (item: CityItem) => {
  result.value = item.name;
  selectValue.value = item.name;
  visible.value = false;
  emits("choose", item);
};
</script>

<style lang="scss" scoped>
.result {
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  .rotate {
    transform: rotate(180deg);
  }
  .el-icon {
    margin-left: 5px;
    transition: all 0.3s ease;
  }
}

.container {
  .active {
    color: $myColor;
  }
  .city {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 15px;
    .city-item {
      margin: 10px 8px 0 0;
      padding: 5px;
      border: 1px solid #eee;
      cursor: pointer;
      &:hover {
        color: $myColor;
      }
    }
  }
  .city-name {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
    .city-name-item {
      margin: 0 6px 6px 0;
      cursor: pointer;
      &:hover {
        color: $myColor;
      }
    }
  }
}
</style>
