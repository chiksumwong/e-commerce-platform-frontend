import Vue from "vue";

const LogAPI = {
  listAccessLog: () => Vue.prototype.$axios.get("log/access/"),
  listAuditLog: () => Vue.prototype.$axios.get("log/audit/"),
};

export default LogAPI;
