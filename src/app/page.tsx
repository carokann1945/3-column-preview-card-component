import Card from '@/components/Card';
import SvgIconSedans from '@/components/svgs/Sedans';
import SvgIconLuxury from '@/components/svgs/Luxury';
import SvgIconSuvs from '@/components/svgs/Suvs';

export default function Home() {
  return (
    <main
      className="w-[327px] flex flex-col justify-center items-center rounded-[8px] overflow-hidden
    md:w-[608px] xl:w-auto xl:flex-row">
      <Card
        bgColor="bg-gold-500"
        hoverColor="hover:bg-gold-500"
        buttonTextColor="text-gold-500"
        title="Sedans"
        content="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your
              next road trip.">
        <SvgIconSedans />
      </Card>
      <Card
        bgColor="bg-cyan-800"
        hoverColor="hover:bg-cyan-800"
        buttonTextColor="text-cyan-800"
        title="SUVs"
        content="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.">
        <SvgIconSuvs />
      </Card>
      <Card
        bgColor="bg-green-950"
        hoverColor="hover:bg-green-950"
        buttonTextColor="text-green-950"
        title="Luxury"
        content="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ">
        <SvgIconLuxury />
      </Card>
    </main>
  );
}
