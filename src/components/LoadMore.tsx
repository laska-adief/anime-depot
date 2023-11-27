import Image from "next/image";

const LoadMore = () => {
  return (
    <section>
      <Image src="./spinner.svg" alt="spinner" width={56} height={56} className="m-auto" />
    </section>
  );
};
export default LoadMore;
