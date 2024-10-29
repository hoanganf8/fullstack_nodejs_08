import { Metadata } from "next";
import Carousel from "./_components/Carousel";

export const metadata: Metadata = {
  title: "Trang chủ - F8",
};
export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Carousel />
    </div>
  );
}
