import Header from '@/components/Header';
import NewsTicker from '@/components/NewsTicker';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import GeographicCoverage from '@/components/GeographicCoverage';
import EnterpriseCTA from '@/components/EnterpriseCTA';
import TrustedByProfessionals from '@/components/TrustedByProfessionals';
import CoreJobs from '@/components/CoreJobs';
import TrustedKnowledge from '@/components/TrustedKnowledge';
import ChallengesSolutions from '@/components/ChallengesSolutions';
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
      <NewsTicker />
      <Header />
      <main className="pt-24">
        <Hero />
        <VideoSection />
        <GeographicCoverage />
        <EnterpriseCTA />
        <TrustedByProfessionals />
        <CoreJobs />
        <TrustedKnowledge />
        <ChallengesSolutions />
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
