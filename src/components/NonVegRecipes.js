import React from "react";
import "./non.css";

function NonVegRecipes() {
  return (
    <div>
      <header>
        <h1>My Indian Cookbook</h1>
        <p>Simple and Delicious Indian Non-Veg Recipes</p>
      </header>

      <main>
        {/* 1. Lamb Kebab */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Lamb-Kebabs-500x500.jpg')" }}>
          <summary>Lamb Kebab</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>500g minced lamb</li>
                <li>1 onion (grated)</li>
                <li>2 green chilies (chopped)</li>
                <li>2 tsp ginger-garlic paste</li>
                <li>1 tsp cumin powder</li>
                <li>1 tsp garam masala</li>
                <li>2 tbsp fresh coriander (chopped)</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Mix lamb with all spices and chopped greens.</li>
                <li>Shape onto skewers.</li>
                <li>Grill or pan-fry until fully cooked.</li>
                <li>Serve with mint chutney.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 2. Chicken Curry */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/chicken-curry-recipe.jpg')" }}>
          <summary>Chicken Curry</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>500g chicken (bone-in pieces)</li>
                <li>2 onions (sliced)</li>
                <li>2 tomatoes (chopped)</li>
                <li>2 tsp ginger-garlic paste</li>
                <li>1 tsp chili powder</li>
                <li>1 tsp turmeric</li>
                <li>1 tsp garam masala</li>
                <li>3 tbsp oil</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Sauté onions until golden.</li>
                <li>Add ginger-garlic paste and tomatoes, cook to form gravy.</li>
                <li>Add chicken pieces and spices, cook well.</li>
                <li>Add water, simmer until chicken is tender.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 3. Chicken Tikka Masala */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/chicken-tikka-masala.jpg')" }}>
          <summary>Chicken Tikka Masala</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>500g boneless chicken</li>
                <li>3 tbsp yogurt</li>
                <li>1 tbsp ginger-garlic paste</li>
                <li>1 tsp chili powder</li>
                <li>½ tsp turmeric</li>
                <li>½ tsp garam masala</li>
                <li>2 onions (pureed)</li>
                <li>2 tomatoes (pureed)</li>
                <li>2 tbsp cream</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Marinate chicken with yogurt, spices, ginger-garlic paste. Rest 1 hour.</li>
                <li>Grill or pan-fry chicken until charred.</li>
                <li>Cook onion-tomato puree with spices, form gravy.</li>
                <li>Add grilled chicken and cream, simmer 10 minutes.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 4. Butter Chicken */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.licious.in/blog/wp-content/uploads/2020/10/Murgh-Makhani-750x750.jpg')" }}>
          <summary>Butter Chicken</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>500g chicken (boneless)</li>
                <li>2 tbsp butter</li>
                <li>2 onions (pureed)</li>
                <li>3 tomatoes (pureed)</li>
                <li>2 tbsp cream</li>
                <li>1 tsp chili powder</li>
                <li>1 tsp garam masala</li>
                <li>1 tbsp ginger-garlic paste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Marinate and grill chicken.</li>
                <li>Sauté onion puree, add tomatoes and spices, cook until thick.</li>
                <li>Add grilled chicken and butter.</li>
                <li>Finish with cream, simmer 5 minutes.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 5. Fish Curry */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/fish-curry.jpg')" }}>
          <summary>Fish Curry</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>500g fish pieces</li>
                <li>1 onion</li>
                <li>2 tomatoes</li>
                <li>1 tbsp tamarind pulp</li>
                <li>1 tsp chili powder</li>
                <li>½ tsp turmeric</li>
                <li>1 sprig curry leaves</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Heat oil, fry onions and curry leaves.</li>
                <li>Add tomatoes, turmeric, chili, cook paste.</li>
                <li>Add tamarind pulp, water, bring to boil.</li>
                <li>Gently add fish, cook 10 minutes. Serve hot.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 6. Prawn Masala */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.cookingfromheart.com/wp-content/uploads/2018/11/Prawn-Masala-3.jpg')" }}>
          <summary>Prawn Masala</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>500g prawns (cleaned)</li>
                <li>2 onions (chopped)</li>
                <li>2 tomatoes</li>
                <li>1 tsp ginger-garlic paste</li>
                <li>2 tsp chili powder</li>
                <li>½ tsp turmeric</li>
                <li>2 tsp garam masala</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Sauté onions and ginger-garlic until golden.</li>
                <li>Add tomatoes and spices.</li>
                <li>Add prawns, cook until pink and done.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 7. Egg Curry */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2020/05/egg-curry.jpg')" }}>
          <summary>Egg Curry</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>5 boiled eggs</li>
                <li>2 onions</li>
                <li>2 tomatoes</li>
                <li>1 tsp chili powder</li>
                <li>½ tsp turmeric</li>
                <li>1 tsp garam masala</li>
                <li>2 tsp ginger-garlic paste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Heat oil, sauté onions until golden.</li>
                <li>Add ginger-garlic paste, tomatoes, spices.</li>
                <li>Add boiled eggs, simmer 10 minutes.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 8. Chicken Biryani */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/chicken-biryani.jpg')" }}>
          <summary>Chicken Biryani</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>2 cups basmati rice</li>
                <li>500g chicken</li>
                <li>1 cup yogurt</li>
                <li>2 onions (fried golden)</li>
                <li>Saffron soaked in milk</li>
                <li>2 tbsp biryani masala</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Cook rice until 70% done.</li>
                <li>Cook chicken in spiced yogurt gravy.</li>
                <li>Layer rice and chicken alternately.</li>
                <li>Top with saffron milk and fried onions. Dum cook 20 min.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 9. Mutton Curry */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2020/02/mutton-curry.jpg')" }}>
          <summary>Mutton Curry</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>500g mutton</li>
                <li>2 onions</li>
                <li>2 tomatoes</li>
                <li>2 tsp ginger-garlic paste</li>
                <li>2 tsp chili powder</li>
                <li>1 tsp garam masala</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Sauté onions and ginger-garlic paste.</li>
                <li>Add tomatoes and spices, cook into masala.</li>
                <li>Add mutton, pressure cook until tender.</li>
                <li>Simmer gravy and garnish with coriander.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 10. Keema Curry */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.licious.in/blog/wp-content/uploads/2020/12/Keema-Matar-750x750.jpg')" }}>
          <summary>Keema Curry</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>500g minced mutton/chicken</li>
                <li>1 cup green peas</li>
                <li>2 onions</li>
                <li>2 tomatoes</li>
                <li>2 tsp chili powder</li>
                <li>1 tsp garam masala</li>
                <li>1 tsp turmeric</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Sauté onions, add ginger-garlic paste and tomatoes.</li>
                <li>Add spices and keema, cook till brown.</li>
                <li>Add peas, simmer 15 minutes and serve.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* 11. Tandoori Chicken */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2024/09/Air-Fryer-Tandoori-Legs-Featured-2.jpg')" }}>
          <summary>Tandoori Chicken</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>500g chicken legs</li>
                <li>½ cup yogurt</li>
                <li>1 tbsp ginger-garlic paste</li>
                <li>1 tsp chili powder</li>
                <li>1 tsp garam masala</li>
                <li>1 tsp turmeric</li>
                <li>1 tbsp lemon juice</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Marinate chicken in yogurt, lemon juice, and spices for 4 hours.</li>
                <li>Preheat oven and place chicken on rack.</li>
                <li>Grill/bake at 200°C until cooked and slightly charred.</li>
                <li>Serve with onion rings and lemon wedges.</li>
              </ol>
            </li>
          </ul>
        </details>
      </main>

      <footer>
        <p>&copy; 2025 My Indian Cookbook</p>
      </footer>
    </div>
  );
}

export default NonVegRecipes;
