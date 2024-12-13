import { forwardRef } from "react";
import { useToaster } from "./useToaster";
import * as Toast from "./Toast";

type ToasterProps = {};

export const Toaster = forwardRef<HTMLDivElement, ToasterProps>((props, ref) => {
  const { toastList } = useToaster();
  return (
    <div ref={ref}>
      {toastList.map(({ id, title, description }) => {
        return (
          <Toast.Root key={id}>
            {title && <Toast.Title title={title} />}
            {description && <Toast.Description description={description} />}
            <Toast.Action />
            <Toast.Close />
          </Toast.Root>
        );
      })}
    </div>
  );
});
