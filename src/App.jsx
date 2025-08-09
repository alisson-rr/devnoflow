import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import ResultsSection from './components/ResultsSection';
import TestimonialsSection from './components/TestimonialsSection';
import SolutionsSection from './components/SolutionsSection';
import MarketChangeSection from './components/MarketChangeSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './App.css';

function App() {
  useScrollAnimation();

  return (
    <div className="bg-[#121212] text-gray-200 font-sans antialiased overflow-x-hidden">
      <Header />
      <main className="pt-24 md:pt-32">
        <HeroSection />
        <PainPointsSection />
        <ResultsSection />
        <TestimonialsSection />
        <SolutionsSection />
        <MarketChangeSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

