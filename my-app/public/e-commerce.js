const togglebar = document.getElementById("toggle-btn");
const category = document.getElementById("nav");
const bagShopping = document.getElementById("bagShopping");
const showpubcart = document.getElementById("show-pub-cart");
const Close = document.getElementById("close");
const closeBag = document.getElementById("closeBag");
const viewCart = document.getElementsByClassName("viewcart")[0];
const skipCart = document.getElementsByClassName("skipcart")[0];
const shoppingCart = document.getElementById("shoppingCart");
const bigBag = document.getElementById("bigBag");

togglebar.addEventListener("click", (eo) => {
  category.classList.toggle("active");
});

bagShopping.addEventListener("click", (eo) => {
  shoppingCart.style.transform = "translateX(0)";
});
closeBag.addEventListener("click", (eo) => {
  shoppingCart.style.transform = "translateX(330vh)";
});
Close.addEventListener("click", (eo) => {
  showpubcart.style.display = "none";
});
skipCart.addEventListener("click", (eo) => {
  showpubcart.style.display = "none";
});

const addToCart = document.querySelectorAll(".Add-to-Cart");

addToCart.forEach((item) => {
  item.addEventListener("click", (eo) => {
    item.setAttribute("disabled", "");
    item.innerHTML = "&#10004; Added";

    const card = item.parentElement.parentElement;
    const imgSrc = card
      .getElementsByClassName("product-image")[0]
      .getElementsByTagName("img")[0].src;
    const itemName = card
      .getElementsByClassName("product-info")[0]
      .getElementsByTagName("p")[0].innerText;
    const itemPrice = card
      .getElementsByClassName("product-info")[0]
      .getElementsByTagName("h3")[0]
      .innerText.replace("$", "");

    const cartItems = ` <div class="cartItems">
    <div class="theItem">
    <img src="${imgSrc}" alt="">
    
    <div class="itemInfo">
        <h3 class="nameItem">Name</h3>
        <p class="discItem">${itemName}</p>
    </div>
    </div>
    <div class="qte-price">
        <form>
            <h3>Quantity</h3>
            <input type="number" value="1" min="1" class="input">
        </form>
        <div class="prix">
            <h3>Price</h3>
            <h3 class="itemPrix">$ ${itemPrice}</h3>
        </div>
    
    </div>
    <i class="fa-solid fa-circle-xmark delete"></i>
    </div>
    `;
    bigBag.innerHTML += cartItems;

    upPrx();
  });
});

// *******************
const upPrx = () => {
  const allProduct = document.querySelectorAll(".cartItems");

  let total = 0;
  allProduct.forEach((item) => {
    const Prix = Number(
      item.getElementsByClassName("itemPrix")[0].innerText.replace("$", "")
    );
    const Quantity = Number(item.getElementsByTagName("input")[0].value);
    total = total + Prix * Quantity;
  });
  total = total.toFixed(2);
  document.getElementById("totalPrice").innerText = `$ ${total}`;
};

shoppingCart.addEventListener("change", () => {
  upPrx();
});

shoppingCart.addEventListener('click', (eo) => { 
  if (eo.target.classList.contains("delete")) {
    eo.target.parentElement.remove()
    upPrx()
  }







  const allProductInHome = document.querySelectorAll('.card1')

 allProductInHome.forEach(card => {
  const cardName = card.getElementsByTagName('p')[0].innerText
  const deletedCard = eo.target.parentElement.getElementsByClassName('discItem')[0].innerText

  if (deletedCard == cardName) {
    card.getElementsByClassName('Add-to-Cart')[0].removeAttribute('disabled')
    card.getElementsByClassName('Add-to-Cart')[0].innerText = 'Add To Cart'

  }
 });
 })


 
 