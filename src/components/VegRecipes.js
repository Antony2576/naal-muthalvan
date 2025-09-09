import React from "react";
import "./veg.css";

function VegRecipes() {
  return (
    <div>
      <header>
        <h1>My Indian Cookbook</h1>
        <p>Simple and Delicious Indian Recipes</p>
      </header>

      <main>
        {/* Paneer Butter Masala */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.jpg')" }}>
          <summary>Paneer Butter Masala</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>200g paneer (cubed)</li>
                <li>3 medium tomatoes (pureed)</li>
                <li>2 onions (finely chopped)</li>
                <li>2 tbsp butter</li>
                <li>2 tbsp cream</li>
                <li>8–10 cashews (soaked)</li>
                <li>1 tsp ginger-garlic paste</li>
                <li>1 tsp red chili powder</li>
                <li>1 tsp garam masala</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Sauté onions in butter until golden.</li>
                <li>Add ginger-garlic paste, cook for a minute.</li>
                <li>Mix in tomato puree and cook until oil separates.</li>
                <li>Add soaked cashew paste and spices, cook 5 minutes.</li>
                <li>Stir in paneer cubes and cream, simmer 2 minutes.</li>
                <li>Serve hot with naan or rice.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Chole */}
        <details className="recipe" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1182758935/photo/homemade-indian-chickpea-chana-masala.jpg?s=612x612&w=0&k=20&c=t9hk82loyPEu37eFnA8v-oKGscX4_ektoiwUsXVsegs=')" }}>
          <summary>Chole (Chickpea Curry)</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>1 cup chickpeas (soaked overnight)</li>
                <li>2 onions (chopped)</li>
                <li>2 tomatoes (pureed)</li>
                <li>1 tsp ginger-garlic paste</li>
                <li>2 green chilies</li>
                <li>2 tsp chole masala</li>
                <li>1 tsp turmeric powder</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Pressure cook soaked chickpeas until soft.</li>
                <li>Sauté onions until golden and add ginger-garlic paste.</li>
                <li>Add tomato puree and spices, cook well.</li>
                <li>Mix chickpeas and simmer 15 minutes.</li>
                <li>Serve with bhature or rice.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Aloo Gobi */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2020/09/aloo-gobi-recipe.jpg')" }}>
          <summary>Aloo Gobi</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>2 potatoes (diced)</li>
                <li>2 cups cauliflower florets</li>
                <li>1 onion (chopped)</li>
                <li>2 tomatoes (chopped)</li>
                <li>1 tsp cumin seeds</li>
                <li>1 tsp turmeric powder</li>
                <li>1 tsp red chili powder</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Heat oil, add cumin seeds and onions.</li>
                <li>Add tomatoes and spices, sauté well.</li>
                <li>Add potatoes and cauliflower, mix thoroughly.</li>
                <li>Cover and cook until vegetables are tender.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Palak Paneer */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.cookwithmanali.com/wp-content/uploads/2014/10/Palak-Paneer-Recipe-500x375.jpg')" }}>
          <summary>Palak Paneer</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>200g paneer (cubed)</li>
                <li>3 cups spinach (blanched and pureed)</li>
                <li>1 onion (finely chopped)</li>
                <li>1 tsp ginger-garlic paste</li>
                <li>1 tomato (chopped)</li>
                <li>½ tsp garam masala</li>
                <li>2 tbsp cream</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Sauté onions and ginger-garlic paste.</li>
                <li>Add tomato and cook until mushy.</li>
                <li>Stir in spinach puree and garam masala.</li>
                <li>Add paneer cubes, simmer 5 minutes.</li>
                <li>Finish with cream before serving.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Baingan Bharta */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/baingan-bharta-recipe-500x500.jpg')" }}>
          <summary>Baingan Bharta</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>1 large eggplant (roasted and mashed)</li>
                <li>2 onions (chopped)</li>
                <li>2 tomatoes (chopped)</li>
                <li>2 green chilies</li>
                <li>1 tsp ginger</li>
                <li>1 tsp cumin seeds</li>
                <li>½ tsp turmeric</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Roast eggplant until skin blisters, peel and mash.</li>
                <li>Sauté onions, chilies, cumin, and ginger.</li>
                <li>Add tomatoes and cook until soft.</li>
                <li>Mix in mashed eggplant and simmer for 5 minutes.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Rajma */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.cookwithmanali.com/wp-content/uploads/2020/04/Rajma-Masala-480x270.jpg')" }}>
          <summary>Rajma (Kidney Bean Curry)</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>1 cup kidney beans (soaked overnight)</li>
                <li>2 onions</li>
                <li>2 tomatoes</li>
                <li>1 tsp ginger-garlic paste</li>
                <li>1 tsp rajma masala</li>
                <li>½ tsp garam masala</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Pressure cook soaked beans until soft.</li>
                <li>Sauté onions and ginger-garlic paste until golden.</li>
                <li>Add tomatoes and spices, cook well.</li>
                <li>Mix beans with gravy, simmer 20 minutes.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Vegetable Pulao */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianveggiedelight.com/wp-content/uploads/2022/01/vegetable-pulao-featured.jpg')" }}>
          <summary>Vegetable Pulao</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>2 cups basmati rice</li>
                <li>1 cup mixed vegetables (carrot, peas, beans)</li>
                <li>1 onion</li>
                <li>2 bay leaves</li>
                <li>4–5 cloves</li>
                <li>1 tsp cumin seeds</li>
                <li>2 tbsp ghee</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Rinse and soak rice for 20 minutes.</li>
                <li>Sauté onions, spices, and vegetables in ghee.</li>
                <li>Add rice, mix gently, add water.</li>
                <li>Cover and cook until rice is fluffy.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Dhokla */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/khaman-dhokla-recipe-1.jpg')" }}>
          <summary>Khaman Dhokla</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>1 cup gram flour</li>
                <li>½ cup yogurt</li>
                <li>1 tsp fruit salt (eno)</li>
                <li>1 tsp turmeric</li>
                <li>1 tsp sugar</li>
                <li>Salt to taste</li>
                <li>Tempering: 1 tsp mustard, curry leaves, green chilies</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Mix gram flour, yogurt, turmeric, sugar, salt, and water.</li>
                <li>Add eno just before steaming.</li>
                <li>Steam for 15 minutes until fluffy.</li>
                <li>Temper with mustard and curry leaves.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Masoor Dal */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/masoor-dal-recipe.jpg')" }}>
          <summary>Masoor Dal</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>1 cup red lentils</li>
                <li>1 onion</li>
                <li>1 tomato</li>
                <li>4 garlic cloves</li>
                <li>1 tsp turmeric</li>
                <li>1 tsp cumin seeds</li>
                <li>Salt to taste</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Boil lentils until soft.</li>
                <li>Prepare tempering with cumin, garlic, onions, and tomato.</li>
                <li>Add lentils, mix and simmer.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Veg Biryani */}
        <details className="recipe" style={{ backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/veg-biryani.jpg')" }}>
          <summary>Veg Biryani</summary>
          <ul>
            <li><strong>Ingredients:</strong>
              <ul>
                <li>2 cups basmati rice</li>
                <li>1 cup chopped vegetables (peas, beans, carrots)</li>
                <li>1 onion (fried golden)</li>
                <li>½ cup yogurt</li>
                <li>½ tsp saffron soaked in milk</li>
                <li>2 tbsp biryani masala</li>
                <li>Whole spices (bay leaf, cloves, cinnamon)</li>
              </ul>
            </li>
            <li><strong>Steps:</strong>
              <ol>
                <li>Cook rice until 70% done.</li>
                <li>Cook yogurt with spices and vegetables.</li>
                <li>Layer rice and masala alternately in a pan.</li>
                <li>Add saffron milk and fried onions on top.</li>
                <li>Dum cook for 20 minutes on low flame.</li>
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

export default VegRecipes;
