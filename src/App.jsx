import Header from './components/Header';
import Hero from './components/Hero';
import GlobalReach from './components/GlobalReach';
import Features from './components/Features';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <GlobalReach />
        <Features />
        <CTA />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;