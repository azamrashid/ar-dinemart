"use client";

import toast from 'react-hot-toast';
import { Product } from "@/interfaces";
import getStipePromise from "@/lib/stripe";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface Props {
  products: Product[];
}

const StripeCheckOutButton = (props: Props) => {
  const handleCheckout = async () => {
    const toastId = toast.loading('trying checkout');
    const stripe = await getStipePromise();
    const response = await fetch("api/stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(props.products),
    });

    const data = await response.json();

    if (data.session) {
      toast.dismiss(toastId);
        if (data.success === false || !stripe) {
          toast.error('checkout failed');
        } else {
          toast.loading('Redirecting...');
          stripe?.redirectToCheckout({ sessionId: data.session.id });
             }
      
    }
  };

  return (
    <div className="py-5">
      <button
        className="bg-[#212121] text-white py-3 px-3 rounded-md"
        onClick={handleCheckout}
      >
        Process to Checkout
      </button>
    </div>
  );
};

export default StripeCheckOutButton;
