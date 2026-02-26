type Props = {
  color: string;
  hoverColor: string;
};

export default function Button({ color, hoverColor }: Props) {
  return (
    <button
      className={`w-fit cursor-pointer h-[48px] px-[32px] py-[8px] text-center bg-gray-100 text-preset-2 ${color} rounded-[25px] 
      ${hoverColor} hover:border-2 hover:border-white hover:text-white`}>
      Learn More
    </button>
  );
}
