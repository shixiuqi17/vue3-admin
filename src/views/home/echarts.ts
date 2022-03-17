export const echart1 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      barWidth: "60%",
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};
export const echart2 = {
  legend: {
    top: "bottom"
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: "Nightingale Chart",
      type: "pie",
      radius: [50, 250],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: "rose 1" },
        { value: 38, name: "rose 2" },
        { value: 32, name: "rose 3" },
        { value: 30, name: "rose 4" },
        { value: 28, name: "rose 5" },
        { value: 26, name: "rose 6" },
        { value: 22, name: "rose 7" },
        { value: 18, name: "rose 8" }
      ]
    }
  ]
};
