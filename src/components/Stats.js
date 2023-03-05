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
    <>
      <div className='stats'>
        <div className='stat'>
          <h2>
            <Number n={68} />+ <span className='special-count'>years</span>
          </h2>
          <p>Educational excellence</p>
        </div>
        <div className='stat'>
          <h2>
            <Number n={3000} />+
            <br />
          </h2>
          <p>Expert faculty</p>
        </div>
        <div className='stat'>
          <h2>
            <Number n={1000} />+
          </h2>
          <p>Applicant footprint </p>
        </div>
        <div className='stat'>
          <h2>
            <Number n={100} />+
          </h2>
          <p>Recruiters</p>
        </div>
        {/* <div className='stat'>
        <h2>
          <Number n={10} />+
        </h2>
        <p>Student Members</p>
      </div> */}
      </div>
    </>
  );
};

export default Stats;
