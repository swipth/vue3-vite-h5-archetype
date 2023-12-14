import router from "./index.js";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { versionCheck } from "../api/version";

NProgress.configure({ showSpinner: false });
router.beforeEach(() => {
  NProgress.start();
  if (import.meta.env.PROD) {
    versionCheck();
  }
  return true;
});
router.afterEach(() => {
  NProgress.done();
  return true;
});
