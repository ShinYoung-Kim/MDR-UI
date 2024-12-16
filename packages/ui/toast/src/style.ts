import { cva } from "class-variance-authority";

export const toasterStyle = cva("fixed flex flex-col gap-5", {
  variants: {
    position: {
      "top-left": "top-5 left-5",
      "top-center": "top-5 left-1/2 -translate-x-1/2",
      "top-right": "top-5 right-5",
      "middle-left": "top-1/2 -translate-y-1/2 left-5",
      "middle-center": "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
      "middle-right": "top-1/2 -translate-y-1/2 right-5",
      "bottom-left": "bottom-5 left-5",
      "bottom-center": "bottom-5 left-1/2 -translate-x-1/2",
      "bottom-right": "bottom-5 right-5",
    },
  },
});

export const toastRootStyle = cva("glass-xs", {
  variants: {
    type: {
      info: "bg-blue-200 backdrop-blur-none text-blue-500",
      success: "bg-green-200 backdrop-blur-none text-green-600",
      warning: "bg-yellow-200 backdrop-blur-none text-yellow-600",
      error: "bg-red-200 backdrop-blur-none text-red-500",
      default: "",
    },
  },
});
