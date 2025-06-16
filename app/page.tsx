import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"
import { Suspense } from 'react';
import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
  return (

    <div className="font-display">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="text-center text-gray-500">Loading features...</div>}>
          <Features />
          <CTA />
          <Footer />
        </Suspense>
      </ThemeProvider>
    </div>
  )
}

export default App;