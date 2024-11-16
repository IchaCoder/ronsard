import Image from "next/image";
import QRCode from "qrcode.react";
import React from "react";
// import QRCode from "react-qr-code";

const AdmissionPage = () => {
  return (
    <div className="px-4 lg:w-[60%] mx-auto">
      <QRCode value="http://localhost:3000/admission" className="mt-8" />
      <h1 className="flex gap-3 items-center mt-4">
        <Image className="w-12 h-12" src="/logo.png" alt="logo" width={150} height={150} />
        <span className="text-4xl font-bold uppercase">Ecole Ronsard Bilingual School</span>
      </h1>
      <div className="my-4">
        <h3 className="text-2xl font-semibold">REGULATIONS FOR THE PAYMENT OF SCHOOL FEES </h3>
        <ul className="grid gap-2 mt-8">
          <li>
            Registration and admission fees must be paid before the children can start school. Admission fees are paid
            once upon admission of the pupil in the school.
          </li>
          <li>
            Tuition fees must be paid y the end of each team at the very latest; if payment goes beyond the first month
            , an interest of 5% will be charged.
          </li>
          <li>Fees are not refundable in the event of a pupil being expelled , or in any other circumstances.</li>
        </ul>
        <ul className="grid gap-2 mt-8">
          <li>
            The school board reserves the right to raise the scale of fees during the course of the academic year.
          </li>
          <li>
            In case of payment by local or foreign transfer a copy of the transfer advice, bearing the name of the
            pupil, should be forwarded to the school account office before a receipt will be issued.{" "}
            <span className="font-bold">All bank transfer charges must be paid by parents.</span>
          </li>
          <li>
            Cash or cheque payments can be made directly to the administration office and the receipt will be issued.
          </li>
        </ul>
        <div className="mt-8">
          <input type="checkbox" /> I agree to abide by the above regulations.
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <label htmlFor="date">Date:</label>
            <input type="date" className="ml-2" />
          </div>
          <div>signature of parent or guardian</div>
        </div>
      </div>
      <div className="my-8">
        <h3 className="text-2xl font-semibold">CHECKLIST</h3>
      </div>
    </div>
  );
};

export default AdmissionPage;
