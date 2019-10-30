
import React from 'react';
import Lottie from 'react-lottie';
import halloweenSmashdown from '../../../assets/lotties/halloween-smashdown.json';

const HeavyWithAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: halloweenSmashdown,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <h1>Lottie</h1>
      <p>Base animation free from external manipulation</p>
      <Lottie options={defaultOptions}
          height={400}
          width={400} />
    </div>
  );
};

export default HeavyWithAnimation;
