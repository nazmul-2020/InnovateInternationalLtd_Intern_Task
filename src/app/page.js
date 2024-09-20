import Navbar from "@/components/Homepage/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div
    // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main
      // className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
      >
        <Navbar />
        <h1>The next project start</h1>
        <h1>The next project end</h1>

        <div class="w-full relative">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
              <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" class="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110" />
            </div>
            <div class="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
              <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" class="w-full h-auto relative z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" />
            </div>
          </div>
        </div>


        <div className="flex items-center justify-between gap-3 my-4">
          <div class="w-32 h-32 rounded bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded</div>
          <div class="w-32 h-32 rounded-t bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded-t</div>
          <div class="w-32 h-32 rounded-r bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded-r</div>
          <div class="w-32 h-32 rounded-b bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded-b</div>
          <div class="w-32 h-32 rounded-l bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded-l</div>
          <div class="w-32 h-32 rounded-tr bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded-tr</div>
          <div class="w-32 h-32 rounded-tl bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded-tl</div>
          <div class="w-32 h-32 rounded-br bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded-br</div>
          <div class="w-32 h-32 rounded-bl bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded-bl</div>
          <div class="w-32 h-32 rounded-none bg-indigo-500 flex items-center justify-center text-white text-base font-medium">rounded-none</div>


        </div>

      </main>
    </div>
  );
}
