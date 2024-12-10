import { forwardRef, PropsWithChildren } from "react";

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

type ToastRootProps = {} & PropsWithChildren<{}>;

const Root = forwardRef<HTMLDivElement, ToastRootProps>((props, ref) => {
  const { children } = props;
  return (
    <div
      ref={ref}
      className="bg-gray-500 bg-opacity-75 rounded-md p-4 text-white mix-blend-hard-light backdrop-opacity-70 backdrop-blur-md backdrop-saturate-150 shadow-lg border-1 border-white"
    >
      {children}
    </div>
  );
});

Root.displayName = "ToastRoot";

export { Title, Description, Root, Action, Close };
