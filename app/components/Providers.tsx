"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/stripe/success"  // Update to your success URL
      cancelUrl="http://localhost:3000/stripe/error"    // Update to your cancel URL
      currency="INR"  // Set currency to INR for Indian Rupees
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-IN"  // Set language to English (India)
    >
      {children}
    </USCProvider>
  );
}
