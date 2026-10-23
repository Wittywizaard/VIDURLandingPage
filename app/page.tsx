import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import GeographicCoverage from '@/components/GeographicCoverage';
import TrustedByProfessionals from '@/components/TrustedByProfessionals';
import CoreJobs from '@/components/CoreJobs';
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
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <NewsTicker />
      <main>
        <Hero />
        <VideoSection />
        <GeographicCoverage />
        <TrustedByProfessionals />
        <CoreJobs />
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
      <ScrollToTop />
    </div>
  );
}
