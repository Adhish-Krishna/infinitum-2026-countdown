import infinitumLogo from './assets/infinitumLogo.png';
import aibot from './assets/aibot.png';
import years75 from './assets/75yearsLogo.png';
import csea from './assets/CSEA_LOGO.png';
import psg from './assets/PSG_LOGO.png';
// import LightRays from './components/LightRays';
import CountdownTimer from './components/CountdownTimer';
import FloatingLines from './components/FloatingLines';

const App: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen relative bg-black overflow-hidden"
    >
      {/* Light rays can be enabled by uncommenting the component below */}
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
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#5F0281"
          raysSpeed={0.5}
          lightSpread={0.85}
          rayLength={1.5}
          pulsating={false}
          fadeDistance={1.2}
          saturation={1.15}
          followMouse={true}
          mouseInfluence={0.06}
          noiseAmount={0.02}
          distortion={0.02}
          className="opacity-80 mix-blend-screen"
        />
      </div> */}
     
      {/* Top logos */}
      <div className="absolute inset-x-0 top-2 sm:top-6 flex flex-row sm:flex-row items-center sm:justify-between px-3 z-20">
        <div className="flex items-center gap-3 justify-start sm:justify-start w-full sm:w-auto">
          <img src={psg} alt="PSG Logo" className="h-10 sm:h-20 w-auto" />
          <img src={years75} alt="75 Years Logo" className="h-10 sm:h-20 w-auto" />
        </div>
        <div className="flex items-center justify-end sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
          <img src={csea} alt="CSEA Logo" className="h-10 sm:h-20 w-auto" />
        </div>
      </div>

      <main className="relative z-10 px-4 p-5 sm:p-3 flex flex-col items-center">
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
  );
};

export default App;
