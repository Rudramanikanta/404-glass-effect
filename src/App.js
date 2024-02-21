import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';
import { Environment } from '@react-three/drei';

function App() {
  return (
    <div className="h-screen w-full ">
     <Canvas orthographic className='bg-black' camera={{position:[0,0,1],zoom:800}}>
      <Suspense>
        <Model></Model>
        <directionalLight intensity={3} position={[0, 0.1, 1]} />
        <Environment preset='city'></Environment>
      </Suspense>
     </Canvas>
    </div>
  );
}

export default App;
