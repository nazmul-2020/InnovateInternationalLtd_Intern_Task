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
    </div>
  );
};

export default PhotoSession;
