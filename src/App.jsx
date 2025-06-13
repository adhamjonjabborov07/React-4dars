import "./App.css";
import logo from "./assets/Group 20.png";
import polygon from "./assets/Polygon 1.png";
import opashka from "./assets/Intersect.png";
import burger from "./assets/burger.png";
import nimadur from "./assets/nimadur.png";
import ice from "./assets/ice.png";
import shar from "./assets/pngwing 7.png";
import salad1 from "./assets/1-salad.png";
import salad2 from "./assets/2-salad.png";
import salad3 from "./assets/3-salad.png";
import oshpaz from "./assets/oshpaz.png";
import odam1 from "./assets/1-odam.png";
import odam2 from "./assets/2-odam.png";
import odam3 from "./assets/3-odam.png";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import "flowbite";

function App() {
  return (
    <>
      <header>
        <nav className="bg-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="">
              <a href="index.html">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <nav className="flex items-center gap-6">
              <a
                href="#"
                className="text-black font-medium hover:text-green-500"
              >
                Home
              </a>
              <div className="relative">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-black bg-transparent hover:text-green-500 bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button"
                >
                  Menu
                  <svg
                    className="w-2.5 h-2.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2"
                >
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-black bg-transparent hover:text-green-500 bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button"
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2"
                >
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="#"
                className="text-black font-medium hover:text-green-500"
              >
                Offers
              </a>
            </nav>
            <div className="flex items-center gap-[20px] text-[20px]">
              <a href="#">
                {" "}
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
              <button className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-medium">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-4.553a2 2 0 00-2.828-2.828L12 7.172 7.275 2.447a2 2 0 00-2.828 2.828L9 10m6 4l-4.553 4.553a2 2 0 01-2.828-2.828L12 16.828l4.725 4.725a2 2 0 002.828-2.828L15 14"
                  />
                </svg>
                Contact
              </button>
            </div>
          </div>
        </nav>
        <div className="container">
          <nav className=" m-auto pt-[48px] flex items-center justify-around">
            <div className="div-left flex flex-col gap-[59px]">
              <h1 className="text-[62px] font-[800] w-[596px]">
                Dive into Delights Of Delectable{" "}
                <span className="text-green-500">Food</span>
              </h1>
              <p className="text-[26px]  font-[500] w-[596px]">
                Where Each Plate Weaves a Story of Culinary Mastery and
                Passionate Craftsmanship
              </p>
              <div className="flex items-center gap-[35px]">
                <button className="mol text-white text-[26px] p-[15px] pl-[47px] pr-[47px] rounded-[40px] bg-green-600 ">
                  Order Now
                </button>
                <p className="text-[26px]">Watch Video</p>
                <a
                  target="blank"
                  href="https://www.youtube.com/watch?v=w3BTHNog7AU "
                  className="polygon p-[22px] border-black"
                >
                  <img src={polygon} alt="" />
                </a>
              </div>
            </div>
            <img width="45%" src={opashka} alt="" />
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <section class="popular-categories">
            <p class="subtitle">Customer Favorites</p>
            <h2 class="title">Popular Categories</h2>

            <div class="categories">
              <div class="card">
                <div class="icon">
                  <img src={burger} alt="Main Dish" />
                </div>
                <h3>Main Dish</h3>
                <p>(86 dishes)</p>
              </div>

              <div class="card">
                <div class="icon">
                  <img src={nimadur} alt="Break Fast" />
                </div>
                <h3>Break Fast</h3>
                <p>(12 break fast)</p>
              </div>

              <div class="card">
                <div class="icon">
                  <img src={ice} alt="Dessert" />
                </div>
                <h3>Dessert</h3>
                <p>(48 dessert)</p>
              </div>

              <div class="card">
                <div class="icon">
                  <img src={shar} alt="Browse All" />
                </div>
                <h3>Browse All</h3>
                <p>(255 Items)</p>
              </div>
            </div>
          </section>
          <section class="menu-section">
            <div className="headingm-menu flex justify-between items-center">
              <div>
                <p class="subheading">SPECIAL DISHES</p>
                <h1 class="main-title">
                  Standout Dishes
                  <br />
                  From Our Menu
                </h1>
              </div>
              <div className="flex gap-[3px]">
                <button className="arrow">
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button className="arrow">
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div class="cards-container">
              <div class="dish-card">
                <div class="like-btn">
                  <i class="fa-regular fa-heart"></i>
                </div>
                <img src={salad1} alt="Fattoush salad" />
                <div className="nom">
                  <h3>Fattoush salad</h3>
                  <p>Description of the item</p>
                </div>
                <div class="info">
                  <span class="price">$24.00</span>
                  <span class="rating">⭐ 4.9</span>
                </div>
              </div>
              <div class="dish-card">
                <div class="like-btn">
                  <i class="fa-regular fa-heart"></i>
                </div>
                <img src={salad2} alt="Vegetable salad" />
                <div className="nom">
                  <h3>Vegetable salad</h3>
                  <p>Description of the item</p>
                </div>
                <div class="info">
                  <span class="price">$26.00</span>
                  <span class="rating">⭐ 4.6</span>
                </div>
              </div>
              <div class="dish-card">
                <div class="like-btn">
                  <i class="fa-regular fa-heart"></i>
                </div>
                <img src={salad3} alt="Egg vegi salad" />
                <div className="nom">
                  <h3>Egg vegi salad</h3>
                  <p>Description of the item</p>
                </div>
                <div class="info">
                  <span class="price">$23.00</span>
                  <span class="rating">⭐ 4.5</span>
                </div>
              </div>
            </div>
          </section>
          <section class="testimonial">
            <div class="chef-section">
              <div class="chef-img">
                <img src={oshpaz} alt="Chef Image" />
                <span class="chef-tag">Our Best Chef 😁</span>
                <span class="emoji emoji1">😋</span>
                <span class="emoji emoji2">🍕</span>
              </div>
            </div>
            <div class="content-section">
              <p class="label">TESTIMONIALS</p>
              <h2>What Our CustomersSay About Us</h2>
              <p class="review-text">
                “I had the pleasure of dining at Foodi last night, and I'm still
                raving about the experience! The attention to detail in
                presentation and service was impeccable”
              </p>
              <div class="feedback">
                <div class="avatars">
                  <img src={odam1} alt="Avatar 1" />
                  <img src={odam2} alt="Avatar 2" />
                  <img src={odam3} alt="Avatar 3" />
                </div>
                <div class="rating">
                  <strong>Customer Feedback</strong>
                  <br />
                  <span class="star">⭐</span> 4.9 (18.6k Reviews)
                </div>
              </div>
            </div>
          </section>
          <section class="services-section">
            <div class="left-content">
              <h4>OUR STORY & SERVICES</h4>
              <h1>Our Culinary JourneyAnd Services</h1>
              <p>
                Rooted in passion, we curate unforgettable dining experiences
                and offer exceptional services, blending culinary artistry with
                warm hospitality.
              </p>
              <button class="explore-btn">Explore</button>
            </div>
            <div class="right-cards">
              <div class="service-box">
                <img src={logo1} alt="Catering" class="icon" />
                <h3>CATERING</h3>
                <p>Delight your guests with our flavors and presentation</p>
              </div>
              <div class="service-box">
                <img src={logo2} alt="Fast Delivery" class="icon" />
                <h3>FAST DELIVERY</h3>
                <p>We deliver your order promptly to your door</p>
              </div>
              <div class="service-box active-box">
                <img src={logo3} alt="Online Ordering" class="icon" />
                <h3>ONLINE ORDERING</h3>
                <p>Explore menu & order with ease using our Online Ordering</p>
              </div>
              <div class="service-box">
                <img src={logo4} alt="Gift Cards" class="icon" />
                <h3>GIFT CARDS</h3>
                <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-section brand">
            <h2 class="logo">
              <span>F</span>OODI
            </h2>
            <p>Savor the artistry where every dish is a culinary masterpiece</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h3>Useful links</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Main Menu</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Menus</a>
              </li>
              <li>
                <a href="#">Reservation</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Contact Us</h3>
            <p>example@email.com</p>
            <p>+64 958 248 966</p>
            <p>Social media</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>Copyright © 2023 Dscode | All rights reserved</p>
        </div>
      </footer>

      <script
        src="https://kit.fontawesome.com/yourkitcode.js"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default App;
