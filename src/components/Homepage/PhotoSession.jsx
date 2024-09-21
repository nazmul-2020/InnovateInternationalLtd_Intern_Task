import Image from "next/image";

const PhotoSession = () => {
  return (
    <div className=" my-20 ">
      <div className="mt-10 pt-10">
        <div className="flex items-center justify-center gap-8">
          <div className="w-[640px] relative">
            <div>
              <div className="w-[274px] h-[274px] rounded-[39px] flex items-center pl-6 photo1">
                <p className=" text-3xl text-white font-semibold">Photo 1</p>
              </div>
              <div className="relative">
                <Image
                  className=" rounded-full absolute top-[-35px] left-[220px]"
                  src="/img/Ellipse1.png"
                  width={80}
                  height={80}
                  alt="photo1"
                />
              </div>
            </div>

            <div className="absolute bottom-48  left-[340px] ">
              <div className="w-[230px] h-[230px] rounded-[39px] flex items-center pl-6 photo2">
                <p className=" text-3xl text-black font-semibold">Photo 2</p>
              </div>
              <div className="relative">
                <Image
                  className=" rounded-full absolute top-[-32px] left-[190px]"
                  src="/img/Ellipse2.png"
                  width={80}
                  height={80}
                  alt="photo1"
                />
              </div>
            </div>

            <div className="mt-16 ms-[66px]">
              <div className="w-[200px] h-[200px] rounded-[39px] flex items-center pl-6 photo3">
                <p className=" text-3xl text-white font-semibold">Photo 3</p>
              </div>
              <div className="relative">
                <Image
                  className=" rounded-full absolute top-[-35px] left-[160px]"
                  src="/img/Ellipse3.png"
                  width={80}
                  height={80}
                  alt="photo1"
                />
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="w-[455px]">
            <div className="text-justify ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore e.
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                class="py-2.5 px-6 text-sm rounded-[18px] border border-solid border-[#4000FF] text-[#4000FF] cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-[#4000FF] hover:text-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 mt-10 pt-10 ">
        <div className="w-[500px] ">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              class="py-2.5 px-6 text-sm rounded-[18px] border-2 border-solid border-[#2D0399] text-[#2D0399] cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-[#2D0399] shadow-xl hover:text-white"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="w-[500px] h-[400px]  flex justify-end relative">
          <div className="w-[400px] h-[400px] bg-[#1F3B68] rounded-2xl absolute bottom-0 right-9 z-20">
            <div className="h-full mx-11 py-7 grid gap- grid-cols-1 content-between">
              <div>
                <p className="text-white text-3xl font-semibold">Lorem ipsum</p>
                <div className="mt-4 flex items-center gap-2">
                  <Image
                    className=" rounded-full"
                    src="/img/Ellipse12.png"
                    width={22}
                    height={22}
                    alt="photo1"
                  />
                  <span className="text-white">Wade Warren</span>
                </div>
              </div>
              <div className="text-white stroll p-2">
                <h1 className="font-semibold">Lawrance Stroll</h1>
                <p className="text-sm">Hegifueshho dhfsui foiehhsio</p>
              </div>
            </div>
            {/* <div></div> */}
          </div>
          <div className="w-[350px] h-[350px] bg-[#980FA7] rounded-2xl absolute bottom-5 right-4 z-10"></div>
          <div className="w-[300px] h-[300px] bg-[#31096A] rounded-2xl absolute bottom-10 z-0  "></div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSession;
