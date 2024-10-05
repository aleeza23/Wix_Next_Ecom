"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { redirects } from '@wix/redirects';

// Get refresh token from cookies
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
// Create Wix client
const wixClient = createClient({
  modules: {
    products,
    collections,
    currentCart,
    redirects
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

// Create context for Wix client
export const WixClientContext = createContext(wixClient);

// WixClientContextProvider component
export const WixClientContextProvider = ({ children }) => {
const [isCartOpen, setIsCartOpen] = useState(false);




  return (
    <WixClientContext.Provider value={{wixClient, isCartOpen, setIsCartOpen }} >
      {children}
    </WixClientContext.Provider>
  );
};
