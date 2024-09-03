"use client";

import AuthProvider from "../hooks/AuthProvider";
import CTAButtons from "./CTAButtons";
import Footer from "./Footer";
import Header from "./Header";
import Welcome from "./Welcome";

export default function App({ children }: { children: any }) {
  return (
    <AuthProvider>
      <Header />
      <Welcome />
      <CTAButtons />
      {children}
      <Footer />
    </AuthProvider>
  );
}
