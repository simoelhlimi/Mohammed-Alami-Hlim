


function App() {
  return (
<>
  <header>
    <div className="top-header">
      <nav className="top">
        <span>Free Shipping For Orders Over 100$</span>
        <ul className="top-icons">
          <li>
            <a href="">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="mid-header">
      <nav className="mid">
        <div className="brand">
          <h1>Brand</h1>
        </div>
        <div className="search-box">
          <input type="search" placeholder="Search" />
        </div>
        <ul className="navbar">
          <li>
            <a href="">
              <i className="fa-solid fa-magnifying-glass" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-regular fa-heart" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-circle-user" />
            </a>
          </li>
          <li>
            <i className="fa-sharp fa-solid fa-bag-shopping" id="bagShopping" />
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-bars" id="toggle-btn" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="bottom-header">
      <nav className="bottom" id="nav">
        <ul>
          <li>
            <a href="">New</a>
          </li>
          <li>
            <a href="">Best Sellers</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Kids</a>
          </li>
          <li>
            <a href="">Sale</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div className="hero-image">
    <div className="hero-text">
      <h1>I am John Doe</h1>
      <p>And I'm a Photographer</p>
      <button>Hire me</button>
    </div>
  </div>
  <section className="products">
    <h1>New</h1>
    <div className="cards">
      <div className="card1">
        <div className="product-image">
          <img src="imges/daniel-storek-JM-qKEd1GMI-unsplash.jpg" alt="" />
        </div>
        <div className="product-info">
          <div className="stars">
            <li>
              {" "}
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <span>102</span>
            </li>
          </div>
          <h3>$ 119</h3>
          <p>Storek</p>
          <button className="Add-to-Cart">Add To Cart</button>
        </div>
      </div>
      {/* /*xiaicni* / */}
      <div className="card1">
        <div className="product-image">
          <img
            src="imges/shardar-tarikul-islam-tIQ2t64FKy8-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="product-info">
          <div className="stars">
            <li>
              {" "}
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <span>102</span>
            </li>
          </div>
          <h3>$ 67.99</h3>
          <p>Sharder</p>
          <button className="Add-to-Cart">Add To Cart</button>
        </div>
      </div>
      {/* ********* */}
      {/* ******************** */}
      <div className="card1">
        <div className="product-image">
          <img src="imges/rachit-tank-2cFZ_FB08UM-unsplash.jpg" alt="" />
        </div>
        <div className="product-info">
          <div className="stars">
            <li>
              {" "}
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <span>102</span>
            </li>
          </div>
          <h3>$ 49.99</h3>
          <p>Rachit-Tank</p>
          <button className="Add-to-Cart">Add To Cart</button>
        </div>
      </div>
      {/* ************************ */}
      {/* ******************** / */}
      <div className="card1">
        <div className="product-image">
          <img src="imges/revolt-164_6wVEHfI-unsplash.jpg" alt="" />
        </div>
        <div className="product-info">
          <div className="stars">
            <li>
              {" "}
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <span>102</span>
            </li>
          </div>
          <h3>$ 17.00</h3>
          <p>Watch</p>
          <button className="Add-to-Cart">Add To Cart</button>
        </div>
      </div>
      {/*  ****************/}
      <div className="card1">
        <div className="product-image">
          <img src="imges/imani-bahati-LxVxPA1LOVM-unsplash.jpg" alt="" />
        </div>
        <div className="product-info">
          <div className="stars">
            <li>
              {" "}
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <span>102</span>
            </li>
          </div>
          <h3>$ 19</h3>
          <p>Watch</p>
          <button className="Add-to-Cart">Add To Cart</button>
        </div>
      </div>
      {/* **************** */}
      <div className="card1">
        <div className="product-image">
          <img src="imges/daniel-korpai-hbTKIbuMmBI-unsplash.jpg" alt="" />
        </div>
        <div className="product-info">
          <div className="stars">
            <li>
              {" "}
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <span>102</span>
            </li>
          </div>
          <h3>$ 17.00</h3>
          <p>Watch</p>
          <button className="Add-to-Cart">Add To Cart</button>
        </div>
      </div>
      {/* **************** */}
      <div className="card1">
        <div className="product-image">
          <img src="imges/c-d-x-PDX_a_82obo-unsplash.jpg" alt="" />
        </div>
        <div className="product-info">
          <div className="stars">
            <li>
              {" "}
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <span>102</span>
            </li>
          </div>
          <h3>$ 17.00</h3>
          <p>Watch</p>
          <button className="Add-to-Cart">Add To Cart</button>
        </div>
      </div>
      {/* **************** */}
      <div className="card1">
        <div className="product-image">
          <img src="imges/laurenz-heymann-al6s6JpnZis-unsplash.jpg" alt="" />
        </div>
        <div className="product-info">
          <div className="stars">
            <li>
              {" "}
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-star" />
            </li>
            <li>
              <span>102</span>
            </li>
          </div>
          <h3>$ 17.00</h3>
          <p id="name">Watch</p>
          <button className="Add-to-Cart">Add To Cart</button>
        </div>
      </div>
      {/* ******************* */}
    </div>
  </section>
  <div className="show-pub-cart" id="show-pub-cart">
    <div className="show-pub-cart-content">
      <p>
        A new item has been added to your Shopping Cart. You now have{" "}
        <span>#</span> items in your Shopping Cart
      </p>
      <i className="fa-solid fa-xmark" id="close" />
      <div className="btns">
        <button className="viewcart">View Shopping Cart</button>
        <button className="skipcart">Continue Shopping</button>
      </div>
    </div>
  </div>
  {/* bagShopping *********/}
  <div className="shoppingCart" id="shoppingCart">
    <i className="fa-solid fa-xmark" id="closeBag" />
    <h1>Shopping Cart</h1>
    <article id="bigBag"></article>
    <article id="totalParent">
      <button>Buy Now</button>
      <h3 id="totalPrice">0</h3>
    </article>
  </div>
  {/* ****************** */}
</>

  );
}

export default App;
