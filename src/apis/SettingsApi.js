import Api from "./Api";

export default {
  GetDviSetup() {
    return Api.get("DviSetup");
  },
  GetCrossSetup() {
    return Api.get("CrossSetup");
  },
  GetCcySetup() {
    return Api.get("CcySetup");
  },
  GetOptCutSettings() {
    return Api.get("OptCutSettings");
  },
  GetTimeZoneInfos() {
    return Api.get("GetTimeZoneInfos");
  },
  UpdateDviDets(body) {
    return Api.post("UpdateDviDets", body);
  },
  UpdateCrossDets(body) {
    return Api.post("UpdateCrossDets", body);
  },
  UpdateCcyDets(body) {
    return Api.post("UpdateCcyDets", body);
  },
  UpdateOptionCut(body) {
    return Api.post("UpdateOptionCut", body);
  },
  AddNewCcyPair(body) {
    return Api.post("AddNewCcyPair", body);
  },
  DeleteCcyPairData(body) {
    return Api.post("DeleteCcyPairData", body);
  },
  DeleteCcyData(body) {
    return Api.post("DeleteCcyData", body);
  },
  DeleteOptionCut(body) {
    return Api.post("DeleteOptionCut", body);
  },
  MirrorCrossDets(body) {
    return Api.post("MirrorCrossDets", body);
  },
  GetMultsAndSpreads(body) {
    return Api.post("GetMultsAndSpreads", body);
  },
  GetCrossList() {
    return Api.get("GetCrossList");
  },
  GetLog() {
    return Api.get("GetLog");
  },
  getBidOfferSpreadModel() {
    return Api.get("GetBidOfferSpreadModel");
  },
  updateCurrencyPairTiers(body) {
    return Api.post("UpdateCurrencyPairTiers", body);
  },
  updateTierMultipliers(body) {
    return Api.post("UpdateTierMultipliers", body);
  },
  updateSpreadsByDelta(body) {
    return Api.post("UpdateSpreadsByDelta", body);
  },
};
