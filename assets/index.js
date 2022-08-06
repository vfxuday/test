// Creates a product card
function createProductCard(product) {
	
  // Create a div element
    // Ref https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  const card = document.createElement("div"); 
  // add class product to card div element
	card.className='product'
    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/className
  // add an attribute of name data-id and value product id
	card.setAttribute("data-id", product.id)
    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

  // create h3 element
  const title = document.createElement("h3");
  // set its inner text as product name
	const productName = document.createTextNode(product.name);
	title.appendChild(productName)
    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
  // set its class name as product__name
	title.className="product__name"

  // Create an image element
  const image = document.createElement("img");
  // Set its src attribute
  // Set its class name as 'product__image'
	image.className='product__image'
	image.setAttribute("src", product.image)

  // Create a p element for description
  const description = document.createElement("p");
  // Set its inner text
  // Set its className as 'product__description'
	description.innerText =product.description
	description.className="product__description"

  // create a span element for price
  const price = document.createElement("span");
  // set its text as product's price
	price.innerText=product.price.toLocaleString()
  // Hint: for comma separated representation use 
  //       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_tolocalestring

  // Set class name as 'product__price';
	price.className="product__price"

  // Create a div for tags & set its className as 'product__tags'
  const tags = document.createElement("div");

  // Iterate over product colors array & render each color
  product.colors.forEach((color) => {
    // Create a span element for specific color
    const elem = document.createElement("span");
    // Set its className as 'product__tag';
	  elem.className="product__tag"
    // Set an attribute data-tag-color with value color
	 elem.setAttribute("data-tag-color",color)
    // Set its inner Text as color
 	elem.innerText=color
    // Append that to parent tags element
    tags.appendChild(elem);
  });


  // Render the card in the given order i.e. iterate over them & append them as a child one by one
  [image, title, description, price, tags]
	card.append(image);
	card.append(title);
	card.append(description);
	card.append(price);
	card.append(tags);

  // return the card
  return card;
}


// Load the list
function renderAllCards(cardList) {
  // First select the root element
renderRoot = document.getElementById("root")
  // First remove existing children so that we don't append to the 
  // existing list. DO NOT remove this
  renderRoot.innerHTML = '';
		

  // Now iterate over the list passed as a param to render all the cards
	cardList.forEach(createProduct)
	
	

	function createProduct(cardList ,i){
		
		card=createProductCard(cardList)
	renderRoot.appendChild(card);	
	}
	
	//console.log(card)
    // Create a card element by calling createProduct method, passing the list
    // item as a parameter

    // Append that child
     

}
