import Vue from "vue";

const AdminAPI = {
  listAdmin: () => Vue.prototype.$axios.get("admin/"),
  createAdmin: payload => Vue.prototype.$axios.post("create_admin/", payload),
  updateStatus: payload =>
    Vue.prototype.$axios.post("update_admin_status/", payload),
  updateAccount: payload =>
    Vue.prototype.$axios.post("update_admin_account/", payload),
  updatePassword: payload =>
    Vue.prototype.$axios.post("update_admin_password/", payload)
};

export default AdminAPI;
