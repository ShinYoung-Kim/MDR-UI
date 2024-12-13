type Id = string;

type ToastProps = {
  id: Id;
  title?: string;
  description?: string;
};

type Listener = () => void;

export const toastStore = (() => {
  let toastList: ToastProps[] = [];
  let listeners: Listener[] = [];

  const subscribe = (listener: Listener) => {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const notify = () => {
    for (const listener of listeners) {
      listener();
    }
  };

  const addToast = (toast: ToastProps) => {
    toastList = [...toastList, toast];
    notify();
  };

  const removeToast = (id: Id) => {
    toastList = toastList.filter((toast) => toast.id !== id);
    notify();
  };

  const getToastList = () => toastList;

  return {
    subscribe,
    notify,
    addToast,
    removeToast,
    getToastList,
  };
})();
