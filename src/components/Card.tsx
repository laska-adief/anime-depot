import Image from "next/image";
import { RectangleStackIcon, StarIcon } from "@heroicons/react/24/solid";
import { Anime } from "@/types/anime";

const Card = ({ item }: { item: Anime }) => {
  return (
    <div className="relative w-[90%] rounded-md cursor-pointer hover:scale-110 transition-all">
      <div className="relative h-[45vh] sm:h-[35vh] md:h-[40vh] lg:h-[35vh] xl:h-[32vh] 2xl:h-[38vh]">
        <Image src={"https://shikimori.one" + item?.image?.original} alt={item?.name} fill className="rounded-xl" />
      </div>
      <div className="py-4 flex flex-col gap-3 px-2">
        <div className="min-h-[60px] flex justify-between items-start gap-2">
          <p className="font-bold text-white line-clamp-2">{item?.name}</p>
          <p className="text-white text-xs bg-slate-500 p-1 rounded-md">{item?.status}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <RectangleStackIcon width={24} height={24} className="text-red-500" />
            <p className="text-base text-white font-semibold">{item?.episodes || item?.episodes_aired}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <StarIcon width={24} height={24} className="text-yellow-400" />
            <p className="text-base text-white font-semibold">{item?.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
