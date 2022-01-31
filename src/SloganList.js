/* eslint-disable no-console */
import React from 'react';
import Slogan from './Slogan';

// export default function SloganList(props) {    
//   return (
//     <section className='slogan-list'>
//       <h2>Your slogans:</h2>
//       {/* This kind of component should be familiar by now. It takes in (as props) an array of slogans */}
//       {/* Then map over those slogans and for each slogan, render a Slogan component. Supply a key and a slogan as props to each Slogan component */}
//       {
//         <Slogan slogans={ props.slogans } />
//       }
//     </section>
//   );
// }

export default function SloganList({ slogans }) {
  console.log(slogans);
  const slogansEl = slogans.map((slogan, i) => {
    console.log(slogan, '||');
    return (
      <Slogan key={`${slogan} + ${i}`} slogan={slogan} />
    );
  }
  );
    
  // console.log(slogansEl, '||');
  return (
    <ul className='slogan-list'>
      {slogansEl}
    </ul>
  );
}
