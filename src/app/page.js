import Image from "next/image";



export default function Home() {
  return (
    <main> 
      {/* Container */}
      <div className=" relative  gap-5 flex flex-row bg-[#F7F8FA]  ">
            {/*Left bar */}
            <div className="flex flex-col container h-[927] w-[100px] mt-[40px] ml- [40px] border-1 color rounded-3xl bg-white ">
                <a href="/"><Image src="/dua_logo.svg" alt="dua" width={73} height={73}/></a>
                <a href="/"><Image src="/Frame 545.svg" alt="Frame" width={38} height={38} className=" mt-[80px] mb-[75px] ml-[20px]"/></a>
                <a href="/"><Image src="/I_want_to_support_logo.svg" alt="Want to support" width={57} height={56} className=" ml-[10px]"/></a>
            </div>
            
            <div className="flex flex-row justify-between">
              {/* Dua Page & Search Bar */}
              <div className="flex flex-auto items-center justify-between">
                <h1 className="font-[Poppins] font-bold text-[24px]">Dua Page</h1>

                <a href="/"><Image src="/search_bar.svg" alt="SearchBar" width={371} height={52} className=" mt-[80px] mb-[75px] ml-[20px]"/></a>
              </div>
                {/* Account */}
              <div>
                <a href="/"><Image src="/account_logo.svg" alt="AccountLogo" width={67.5} height={45} className=" mt-[80px] mb-[75px] ml-[250px]  "/></a>
              </div>
              <div>
                <a href="/"><Image src="/setting.svg" alt="Setting" width={67.5} height={45} className=" mt-[80px] mb-[75px] ml-[250px]  "/></a>
              </div>
           </div>
      </div>
    </main>
  );
}
