<template>
  <div v-if="apiDataReturned">
    <v-card flat>
      <v-toolbar dense class="mb-2" dark color="#385F73">
        <v-toolbar-title>DVI SETTINGS</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn x-small fab color="pink">
          <PopUpModal
            :inputData="this.$store.state.crossList"
            :icon="'mdi-expand-all'"
            :color="'white'"
            :large="false"
            :title="'MIRROR CROSS'"
            v-on:selection="OpenDialog"
          />
        </v-btn>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="data"
        sort-by="Cross"
        dense
        disable-pagination
        hide-default-footer
      >
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="1000px" overlay-opacity="0.8">
            <v-card>
              <v-card-title>
                <span class="title">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="2"
                      v-for="key in keys"
                      :key="key"
                    >
                      <v-text-field
                        v-model="editedItem[key]"
                        :label="key"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save(editedItem)"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot-->
        <template v-slot:item.mults="{ item }">
          <v-icon small @click="viewMultsAndSpreads(item)">mdi-eye</v-icon>
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot-->
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item)"
            >mdi-delete</v-icon
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog
      v-model="showMarketTable"
      :max-width="marketTableWidth"
      overlay-opacity="0.8"
    >
      <v-card>
        <MarketDataTable
          v-if="showMarketTable"
          :crossName="selectedCross"
          :title="marketTableTitle"
          :incomingData="marketData"
        />
      </v-card>
    </v-dialog>
    <v-dialog v-model="showDialogAddNewCross" overlay-opacity="0.8">
      <v-card>
        <v-card-title>
          <span class="title">{{ FormTitleAddNewCross }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="2" v-for="key in dviKeys" :key="key">
                <v-text-field
                  v-model="dviEdited[key]"
                  :label="key"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider class="mt-5 mb-10" />
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="2"
                v-for="key in crossKeys"
                :key="key"
              >
                <v-text-field
                  v-model="crossEdited[key]"
                  :label="key"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="CloseNewCrossDialog"
            >Cancel</v-btn
          >
          <v-btn
            color="blue darken-1"
            text
            @click="SaveNewCross(dviEdited, crossEdited)"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SettingsApi from "@/apis/SettingsApi.js";
import MarketDataTable from "@/components/marketData/MarketDataTable.vue";
import PopUpModal from "@/components/common/PopUpModal.vue";

export default {
  name: "DviSetup",
  components: { MarketDataTable, PopUpModal },
  data: () => ({
    dialog: false,
    showDialogAddNewCross: false,
    keys: [],
    headers: [],
    data: [],
    editedItem: {},
    showMarketTable: false,
    marketData: [],
    marketTableTitle: "",
    marketTableWidth: "",
    selectedCross: "",
    apiDataReturned: false,
    dviKeys: [],
    crossKeys: [],
    dviEdited: {},
    crossEdited: {},
    mirroredCross: "",
  }),

  computed: {
    formTitle() {
      return `UPDATE ${this.editedItem.Cross}`;
    },
    FormTitleAddNewCross() {
      return `Mirror ${this.mirroredCross}`;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$store.dispatch("refreshCrossList");
      SettingsApi.GetDviSetup()
        .then((response) => {
          this.data = JSON.parse(response.data.dviSetup);
          let headersNew = [];
          this.keys = Object.keys(this.data[0]);
          this.keys.forEach(function (val) {
            headersNew.push({ text: val, value: val, align: "center" });
          });
          headersNew.push({
            text: "Mults",
            value: "mults",
            align: "center",
          });

          headersNew.push({
            text: "Actions",
            value: "actions",
            align: "center",
          });

          this.headers = headersNew;
          this.apiDataReturned = true;
        })
        .catch((err) => {
          this.snackbarMessage = ` Error: ${err}`;
          this.snackbar = true;
        });
    },
    OpenDialog(cross) {
      SettingsApi.MirrorCrossDets({ Cross: cross })
        .then((response) => {
          const dvidata = JSON.parse(response.data.dviSetup);
          const crossdata = JSON.parse(response.data.crossSetup);
          delete crossdata.Cross;
          this.dviKeys = Object.keys(dvidata);
          this.crossKeys = Object.keys(crossdata);
          this.dviEdited = dvidata;
          this.mirroredCross = this.dviEdited.Cross;
          this.dviEdited.Cross = "";
          this.crossEdited = crossdata;

          this.showDialogAddNewCross = true;
        })
        .catch((err) => {
          if (err.toString().includes("403") === true) {
            err = "Admin Rights Required";
          }
          this.$store.dispatch("setSnackbar", {
            text: ` ${err}`,
            centered: true,
          });
        });
    },

    editItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      confirm(`Are you sure you want to delete ${item.Cross}?`) &&
        SettingsApi.DeleteCcyPairData({ Cross: item.Cross })
          .then((response) => {
            this.$store.dispatch("setSnackbar", {
              text: `${item.Cross} deleted succesfully.`,
              centered: true,
            });

            this.initialize();
            this.$emit("ccyPairDeleted", true);
          })
          .catch((err) => {
            if (err.toString().includes("403") === true) {
              err = "Admin Rights Required";
            }
            this.$store.dispatch("setSnackbar", {
              text: `Delete unsucessful.  ${err}`,
              centered: true,
            });
          });
    },
    viewMultsAndSpreads(item) {
      const cross = item.Cross;
      SettingsApi.GetMultsAndSpreads({
        UserName: this.$store.state.currentUser,
        Cross: item.Cross,
      })
        .then((response) => {
          const mults = JSON.parse(response.data.multsAndSpreads);

          this.marketData = mults.map((item) => {
            item.RrMult = item.RrMult.toFixed(2);
            item.FlyMultSmile = item.FlyMultSmile.toFixed(2);
            return item;
          });

          this.selectedCross = cross;
          this.marketTableTitle = "MULTIPLERS AND SPREADS";
          this.marketTableWidth = "1000px";
          this.showMarketTable = true;
        })
        .catch((err) => {
          this.snackbarMessage = ` Error: ${err}`;
          this.snackbar = true;
        });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {});
    },

    save(item) {
      this.$store.dispatch("setSnackbar", {
        text: `Processing ${item.Cross} DVI update ...`,
        centered: true,
        timeout: 2500,
      });
      SettingsApi.UpdateDviDets({
        DviInputsUI: item,
        UserName: this.$store.state.currentUser,
      })
        .then((response) => {
          this.$store.dispatch("setSnackbar", {
            text: `${item.Cross} updated succesfully.`,
            centered: true,
          });

          this.initialize();
        })
        .catch((err) => {
          if (err.toString().includes("403") === true) {
            err = "Admin Rights Required";
          }
          this.$store.dispatch("setSnackbar", {
            text: `Update unsucessful.  ${err}`,
            centered: true,
          });
        });

      this.close();
    },
    CloseNewCrossDialog() {
      this.showDialogAddNewCross = false;
      this.$nextTick(() => {});
    },

    async SaveNewCross(dvidata, crossdata) {
      crossdata.Cross = dvidata.Cross;

      try {
        let response = await SettingsApi.AddNewCcyPair({
          DviInputsUI: dvidata,
          CrossDetsUI: crossdata,
        });
        this.$store.dispatch("refreshCrossList");
        this.$store.dispatch("setSnackbar", {
          text: ` ${dvidata.Cross} updated succesfully.`,
          centered: true,
        });
        this.refreshChildren = !this.refreshChildren;
        this.initialize();
      } catch (err) {
        if (err.toString().includes("403") === true) {
          err = "Admin Rights Required";
        }
        this.$store.dispatch("setSnackbar", {
          text: `Update unsucessful.  ${err}`,
          centered: true,
        });
      }

      this.CloseNewCrossDialog();
    },
  },
};
</script>


