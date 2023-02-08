import classNames from "classnames";
import { Children, ReactNode } from "react";

interface IPanelProps {
  children: ReactNode;
  customClass: string;
}
function Panel({ children, customClass, ...rest }: IPanelProps) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    customClass
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
