import Button from './Button';
import React from 'react';

type Props = {
  children: React.ReactNode;
  bgColor: string;
  hoverColor: string;
  buttonTextColor: string;
  title: string;
  content: string;
};

export default function Card({ children, bgColor, hoverColor, buttonTextColor, title, content }: Props) {
  return (
    <div
      className={`w-[327px] h-[442px] flex p-[48px] ${bgColor} md:w-[608px] md:h-[391px] md:px-[80px] md:py-[48px]
      xl:w-[307px] xl:h-[500px] xl:p-[48px]`}>
      <div className="w-full flex flex-col gap-[32px] xl:w-[212px] xl:gap-[40px]">
        {children}
        <div className="w-full flex flex-col gap-[24px] xl:gap-[80px]">
          <div className="w-full flex flex-col gap-[24px]">
            <h1 className="text-preset-1 text-gray-100">{title}</h1>
            <p className="text-preset-2 text-white/75">{content}</p>
          </div>
          <Button color={buttonTextColor} hoverColor={hoverColor} />
        </div>
      </div>
    </div>
  );
}
