<template>
  <div id="app">
    <canvas id="vols_low" width="1000" height="400"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, rmin: 1, rmax: 1, min: 0, max: 100 };

export default {
  props: {
    inputSeries1: { type: Array },
    labels: { type: Array },
    terms: { type: Array }
  },
  data() {
    return {
      ChartData: {
        type: "bar",

        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.inputSeries1[0],
              label: this.terms[0],
              backgroundColor: "#071013",
              borderWidth: 2
            },
            {
              data: this.inputSeries1[1],
              label: this.terms[1],
              backgroundColor: "#23B5D3",
              borderWidth: 2
            },
            {
              data: this.inputSeries1[2],
              label: this.terms[2],
              backgroundColor: "#75ABBC",
              borderWidth: 2
            },
            {
              data: this.inputSeries1[3],
              label: this.terms[3],
              backgroundColor: "#A2AEBB",
              borderWidth: 2
            },
            {
              data: this.inputSeries1[4],
              label: this.terms[4],
              backgroundColor: "#DFE0E2",
              borderWidth: 2
            },
            {
              data: this.inputSeries1[5],
              label: this.terms[5],
              backgroundColor: "#DDD8C4",
              borderWidth: 2
            },
            {
              data: this.inputSeries1[6],
              label: this.terms[6],
              backgroundColor: "#A3C9A8",
              borderWidth: 2
            },
            {
              data: this.inputSeries1[7],
              label: this.terms[7],
              backgroundColor: "#84B59F",
              borderWidth: 2
            },
            {
              data: this.inputSeries1[8],
              label: this.terms[8],
              backgroundColor: "#69A297",
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top"
            },
            title: {
              display: true,
              text: "Chart.js Scatter Chart"
            }
          }
        }
      }
    };
  },
  computed: {},
  methods: {
    dev() {
      console.log(this.ChartData);
    },
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },

  mounted() {
    this.createChart("vols_low", this.ChartData);
  }
};
</script>
