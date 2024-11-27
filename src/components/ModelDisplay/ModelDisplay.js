// import React from 'react'
// import './ModelDisplay.css'

// const ModelDisplay = () => {
//   return (
//     <div>
//         <div className='model-header'>
//             <h1>ModelDisplay</h1>
//         </div>
        
//     </div>
//   )
// }

// export default ModelDisplay


import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './ModelDisplay.css';

const Model = () => {
  // Updated path to point to the public directory
  const { scene } = useGLTF('/scene.gltf');
  return <primitive object={scene} />;
};

const ModelDisplay = () => {
  return (
    <div className="model-display">
      <div className="model-header">
        <h1>Model Display</h1>
      </div>
      <Canvas className="canvas">
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelDisplay;
