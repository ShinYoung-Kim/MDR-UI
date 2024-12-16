import { forwardRef, PropsWithChildren } from "react";
import { toastRootStyle } from "./style";
import { cx } from "class-variance-authority";
import { ToastType } from "./type";

type ToastTitleProps = {
  title: string;
};

const Title = forwardRef<HTMLDivElement, ToastTitleProps>((props, ref) => {
  const { title } = props;
  return <div ref={ref}>{title}</div>;
});

Title.displayName = "ToastTitle";

type ToastDescriptionProps = {
  description: string;
};

const Description = forwardRef<HTMLDivElement, ToastDescriptionProps>((props, ref) => {
  const { description } = props;
  return <div ref={ref}>{description}</div>;
});

Description.displayName = "ToastDescription";

type ToastActionProps = {};

const Action = forwardRef<HTMLDivElement, ToastActionProps>((props, ref) => {
  return <div ref={ref}>Action</div>;
});

Action.displayName = "ToastAction";

type ToastCloseProps = {};

const Close = forwardRef<HTMLDivElement, ToastCloseProps>((props, ref) => {
  return <div ref={ref}>Close</div>;
});

Close.displayName = "ToastClose";

type ToastRootProps = {
  type?: ToastType;
} & PropsWithChildren<{}>;

const Root = forwardRef<HTMLDivElement, ToastRootProps>((props, ref) => {
  const { children, type = "default" } = props;
  const style = toastRootStyle({ type });

  return (
    <div ref={ref} className={style}>
      {children}
    </div>
  );
});

Root.displayName = "ToastRoot";

export { Title, Description, Root, Action, Close };
