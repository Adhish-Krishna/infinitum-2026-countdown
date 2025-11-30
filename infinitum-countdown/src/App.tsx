import React from 'react';
import infinitumLogo from './assets/image.png';
import aibot from './assets/aibot.png';
import years75 from './assets/75yearsLogo.png';
import csea from './assets/CSEA_LOGO.png';
import psg from './assets/PSG_LOGO.png';
import LightRays from './components/LightRays';
import CountdownTimer from './components/CountdownTimer';

const App: React.FC = () => {
  return (
    <div 
      className="w-full min-h-screen"
      style={{
        background: 'radial-gradient(ellipse 800px 500px at 50% 80%, #5f0281ff, #000000)',
        position: 'relative'
      }}
    >
      {/* Light Rays Background */}
      <div style={{ width: '100%', height: '800px', position: 'absolute' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#6e5c73ff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>
      
      {/* Content Layer */}
      <div style={{ position: 'relative', zIndex: 10 }}>
      {/* Top Left Logos */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '15px', alignItems: 'center', zIndex: 20 }}>
        <img src={psg} alt="PSG Logo" style={{ height: '80px', width: 'auto' }} />
        <img src={years75} alt="75 Years Logo" style={{ height: '80px', width: 'auto' }} />
      </div>
      
      {/* Top Right Logo */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 20 }}>
        <img src={csea} alt="CSEA Logo" style={{ height: '80px', width: 'auto' }} />
      </div>
      
      <div className="w-full flex justify-center pt-4">
        <h1 
          style={{
            fontFamily: 'Albert Sans, sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          PSG COLLEGE OF TECHNOLOGY
        </h1>
      </div>
      <div className="w-full flex justify-center pt-4">
        <h1 
          style={{
            fontFamily: 'Albert Sans, sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          COMPUTER SCIENCE AND ENGINEERING ASSOCIATION
        </h1>
      </div>
      <div className="w-full flex justify-center pt-2">
        <h1 
          style={{
            fontFamily: 'Albert Sans, sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          PRESENTS
        </h1>
      </div>
      <div className="w-full flex justify-center pt-4">
        <img src={infinitumLogo} alt="Infinitum Logo" style={{ width: '500px', height: 'auto' }} />
      </div>
      <div className="w-full flex justify-center pt-2">
        <h1 
          style={{
            fontFamily: 'Albert Sans, sans-serif',
            fontSize: '22px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          "THE SILENT RISE OF A LIMITLESS FUTURE"
        </h1>
      </div>
      <div className="w-full flex justify-center pt-4">
        <h1 
          style={{
            fontFamily: 'Alexandria, sans-serif',
            fontSize: '128px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          13 <span style={{ color: '#FF1170' }}>&</span> 14
        </h1>
      </div>
      <div className="w-full flex justify-center pt-2">
  <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'flex-end' }}>
    <h1 
      style={{
        fontFamily: 'Climate Crisis, sans-serif',
        fontSize: '172px',
        fontWeight: '500',
        color: 'white',
        margin: 0,
        lineHeight: 1,
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative'
      }}
    >
      <span style={{ color: '#FF1170' }}>F</span>
      <span style={{ color: '#FF1170' }}>E</span>
      <span style={{ color: '#FF1170' }}>B</span>
      
      <img
        src={aibot}
        alt="AI Bot"
        style={{
          position: 'absolute',
          bottom: 15,
          left: '47%',
          transform: 'translateX(-50%)',
          height: '262px',
          width: 'auto',
          maxWidth: 'none',
          pointerEvents: 'none',
          zIndex: 10
        }}
      />
    </h1>
  </div>
      </div>

      {/* Countdown Timer */}
      <div className="w-full flex justify-center" style={{ marginTop: '30px', position: 'relative', zIndex: 20 }}>
        <CountdownTimer />
      </div>
      </div>
    </div>
  );
};

export default App;
