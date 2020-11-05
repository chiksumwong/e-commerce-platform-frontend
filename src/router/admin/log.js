import AccessLog from "@/views/AdminPanel/SystemLog/AccessLog";
import AuditLog from "@/views/AdminPanel/SystemLog/AuditLog";
import SyncLog from "@/views/AdminPanel/SystemLog/SyncLog";
import ActionLog from "@/views/AdminPanel/SystemLog/ActionLog";

export default [
  {
    path: "access_log",
    component: AccessLog,
    meta: {
      authorize: ["Admin"]
    }
  },
  {
    path: "audit_log",
    component: AuditLog,
    meta: {
      authorize: ["Admin"]
    }
  },
  {
    path: "action_log",
    component: ActionLog,
    meta: {
      authorize: ["Admin"]
    }
  }
];
