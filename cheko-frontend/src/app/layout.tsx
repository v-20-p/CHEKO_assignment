"use client"

import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeProviderWrapper from "../config/MuiThemeProvider";
import Header from "@/components/home/Header";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@/store/store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Provider store={store}>

        <AppRouterCacheProvider>


        <ThemeProviderWrapper >
      <body className="">
      <PersistGate loading={null} persistor={persistor}>
        <Header/>

          {children}
        </PersistGate>
      </body>
        </ThemeProviderWrapper>
        </AppRouterCacheProvider>
        </Provider>
    </html>
  );
}
