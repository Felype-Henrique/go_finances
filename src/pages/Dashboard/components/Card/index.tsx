import React from "react";
import tw from "tailwind-styled-components"
import { Button } from "../../../../components/atoms/Button";

export const Card = ({ title, category, cost}) => {
  return (
    <CardContainer>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="px-4 h-8 flex items-center justify-center text-purple-900 bg-purple-100 self-start rounded-full">
        {category}
      </p>
      <p className="font-medium">{cost}</p>
      <footer className="w-full flex justify-between">
      <Button variant="ghost" className="">
        Editar
      </Button>
      <Button variant="ghost" className="">
        Excluir
      </Button>
      </footer>
    </CardContainer>
  );
};

export const CardContainer = tw.article`
bg-white p-4 shadow-md relative flex justify-between flex-col gap-4
`