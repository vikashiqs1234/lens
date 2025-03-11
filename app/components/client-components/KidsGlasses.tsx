"use client";
import Image from "next/image";



const KidsGlasses = () => {
 

  return (
    <div className="container flex justify-center gap-16 bg-white w-[96%] pl-6 mx-auto py-4">
        <div className="bg-gray-100 rounded-4xl w-fit p-16 flex flex-col items-center gap-5">
            <Image src={'https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg'} className="h-[125px] w-[125px] rounded-[50%]" height={300} width={400} alt="img"/>
            <p>Eye Glasses.</p>
        </div>
        <div className="bg-gray-100 rounded-4xl w-fit p-16 flex flex-col items-center gap-5">
            <Image src={'https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg'} className="h-[125px] w-[125px] rounded-[50%]" height={300} width={400} alt="img"/>
            <p>Eye Glasses.</p>
        </div>
        <div className="bg-gray-100 rounded-4xl w-fit p-16 flex flex-col items-center gap-5">
            <Image src={'https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg'} className="h-[125px] w-[125px] rounded-[50%]" height={300} width={400} alt="img"/>
            <p>Eye Glasses.</p>
        </div>
    </div>
  );
};

export default KidsGlasses;
