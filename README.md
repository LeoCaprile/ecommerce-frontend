# Ecommerce-frontend

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Folder Structure](#folder_structure)
- [Layout](#layout_example)
- [Javascript](#javascript)

## About <a name = "about"></a>

Ecommerce web made with vanilla js and Vite bundler, deploy on vercel.

### Tecnologies used:

- Tailwind css (css framework, like bootstrap)
- Vite (bundler, similar to webpack)
- Vanilla js.

### Explanation about the exercise

The excersice consist in making a functional ecommerce frontend and backend.
This repository is the frontend part of the application, you can check the backend repository <a href="https://github.com/LeoCaprile/ecommerce-backend">**here**</a>.

### Process before coding

- First thing i did it was making a boilerplate with Vite bundler tool.
- Install the dependencies i will use, in this case tailwind css, post css, autoprefixer. All of these are Dev dependencies.
- Then i make the folder structure that i will use along this proyect.

- Configure all dependencies, testing that they work on production.
- All set to start coding.

### Process during coding.

- Start developing app in local enviroment.

- Make a branch on git called "navbar".

- Start making the esqueleton of the navbar in "index.html".

- Added logo, categories dropdown, search bar, cart icon.

- Make a branch on git called "products-container".

- Making the template for the products, and add styles to the product container using grid.

- Add the logic to render products inside container.

- Add rendering products by categories.

- Add render products by discounts.

- Create shopping-cart and its functionalities.

- Make the design responsive.

- Make details fixes.
<hr>

## Getting Started <a name = "getting_started"></a>

For get working in your local enviroment:

`git clone (this repo)`

`cd (this repo)`

`npm install`

`npm run dev`

<hr>

## Folder Structure <a name = "folder_structure"></a>

```
src
|
│   index.html
│   main.js
│   styles.css
│
├───assets
│       imagen-no-encontrada.png
│
├───constants
│       index.js
│
└───js
        countItemsOnCart.js
        getAllProducts.js
        getCategories.js
        getDiscounts.js
        renderProducts.js
        searchBar.js
        shopingCart.js

```

Folders description:

- "src" folder contains the aplication.
- "assets" folder contains the images, svg, icons, etc.
- "constants" contains the URL Apis.
- "js" contains all the javascript files that reference by their name the function that have in the application.

Files descriptions:

- "index.html" file that contains base html of the app.
- "styles.css" file that contains reference to tailwind css.
- "main.js" contains all imports from the js folders.

<hr>

## Layout example <a name = "layout_example"></a>

Desktop layout:

![Desktop](https://i.imgur.com/vFmwZlX.png)

Mobile layout:

![Mobile](https://i.imgur.com/67wd8nI.png)

<hr>

## Javascript <a name = "javascript"></a>

### Imports:

- This app uses ES6+ "Import" statement to import files from one to the other.

### Files:

- The ".js" files are named by the use. For example:
  "getAllProducts.js" this file renders allproducts in the products container.

### HTTP requests:

- This app use the FetchAPI to make asychronous requests, and uses async/await statements to handle Promises.

### Functions:

- **renderProducts( name, category, price )**:
  This functions render all products gathered from the Api without any parameters added, and if a parameter is added returns the elements by the parameters. Render the elements using a templateString and looping to the array of objects that the fetchAPI returns. Using ES6+ syntax, async and await.

- **getCategories()**: This one renders the dropdown menu with all categories, in case another category is added in the database this one gonna be added automaticlly. Also when a category is pressed on the
  dropdown menu it's gonna render the products based on it's category.

- **fetchDiscounts()**: Render all product that have discounts. Does the same as renderProducts but from another endpoint.

- **renderCart()**: Render the items inside the cart when this function is called.

- **renderCounter()**: Render the counter above the cart icon, that counts how many items are inside the cart.
