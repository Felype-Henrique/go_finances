import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({children, ...props}: Props) => {
  return (
    <button
      {...props}
      className="bg-blue-500 p-2 font-bold text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-gray-200"
    >
      {children}
    </button>
  );
};
