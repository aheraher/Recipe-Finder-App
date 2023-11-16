// import React from 'react';
// import styles from './CardComponent.module.css'; // Make sure to import the CSS file
// import Image from 'next/image';

// const CardComponent = ({ recipes }) => {
//   return (
//     <div className={styles.box}>
//       {recipes.map((recipe, index) => (
//         <div className={styles.card} key={index}>
//           {/* <img src={recipe.recipe.image} alt={recipe.recipe.label} /> */}
//           <Image src={recipe.recipe.image} width={200} height={150} alt={recipe.recipe.label} />
//           <h2>{recipe.recipe.label}</h2>
//           <h6>{recipe.dietLables} </h6>
//           <p>Additional details or description here...</p>
//           {/* You can include more details as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardComponent;

import React from 'react';
import styles from './CardComponent.module.css';
import Image from 'next/image';

const CardComponent = ({ recipes }) => {
  return (
    <div className={styles.box}>
      {recipes.map((recipe, index) => (
        <div className={styles.card} key={index}>
          <Image className= {styles.img} src={recipe.recipe.image} width={200} height={150} alt={recipe.recipe.label} />
          <h2>{recipe.recipe.label}</h2>
          <h6>{recipe.dietLables}</h6>
          <p>Additional details or description here...</p>
          {/* You can include more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
