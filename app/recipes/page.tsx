//RECIPES
import { Metadata } from "next";
import Image from "next/image";

import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { recipes } from "../data";

//Changing meta information of this page to something that better fits its use
export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Browse through a curated collection of recipes on Recipe Master. Filter recipes by category, ingredients, or dietary preferences to find the perfect dish for any occasion.",
};

const Recipes = () => {
  return (
    <div className="recipes">
      <div className="grid">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            img={recipe.img}
            pfp={recipe.pfp}
            name={recipe.name}
            time={recipe.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
