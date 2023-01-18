import React from 'react';
import { useSpring, animated } from '@react-spring/web';
const Stats = () => {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  return (
    <div className='stats'>
      <div className='stat'>
        <h2>
          <Number n={13000} />+
        </h2>
        <p>Student Members</p>
      </div>
      <div className='stat'>
        <h2>
          <Number n={150} />+
        </h2>
        <p>Onboarded Companies</p>
      </div>
      <div className='stat'>
        <h2>
          <Number n={100000} />+
        </h2>
        <p>Connections Made</p>
      </div>
      <div className='stat'>
        <h2>
          <Number n={130} />+
        </h2>
        <p>Community Events</p>
      </div>
      {/* <div className='stat'>
        <h2>
          <Number n={10} />+
        </h2>
        <p>Student Members</p>
      </div> */}
    </div>
  );
};

export default Stats;
