"use client";
import Confetti from "react-confetti";

const SuccessPage = () => {

  return (
    <div className="container overflow-hidden">
      <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-5rem)] overflow-y-hidden">
        <Confetti width={'700vw'}  height={window.innerHeight} className="overflow-hidden w-full" />
        <h1 className="text-6xl text-green-700">Order Placed!</h1>
        <h2 className="text-xl font-medium text-center">
          Thank you for your order! We have received your order and sent the invoice to your email.
        </h2>
      </div>
    </div>
  );
};

export default SuccessPage;
