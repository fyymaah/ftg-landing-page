import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import WhyExistsSection from '@/components/WhyExistsSection'
import CoreFeatures from '@/components/CoreFeatures'
import HowItWorks from '@/components/HowItWorks'
import AppPreview from '@/components/AppPreview'
import WhyDifferent from '@/components/WhyDifferent'
import ForStudentsInstitutions from '@/components/ForStudentsInstitutions'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyExistsSection />
      <CoreFeatures />
      <HowItWorks />
      <AppPreview />
      <WhyDifferent />
      <ForStudentsInstitutions />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}