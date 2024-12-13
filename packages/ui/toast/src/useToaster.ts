import { useSyncExternalStore } from "react";
import { toastStore } from "./store";

export const useToaster = () => {
  const toastList = useSyncExternalStore(toastStore.subscribe, toastStore.getToastList);

  return {
    toastList,
    addToast: toastStore.addToast,
    removeToast: toastStore.removeToast,
  };
};
