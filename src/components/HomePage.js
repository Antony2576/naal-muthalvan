import React from "react";
import "./home.css";

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <h1>
          <img
            src="/logo.jpg" // move image to public/logo.jpg
            className="one"
            alt="Simple Cookbook logo"
          />
          Simple Cookbook
        </h1>
        <p>Delicious, easy-to-follow recipes for every home cook</p>
      </div>

      {/* Featured Recipes */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Recipes</h2>
        <div className="row g-4">
          {/* Vegetarian */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://www.realsimple.com/thmb/2ixrIIlE-44L1MypGHIs2TqIQYk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-recipes-1672e2b4f9104ed3b3867a2a14889ce9.jpg"
                className="card-img-top"
                alt="Vegetarian"
              />
              <div className="card-body">
                <h5>
                  <a href="/vegetarian" className="ant">VEGETARIAN</a>
                </h5>
                <p className="card-text">
                  A special meal, in the context of airline travel or other services.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Vegetarian */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://spicecravings.com/wp-content/uploads/2024/09/Air-Fryer-Tandoori-Legs-Featured-2.jpg"
                className="card-img-top"
                alt="Non vegetarian"
              />
              <div className="card-body">
                <h5>
                  <a href="/non-vegetarian" className="ant">NON VEGETARIAN</a>
                </h5>
                <p className="card-text">Creamy and spicy chicken curry.</p>
              </div>
            </div>
          </div>

          {/* Dessert */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOKorD51LP7Sm3vJ21UxVIYPyRFnu0mtB1Q&s"
                className="card-img-top"
                alt="Dessert"
              />
              <div className="card-body">
                <h5>
                  <a href="/dessert" className="ant">DESSERT</a>
                </h5>
                <p className="card-text">Desserts are sweet courses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="container py-5">
        <h2 className="text-center mb-4">About This Cookbook</h2>
        <p className="text-center">
          This website is a collection of simple, home-cooked recipes that are easy
          to follow and require minimal ingredients. Whether you're a beginner or
          an experienced chef, there's something here for you!
        </p>
      </div>

      {/* Contact */}
      <div className="container py-5" id="contact">
        <h2 className="text-center mb-4">Contact</h2>
        <p className="text-center">
          Have a recipe suggestion? Email us at{" "}
          <a href="mailto:mycookbook@example.com">mycookbook@example.com</a>
        </p>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 — Thank you for visiting our website</p>
      </footer>
    </div>
  );
}

export default HomePage;
