import Image from "next/image";
import React from "react";
import QRCode from "react-qr-code";

type Props = {};

const AdmissionPage = (props: Props) => {
  return (
    <div className="px-4 lg:w-[70%] mx-auto">
      <QRCode value="http://localhost:3000/admission" className="mt-8" />
      {/* <h1 className="flex gap-3 items-center mt-4">
        <Image className="w-12 h-12" src="/logo.png" alt="logo" width={150} height={150} />
        <span className="text-4xl font-bold">Ecole Ronsard Bilingual School</span>
      </h1> */}
    </div>
  );
};

export default AdmissionPage;
