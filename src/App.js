import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import EgoModel from './component';

import './App.css';

function App() {
  return (
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
        <EgoModel />
      </Stage>
    </Canvas>
  );
}

export default App;
