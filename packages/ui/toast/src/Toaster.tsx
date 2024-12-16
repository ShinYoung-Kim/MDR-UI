import { forwardRef } from "react";
import { useToaster } from "./useToaster";
import * as Toast from "./Toast";
import { toasterStyle } from "./style";

type Position =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "middle-left"
  | "middle-center"
  | "middle-right";

type ToasterProps = {
  maxCount?: number;
  position?: Position;
};

export const Toaster = forwardRef<HTMLDivElement, ToasterProps>((props, ref) => {
  const { toastList } = useToaster();
  const { maxCount = 5, position = "bottom-right" } = props;
  const style = toasterStyle({ position });

  return (
    <section ref={ref} className={style}>
      {toastList.map(({ id, title, description, type }) => {
        return (
          <Toast.Root key={id} type={type}>
            {title && <Toast.Title title={title} />}
            {description && <Toast.Description description={description} />}
            <Toast.Action />
            <Toast.Close />
          </Toast.Root>
        );
      })}
    </section>
  );
});
