import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import EgoModel from './component';
import { useState } from 'react';

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
      <button style={{position: 'absolute', bottom: '150px', right: '150px', backgroundColor: '#ffffff', color: '#000000', width: '150px', height: '40px', border: 'none', borderRadius: '4px', fontSize: '25px', fontFamily: 'initial',  cursor: 'pointer', zIndex: 10}} onClick={() => {onPlay()}} >
        Join Us
      </button>
      <div style={{position: 'absolute', top: '150px', left: '120px', display: 'flex', flexDirection: 'column', zIndex: 10}}>
        <p style={{color: '#ffffff', fontSize: '70px',fontFamily: 'initial',  margin: '10px'}}>STREAM</p>
        <p style={{color: '#ffffff', fontSize: '70px',fontFamily: 'initial',  margin: '10px'}}>AS A</p>
        <div>
          {textNum === 0 && <p className='animate__animated animate__fadeInRight' style={{color: '#0DBE89', fontSize: '70px', fontFamily: 'initial', margin: '10px'}}>{texts[0]}</p>}
          {textNum === 1 && <p className='animate__animated animate__fadeInRight' style={{color: '#0DBE89', fontSize: '70px', fontFamily: 'initial', margin: '10px'}}>{texts[1]}</p>}
          {textNum === 2 && <p className='animate__animated animate__fadeInRight' style={{color: '#0DBE89', fontSize: '70px', fontFamily: 'initial', margin: '10px'}}>{texts[2]}</p>}
          {textNum === 3 && <p className='animate__animated animate__fadeInRight' style={{color: '#0DBE89', fontSize: '70px', fontFamily: 'initial', margin: '10px'}}>{texts[3]}</p>}
        </div>
        <p style={{color: '#ffffff', fontSize: '70px',fontFamily: 'initial',  margin: '10px'}}>IN UNDER</p>
        <p style={{color: '#ffffff', fontSize: '70px',fontFamily: 'initial',  margin: '10px'}}>5 MINUTES</p>
      </div>
      <Canvas
        camera={{
          fov: 35,
          position: [0, 150, 0]
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
