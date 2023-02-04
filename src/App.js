import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import EgoModel from './component';
import { useState } from 'react';
import LogoIcon from './assets/svg/logo-icon.svg';
import LogoText from './assets/svg/logo-text.svg';

import './App.css';
import 'animate.css';

const texts = ['AVATAR', 'FURRY', 'VTUBER', 'WAIFU'];

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [textNum, setTextNum] = useState(0);
  const onPlay = () => {
    setIsPlay(true);
  };

  return (
    <div style={{position: 'relative'}}>
      <div className='logo'>
          <img src={LogoIcon} alt='logo-icon'/>
          <img src={LogoText} alt='logo-text' />
      </div>
      <button className='button' onClick={() => {onPlay()}} >
        Join Us
      </button>
      <div className='text-field'>
        <p className='text-line'>STREAM</p>
        <p className='text-line' >AS A</p>
        <div>
          {textNum === 0 && <p className='animate__animated animate__fadeInRight text-animate-line' >{texts[0]}</p>}
          {textNum === 1 && <p className='animate__animated animate__fadeInRight text-animate-line' >{texts[1]}</p>}
          {textNum === 2 && <p className='animate__animated animate__fadeInRight text-animate-line' >{texts[2]}</p>}
          {textNum === 3 && <p className='animate__animated animate__fadeInRight text-animate-line' >{texts[3]}</p>}
        </div>
        <p className='text-line' >IN UNDER</p>
        <p className='text-line' >5 MINUTES</p>
      </div>
      <Canvas
        camera={{
          fov: 30,
          position: [0, 10, 0]
        }}
        style={{
          width: '100wh',
          height: '100vh',
          backgroundColor: 'black'
        }}
      >
        <pointLight position={[2.2, 0, 0]} intensity={1} />
        <pointLight position={[-2.2, 0, 0]} intensity={1} />
        <pointLight position={[0, 0, 2.2]} intensity={1} />
        <pointLight position={[0, 0, -2.2]} intensity={1} />
        <pointLight position={[3.0, 0, 3.0]} intensity={0.5} />
        <pointLight position={[3.0, 0, -3.0]} intensity={0.5} />
        <pointLight position={[-3.0, 0, 3.0]} intensity={0.5} />
        <pointLight position={[-3.0, 0, -3.0]} intensity={0.5} />
        <Stage preset='rembrandt' intensity={0.1} environment='sunset'>
          <EgoModel isPlay={isPlay} setIsPlay={setIsPlay} setTextNum={setTextNum} />
        </Stage>
      </Canvas>
    </div>
  );
}

export default App;
