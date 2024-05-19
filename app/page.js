import Navbar from "@/components/Navbar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between home-bg-image">
      <div className="flex min-h-screen w-full flex-col items-center justify-between p-16 bg-[#482BE770]">
        <Navbar />
        {/* landing page items */}
        <div className="flex items-center justify-between w-full">
          <div>
            <FaChevronLeft size={25} color="lightgray" />
          </div>
          <div className="flex-col items-center justify-center w-[680px]">
            <p className="text-white text-[32px] text-center font-semibold">
              Startup 3
            </p>
            <p className="text-white text-[60px] text-center font-bold">
              Forget About Code
            </p>
            <p className="text-white text-xl font-medium text-center">
              Startup Framework gives you complete freedom over your creative
              process — you don’t have to think about any technical aspects.
              There are no limits and absolutely no coding.
            </p>
          </div>
          <div>
            <FaChevronRight size={25} color="white" />
          </div>
        </div>
        {/* paginator */}
        <div className="flex items-center gap-1.5">
          <div className="border-2 rounded-full w-3 h-3 border-white bg-white"></div>
          <div className="border-2 rounded-full w-3 h-3 border-white"></div>
          <div className="border-2 rounded-full w-3 h-3 border-white"></div>
          <div className="border-2 rounded-full w-3 h-3 border-white"></div>
          <div className="border-2 rounded-full w-3 h-3 border-white"></div>
        </div>
        {/* create an ecc button */}
        <button className="w-[230px] h-[60px] bg-[#482BE7] rounded-full text-white font-medium text-lg">
          Create an Account
        </button>
      </div>
    </main>
  );
}
