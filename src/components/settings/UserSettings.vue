<template>
  <v-container fluid>
    <div class="d-flex flex-column">
      <v-select
        v-model="spotIface"
        :items="spotIfaces"
        label="Spot Interface"
      ></v-select>
      <v-select
        v-model="swapIface"
        :items="swapIfaces"
        label="Swaps Interface"
      ></v-select>
      <v-select
        v-model="baseRateIface"
        :items="baseRateIfaces"
        label="BaseRate Interface"
      ></v-select>
      <v-select
        v-model="ipvVolIface"
        :items="ipvVolIfaces"
        label="IpvVol Interface"
      ></v-select>
      <v-select
        v-model="timeZone"
        :items="timeZones"
        label="TimeZone"
        @change="updateTimeZone()"
      ></v-select>
      <v-select
        v-model="starterFxCross"
        :items="crossList"
        label="Starter Cross"
        @change="updateStarterFxCross()"
      ></v-select>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import MarketDataApi from "@/apis/MarketDataApi.js";
import SettingsApi from "@/apis/SettingsApi.js";
import UserPrefsApi from "@/apis/UserPrefsApi";

export default {
  async created() {
    try {
      await this.setAvailableServices();
      const tzinfo = await SettingsApi.GetTimeZoneInfos();
      this.timeZones = JSON.parse(tzinfo.data.tzInfo);
      this.timeZone = this.userTimeZone;
      this.starterFxCross = this.userPrefCross;
    } catch (error) {
      alert(error);
    }
  },
  data() {
    return {
      spotIfaces: [],
      swapIfaces: [],
      baseRateIfaces: [],
      ipvVolIfaces: [],
      timeZones: [],
      timeZone: "",
      starterFxCross: "",
      loaded: false,
    };
  },
  computed: {
    ...mapState({
      crossList: (state) => state.crossList,
      currentUser: (state) => state.currentUser,
      userTimeZone: (state) => state.userTimeZone,
      userPrefCross: (state) => state.userPrefCross,
      spotApi: (state) => state.spotApi,
      swapApi: (state) => state.swapApi,
      baseRateApi: (state) => state.baseRateApi,
      ipvVolApi: (state) => state.ipvVolApi,
    }),
    spotIface: {
      get() {
        return this.spotApi;
      },
      set(val) {
        this.updateSpotApi(val);
      },
    },
    swapIface: {
      get() {
        return this.swapApi;
      },
      set(val) {
        this.updateSwapApi(val);
      },
    },
    baseRateIface: {
      get() {
        return this.baseRateApi;
      },
      set(val) {
        this.updateBaseRateApi(val);
      },
    },
    ipvVolIface: {
      get() {
        return this.ipvVolApi;
      },
      set(val) {
        this.updateIpvVolApi(val);
      },
    },
  },
  methods: {
    async setAvailableServices() {
      try {
        let response = await UserPrefsApi.getAvailableServices();
        let services = JSON.parse(response.data.services);

        this.spotIfaces = services.Spot;
        this.swapIfaces = services.Swaps;
        this.baseRateIfaces = services.BaseRates;
        this.ipvVolIfaces = services.IpvVols;
      } catch (error) {
        console.log(error);
      }
    },
    async updateSpotApi(val) {
      await this.$store.dispatch("updateSpotApi", {
        UserName: this.$store.state.currentUser,
        SpotApi: val,
      });
    },
    async updateSwapApi(val) {
      await this.$store.dispatch("updateSwapApi", {
        UserName: this.$store.state.currentUser,
        SwapApi: val,
      });
    },
    async updateBaseRateApi(val) {
      await this.$store.dispatch("updateBaseRateApi", {
        UserName: this.$store.state.currentUser,
        BaseRateApi: val,
      });
    },
    async updateIpvVolApi(val) {
      await this.$store.dispatch("updateIpvVolApi", {
        UserName: this.$store.state.currentUser,
        IpvVolApi: val,
      });
    },
    async updateStarterFxCross() {
      try {
        await UserPrefsApi.updateUserStartFxCross({
          UserName: this.$store.state.currentUser,
          StarterFxCross: this.starterFxCross,
        });
        this.$store.dispatch("updateSingleUserPrefLocalStorage", {
          key: "StarterFxCross",
          value: this.starterFxCross,
        });

        this.$store.dispatch("setSnackbar", {
          text: `Starter Cross Updated To ${this.starterFxCross}`,
          bottom: true,
        });
      } catch (error) {
        alert(error);
      }
    },
    async updateTimeZone() {
      try {
        await UserPrefsApi.updateUserTimeZone({
          UserName: this.$store.state.currentUser,
          Timezone: this.timeZone,
        });

        this.$store.dispatch("updateSingleUserPrefLocalStorage", {
          key: "Timezone",
          value: this.timeZone,
        });
        this.$store.dispatch("setSnackbar", {
          text: `User TimeZone Changed To ${this.timeZone}`,
          bottom: true,
        });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style></style>
