import Image from "next/image";

const Hero = () => {
  return (
    <header className="w-full bg-gray-900 px-16 py-14">
      <div className="flex flex-col lg:flex-row items-center h-full container-max gap-4 md:gap-10">
        <div className="flex-1 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-7xl text-red-500 font-bold w-fit">
            Anime Depot <br />
          </h1>
          <h2 className="text-2xl lg:text-3xl text-slate-50 w-fit">Explore limitless anime list</h2>
        </div>
        <div className="lg:flex-1 relative w-full h-[35vh] md:h-[40vh] lg:h-[50vh] justify-center">
          <Image src="/hero-image.png" alt="hero-image" fill className="object-contain" />
        </div>
      </div>
    </header>
  );
};
export default Hero;
