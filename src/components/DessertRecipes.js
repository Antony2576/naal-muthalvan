import React from "react";

function DessertRecipes() {
  return (
    <div>
      <header>
        <h1>My Indian Dessert Cookbook</h1>
        <p>Sweet and Traditional Indian Treats</p>
      </header>

      <main>
        {/* Gulab Jamun */}
        <details
          className="recipe"
          style={{
            backgroundImage:
              "url('https://talodfoods.com/cdn/shop/files/Gulab-Jamun-Creative_img_4f2bd570-4f11-4dba-8386-fa5a26392cd0.webp?v=1725262395&width=1500')",
          }}
        >
          <summary>Gulab Jamun</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Milk powder</li>
                <li>All-purpose flour</li>
                <li>Baking soda</li>
                <li>Ghee</li>
                <li>Milk</li>
                <li>Sugar</li>
                <li>Cardamom</li>
                <li>Rose water</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Make a soft dough with milk powder, flour, and milk.</li>
                <li>Roll into balls and fry on low flame.</li>
                <li>Prepare sugar syrup with cardamom and rose water.</li>
                <li>Soak fried balls in syrup.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Rasgulla */}
        <details className="recipe">
          <summary>Rasgulla</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Chenna (fresh paneer)</li>
                <li>Sugar</li>
                <li>Water</li>
                <li>Cardamom</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Knead chenna until smooth.</li>
                <li>Shape into small balls.</li>
                <li>Boil sugar and water to make syrup.</li>
                <li>Drop balls into syrup and cook until they double in size.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Kheer */}
        <details className="recipe">
          <summary>Kheer (Rice Pudding)</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Basmati rice</li>
                <li>Milk</li>
                <li>Sugar</li>
                <li>Cardamom</li>
                <li>Saffron</li>
                <li>Almonds & cashews</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Cook rice in milk until soft.</li>
                <li>Add sugar and stir continuously.</li>
                <li>Flavor with cardamom and saffron.</li>
                <li>Garnish with nuts before serving.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Jalebi */}
        <details className="recipe">
          <summary>Jalebi</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>All-purpose flour</li>
                <li>Yogurt</li>
                <li>Baking soda</li>
                <li>Sugar</li>
                <li>Saffron</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Make a fermented batter with flour and yogurt.</li>
                <li>Pipe spirals into hot oil.</li>
                <li>Fry until golden and crisp.</li>
                <li>Soak in saffron sugar syrup.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Rasmalai */}
        <details className="recipe">
          <summary>Rasmalai</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Rasgulla</li>
                <li>Milk</li>
                <li>Sugar</li>
                <li>Saffron</li>
                <li>Pistachios</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Reduce milk to a thick consistency.</li>
                <li>Add sugar and saffron.</li>
                <li>Slightly squeeze rasgullas and soak in thickened milk.</li>
                <li>Garnish with pistachios.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Sooji Halwa */}
        <details className="recipe">
          <summary>Sooji Halwa</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Semolina (sooji)</li>
                <li>Ghee</li>
                <li>Sugar</li>
                <li>Water or milk</li>
                <li>Cardamom</li>
                <li>Cashews & raisins</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Roast semolina in ghee until golden.</li>
                <li>Add hot water or milk.</li>
                <li>Mix sugar and cardamom.</li>
                <li>Top with roasted cashews and raisins.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Mysore Pak */}
        <details className="recipe">
          <summary>Mysore Pak</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Besan (chickpea flour)</li>
                <li>Ghee</li>
                <li>Sugar</li>
                <li>Water</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Roast besan in ghee.</li>
                <li>Make sugar syrup.</li>
                <li>Add roasted besan and ghee gradually.</li>
                <li>Pour mixture, set, and cut into pieces.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Modak */}
        <details className="recipe">
          <summary>Modak</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Rice flour</li>
                <li>Coconut</li>
                <li>Jaggery</li>
                <li>Cardamom</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Prepare filling with coconut, jaggery, and cardamom.</li>
                <li>Knead rice flour dough.</li>
                <li>Stuff filling into dough and shape as modaks.</li>
                <li>Steam until cooked.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Sandesh */}
        <details className="recipe">
          <summary>Sandesh</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Paneer</li>
                <li>Sugar</li>
                <li>Cardamom</li>
                <li>Pistachios (for garnish)</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Knead paneer until smooth.</li>
                <li>Mix with sugar and cardamom.</li>
                <li>Shape into small rounds or molds.</li>
                <li>Garnish with pistachios.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Phirni */}
        <details className="recipe">
          <summary>Phirni</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Ground rice</li>
                <li>Milk</li>
                <li>Sugar</li>
                <li>Saffron</li>
                <li>Cardamom</li>
                <li>Almonds</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Soak and grind rice into a paste.</li>
                <li>Simmer in boiling milk.</li>
                <li>Add sugar, cardamom, and saffron.</li>
                <li>Chill and garnish with nuts.</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Malpua */}
        <details className="recipe">
          <summary>Malpua</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>All-purpose flour</li>
                <li>Fennel seeds</li>
                <li>Milk</li>
                <li>Sugar syrup</li>
                <li>Ghee (for frying)</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Make a batter of flour, milk, and fennel seeds.</li>
                <li>Pour ladlefuls into hot ghee and shallow fry.</li>
                <li>Dip fried pancakes into sugar syrup.</li>
                <li>Serve warm with rabri (optional).</li>
              </ol>
            </li>
          </ul>
        </details>

        {/* Shrikhand */}
        <details className="recipe">
          <summary>Shrikhand</summary>
          <ul>
            <li>
              <strong>Ingredients:</strong>
              <ul>
                <li>Hung curd</li>
                <li>Powdered sugar</li>
                <li>Cardamom</li>
                <li>Saffron</li>
                <li>Pistachios</li>
              </ul>
            </li>
            <li>
              <strong>Steps:</strong>
              <ol>
                <li>Whisk hung curd until smooth.</li>
                <li>Add powdered sugar, saffron, and cardamom.</li>
                <li>Mix well and chill.</li>
                <li>Serve garnished with pistachios.</li>
              </ol>
            </li>
          </ul>
        </details>
      </main>

      <footer>
        <p>&copy; 2025 My Indian Dessert Cookbook</p>
      </footer>
    </div>
  );
}

export default DessertRecipes;
