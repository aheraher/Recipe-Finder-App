"use client"
import React, { useEffect, useState } from 'react';
import style from '@/app/recipes.module.css';
import Image from 'next/image';
import img from './../../public/img/avtar.png';
import dotsImg from './../../public/img/dots.png';
import { useRouter } from 'next/navigation';
import CardComponent from './componets/CardComponet';

// KeyId
const YOUR_APP_ID = '243fb870';
const YOUR_APP_KEY = 'd3d6eab73067709e355c91eab416ebc9';

let getData = async (recipe) => {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${recipe}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    console.log(recipe);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};


const Page = () => {
  useEffect(() => {
    getData();
    
  }, []);
  const [recipe, setRecipe] = useState('');
  const [recipesData, setRecipesData] = useState(null); // State to hold fetched data
  const router = useRouter();

  const handleSearch = async () => {
    try {
      const data = await getData(recipe);
      if (data) {
        setRecipesData(data);
      }
      // Update state with fetched data
      console.log(data);
    } catch (error) {
      // Handle error if needed
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <main>
        <div className={style.main}>
          <div className={style.left}>
            <h1>
              Learn Dada's
              <br />
              Magic Recipes
            </h1>
            <p>Experience a multicultural learning environment and brand new state of the art.</p>
            <input
              type="text"
              value={recipe}
              className={style.input}
              onChange={(e) => setRecipe(e.target.value)}
              placeholder="Pav Bhaji"
              required
            />
            <button type="submit" onClick={handleSearch} className={style.btn}>
              Search
            </button>
          </div>

          <div className={style.right}>
            <div className={style.line}></div>
            <Image src={img} width={500} height={500} alt="Picture of the author" className={style.hero} />
            <Image src={dotsImg} width={390} height={380} alt="Picture of the author" className={style.heroDots} />
          </div>
        </div>
      </main>
      {/* <CardComponent recipes={recipesData.hits} /> */}
      {recipesData && recipesData.hits && <CardComponent recipes={recipesData.hits} />}
    </div>
  );
};

export default Page;
