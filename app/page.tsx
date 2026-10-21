import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GeographicCoverage from '@/components/GeographicCoverage';
import TrustedByProfessionals from '@/components/TrustedByProfessionals';
import TrustedKnowledge from '@/components/TrustedKnowledge';
import ProfessionalCommunity from '@/components/ProfessionalCommunity';
import ChallengesSolutions from '@/components/ChallengesSolutions';
import BookDemo from '@/components/BookDemo';
import Testimonials from '@/components/Testimonials';
import WhatsNew from '@/components/WhatsNew';
import LearningResources from '@/components/LearningResources';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <GeographicCoverage />
        <TrustedByProfessionals />
        <TrustedKnowledge />
        <ProfessionalCommunity />
        <ChallengesSolutions />
        <BookDemo />
        <Testimonials />
        <WhatsNew />
        <LearningResources />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
