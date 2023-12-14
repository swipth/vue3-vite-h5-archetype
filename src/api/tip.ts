import {TranslateResult} from "vue-i18n";
import {showDialog, showNotify} from "vant";

export const showMessage = (content: string, type = "error") => {
  if (type == "error")
    showNotify({message: content, type: "danger"})
  showNotify({message: content, type: "success"})
}
export const showErrorModal = (content: string | TranslateResult) => {
  showDialog({message: content}).then(()=> {})
}

