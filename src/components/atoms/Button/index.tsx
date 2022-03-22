import { ButtonHTMLAttributes, ReactNode } from "react";
import tw from "tailwind-styled-components/dist/tailwind";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'ghost'
}

export const Button = ({children, variant, ...props}: Props) => {
  if (variant === 'ghost'){
    return (
      <GhostButton
      {...props}
      className=""
    >
      {children}
    </GhostButton>
    )
  }

  return (
    <MainButton
      {...props}
      className=""
    >
      {children}
    </MainButton>
  );
};


export const BaseButton = tw.button`
  p-2 px-8 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-200
`

export const MainButton = tw(BaseButton)`
  bg-blue-500 hover:bg-blue-400
`

export const GhostButton = tw(BaseButton)`
  bg-transparent hover:bg-gray-50 text-blue-500 hover:bg-blue-100
`