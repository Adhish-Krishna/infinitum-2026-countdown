import React from 'react';
import infinitumLogo from '../assets/infinitumLogo.png';
import aibot from '../assets/aibot.png';
import years75 from '../assets/75yearsLogoWhite.png';
import csea from '../assets/CSEA_LOGO.png';
import psg from '../assets/PSG_LOGO.png';
import Infinitum2025Text from '../assets/Infinitum2025Text.png';
import CountdownTimer from '../components/CountdownTimer';
import FloatingLines from '../components/FloatingLines';
import DomeGallery from '@/components/DomeGallery';
import { LightRays } from '@/components/ui/light-rays';

const Home: React.FC = ()=>{

    const infinitum2025Images : string[] = [
      "https://res.cloudinary.com/duj1qgmah/image/upload/v1764603651/IMG_2451_vob41d.jpg",
      "https://res.cloudinary.com/duj1qgmah/image/upload/v1764603650/IMG_5022_ctpmgy.jpg",
      "https://res.cloudinary.com/duj1qgmah/image/upload/v1764603650/DSC_2395_1_x8jyzm.jpg",
      "https://res.cloudinary.com/duj1qgmah/image/upload/v1764603648/IMG_2567_oy5v7l.jpg",
      "https://res.cloudinary.com/duj1qgmah/image/upload/v1764603647/IMG_2140_ehc7ku.jpg",
    ]

    return (
    <>
      {/* Hero Section */}
      <div
        className="w-full relative bg-black overflow-hidden"
      >
        <div className='absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-95'>
          <FloatingLines 
            linesGradient={["#a353e0", "#23013d", "#c72071"]}
            enabledWaves={['top', 'middle' ,'bottom']}
            lineCount={[5, 5, 5]}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
      
        {/* Top logos */}
        <div className="absolute inset-x-0 top-2 sm:top-6 flex flex-row sm:flex-row items-center sm:justify-between px-3 z-20">
          <div className="flex items-center gap-3 justify-start sm:justify-start w-full sm:w-auto pl-20">
            <img src={psg} alt="PSG Logo" className="h-15 sm:h-30 w-auto" />
            <img src={years75} alt="75 Years Logo" className="h-10 sm:h-20 w-auto" />
          </div>
          <div className="flex items-center justify-end sm:justify-end w-full sm:w-auto sm:mt-0 pr-20">
            <img src={csea} alt="CSEA Logo" className="h-10 sm:h-20 w-auto" />
          </div>
        </div>

        <main className="relative z-10 px-4 p-10 sm:p-3 flex flex-col items-center">
          <p className="text-base sm:text-[20px] font-bold text-white text-center mt-14 sm:mt-6" style={{ fontFamily: 'var(--font-family-albert)' }}>
            PSG COLLEGE OF TECHNOLOGY
          </p>

          <p className="text-base sm:text-[20px] font-bold text-white text-center mt-4" style={{ fontFamily: 'var(--font-family-albert)' }}>
            COMPUTER SCIENCE AND ENGINEERING ASSOCIATION
          </p>

          <p className="text-base sm:text-[20px] font-bold text-white text-center mt-2" style={{ fontFamily: 'var(--font-family-albert)' }}>
            PRESENTS
          </p>

          <img src={infinitumLogo} alt="Infinitum Logo" className="w-[400px] sm:w-[500px] max-w-full h-auto mt-6" />

          <p className="text-[17px] sm:text-[22px] font-bold text-white text-center mt-2" style={{ fontFamily: 'var(--font-family-albert)' }}>
            "THE SILENT RISE OF A LIMITLESS FUTURE"
          </p>

          <h4 className="text-[100px] sm:text-[128px] font-bold text-white text-center mt-6" style={{ fontFamily: 'var(--font-family-alexandria)', lineHeight: 1 }}>
            13 <span className="text-[#FF1170]">&</span> 14
          </h4>

          <div className="w-full flex justify-center mt-2">
            <div className="relative inline-flex items-end">
              <h5 className="text-[140px] sm:text-[172px] font-medium text-white m-0 leading-none flex items-end" style={{ fontFamily: 'var(--font-family-climate)' }}>
                <span className="text-[#FF1170]">F</span>
                <span className="text-[#FF1170]">E</span>
                <span className="text-[#FF1170]">B</span>
              </h5>
              <img
                src={aibot}
                alt="AI Bot"
                className="absolute bottom-[13px] left-1/2 sm:left-[47%] -translate-x-1/2 h-[220px] sm:h-[262px] w-auto max-w-none pointer-events-none z-10"
              />
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="w-full flex justify-center mt-6 sm:mt-8 relative z-20">
            <CountdownTimer />
          </div>
        </main>
      </div>

      {/* Section Separator */}
      <div className="w-full flex justify-center bg-black">
        <div className="w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-[#FF1170]/50 to-transparent" />
      </div>

      {/* Event Gallery */}
      <div className='relative w-full min-h-[500px] sm:min-h-[700px] flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 bg-black py-10 sm:py-0 px-4 sm:px-0 overflow-hidden'>
        {/* Light Rays Background */}
        <LightRays 
          count={10}
          color="rgba(67, 2, 105, 0.5)"
          blur={40}
          speed={12}
          length="100%"
          className="z-0"
        />
        
        <img src={Infinitum2025Text} className='relative z-10 h-40 sm:h-120 sm:mb-17 w-auto' alt="Infinitum 2025" />
        <div className="relative z-10 w-full sm:w-[800px] h-[400px] sm:h-[600px]">
          <DomeGallery 
            images={infinitum2025Images}
            grayscale={false}
            segments={25}
            fit={0.6}
            minRadius={400}
          />
        </div>
      </div>

      {/* Section Separator */}
      <div className="w-full flex justify-center bg-black">
        <div className="w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-[#FF1170]/50 to-transparent" />
      </div>

      {/* Footer */}
      <footer className="w-full pt-8 pb-8 bg-black relative z-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                {/* Contact Numbers */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <div className="flex flex-col items-center">
                    <span className="text-white text-base font-semibold mb-0.5" style={{ fontFamily: 'var(--font-family-albert)' }}>
                      ARULKUMARA B R
                  </span>
                  <span className="text-white text-xs opacity-75 mb-1" style={{ fontFamily: 'var(--font-family-albert)' }}>
                      Secretary, CSEA
                  </span>
                  <a href="tel:+1234567890" className="text-white hover:text-[#FF1170] transition-colors" style={{ fontFamily: 'var(--font-family-albert)' }}>
                      📞 +91 86102 02823
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-base font-semibold mb-0.5" style={{ fontFamily: 'var(--font-family-albert)' }}>
                      SANJAY J
                  </span>
                  <span className="text-white text-xs opacity-75 mb-1" style={{ fontFamily: 'var(--font-family-albert)' }}>
                      Joint Secretary, CSEA
                  </span>
                  <a href="tel:+1234567891" className="text-white hover:text-[#FF1170] transition-colors" style={{ fontFamily: 'var(--font-family-albert)' }}>
                      📞 +91 97897 10033
                  </a>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-white text-base font-semibold mb-0.5" style={{ fontFamily: 'var(--font-family-albert)' }}>
                      NAREN SIDDHARTH M
                </span>
                <span className="text-white text-xs opacity-75 mb-1" style={{ fontFamily: 'var(--font-family-albert)' }}>
                      Head, Sponsorship
                </span>
                <a href="tel:+1234567892" className="text-white hover:text-[#FF1170] transition-colors" style={{ fontFamily: 'var(--font-family-albert)' }}>
                      📞 +91 99409 79069
                </a>
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="flex justify-center mt-4">
            <a href="mailto:infinitum@psgtech.edu" className="text-white hover:text-[#FF1170] transition-colors" style={{ fontFamily: 'var(--font-family-albert)' }}>
                  ✉️ csea.cse@psgtech.ac.in
            </a>
          </div>
        </div>
      </footer>         
    </>
  );
}

export default Home;