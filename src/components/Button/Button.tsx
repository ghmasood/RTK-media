import className from "classnames";
import { ReactNode } from "react";
import { CgSpinner } from "react-icons/cg";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  loading?: boolean;
}

function Button({
  loading,
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}: IButtonProps) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border duration-500",
    {
      "border-violet-700 hover:bg-violet-500 bg-violet-700 hover:bg-violet-500 text-white":
        primary,
      "opacity-80 cursor-not-allowed": loading,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-lg": rounded,
      "bg-white": outline,
      "text-violet-700 hover:bg-violet-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes} disabled={loading}>
      {loading ? (
        <CgSpinner color="white" size={30} className="animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
  }: IButtonProps) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
