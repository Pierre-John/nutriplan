declare const Swal: any;

(function () {
  //   ________________________  Meals & Recipes Page variables  _________________________________

  let mealsRecipesNavLink = document.getElementById("mealsRecipes");
  let productScannerNavLink = document.getElementById("productScanner");
  let foodLogNavLink = document.getElementById("foodLog");

  let mealsCategoriesSection = document.getElementById(
    "meal-categories-section",
  );
  let mealsRecipesSection = document.getElementById("all-recipes-section");
  let mealsSearchFilterSection = document.getElementById(
    "search-filters-section",
  );
  let productsScannerSection = document.getElementById("products-section");
  let foodLogSection = document.getElementById("foodlog-section");
  let mealDetailsSection = document.getElementById("meal-details");
  let headerHeading = document.querySelector(".heading");
  let headerHeadingP = document.querySelector(".heading-p");
  let listViewBtn = document.getElementById("list-view-btn");
  let gridViewBtn = document.getElementById("grid-view-btn");
  let recipesGrid = document.getElementById("recipes-grid");
  let categoriesGrid = document.getElementById("categories-grid");
  let searchInput = document.getElementById("search-input") as HTMLInputElement;
  let areaBtns = document.getElementById("areas-btns");
  let recipesCount = document.getElementById("recipes-count");
  let imageCalories = document.getElementById("hero-calories");
  let nutritionFactsPart = document.getElementById("nutrition-facts-container");

  //   ________________________  Product Scanner Page variables  _________________________________

  let productSearchInp = document.getElementById(
    "product-search-input",
  ) as HTMLInputElement;
  let productSearchBtn = document.getElementById("search-product-btn");
  let barcodeInp = document.getElementById("barcode-input") as HTMLInputElement;
  let barcodeBtn = document.getElementById("lookup-barcode-btn");
  let productsCount = document.getElementById("products-count");
  let productCategories = document.getElementById("product-categories");
  let productsGrid = document.getElementById("products-grid");
  let addProductModelBtn = document.querySelector(".add-product-to-log");
  let productModelHeaderPart = document.querySelector(".product-model-header");
  let productModelNutrientsPart = document.querySelector(
    ".product-model-nutrients-facts",
  );

  let mealDetailsImage = document.getElementById("meal-details-img");
  let mealCategoryDetails = document.querySelector(".meal-category");
  let mealCountryDetails = document.querySelector(".meal-country");
  let mealNameDetails = document.getElementById("meal-name");
  let backBtnToMealsRecipes = document.getElementById("back-to-meals-btn");
  let youtubeSection = document.getElementById("youtube-section");
  let youtubeVideoSrc = document.querySelector(
    ".youtube-video",
  ) as HTMLIFrameElement;
  let logMealBtn = document.getElementById("log-meal-btn");
  let logMealSection = document.getElementById("log-meal-modal");
  let cancelLogMeal = document.getElementById("cancel-log-meal");
  let confirmLogMeal = document.getElementById("confirm-log-meal");
  let logMealImage = document.querySelector(".log-meal-img");
  let logMealRecipeName = document.querySelector(".log-meal-recipe-name");
  let productDetailModelSection = document.getElementById(
    "product-detail-modal",
  );

  let decreaseServingBtn = document.getElementById("decrease-servings");
  let mealServingInp = document.getElementById(
    "meal-servings",
  ) as HTMLInputElement;
  let increaseServingBtn = document.getElementById("increase-servings");
  let foodLogDateHeader = document.getElementById("foodlog-date");
  let emptyProductSection = document.getElementById("products-empty");

  //________________________________________________________________________________

  //____________________________________ handle toggle & main loading _________________________________________

  //____________________________________________________________________________________________

  document
    .getElementById("header-menu-btn")
    ?.addEventListener("click", function () {
      document.getElementById("sidebar-overlay")!.classList.add("active");
      document.getElementById("sidebar")!.classList.add("open");
    });

  document
    .getElementById("sidebar-close-btn")
    ?.addEventListener("click", function () {
      document.getElementById("sidebar-overlay")!.classList.remove("active");
      document.getElementById("sidebar")!.classList.remove("open");
    });

      window.addEventListener("load", () => {
    document.getElementById("app-loading-overlay")?.classList.add("hidden");
  });

  //________________________________________________________________________________

  //____________________________________ hash routing _________________________________________

  //____________________________________________________________________________________________

  function navigateTo(route: string) {
    window.location.hash = `#${route}`;
  }
  function renderRoute() {
    if (!window.location.hash) {
      navigateTo("/home");
      return;
    }

    let currentPath = window.location.hash.slice(1);

    if (currentPath === "/home") {
      mealsCategoriesSection!.classList.remove("hidden");
      mealsRecipesSection!.classList.remove("hidden");
      mealsSearchFilterSection!.classList.remove("hidden");
      productsScannerSection!.classList.add("hidden");
      foodLogSection!.classList.add("hidden");
      mealDetailsSection!.classList.add("hidden");
      logMealSection!.classList.add("hidden");
      productDetailModelSection!.classList.add("hidden");
      headerHeading!.innerHTML = `Meals & Recipes`;
      headerHeadingP!.innerHTML = `Discover delicious and nutritious recipes tailored for you`;

      mealsRecipesNavLink!.classList.add("bg-emerald-50", "text-emerald-700");
      mealsRecipesNavLink!.classList.remove(
        "text-gray-600",
        "hover:bg-gray-50",
      );
      productScannerNavLink!.classList.remove(
        "bg-emerald-50",
        "text-emerald-700",
      );
      foodLogNavLink!.classList.remove("bg-emerald-50", "text-emerald-700");
      productScannerNavLink!.classList.add("text-gray-600", "hover:bg-gray-50");
      foodLogNavLink!.classList.add("text-gray-600", "hover:bg-gray-50");
    } else if (currentPath === "/products") {
      productsScannerSection!.classList.remove("hidden");
      mealsCategoriesSection!.classList.add("hidden");
      mealsRecipesSection!.classList.add("hidden");
      mealsSearchFilterSection!.classList.add("hidden");
      foodLogSection!.classList.add("hidden");
      mealDetailsSection!.classList.add("hidden");
      logMealSection!.classList.add("hidden");
      productDetailModelSection!.classList.add("hidden");
      headerHeading!.innerHTML = `Product Scanner`;
      headerHeadingP!.innerHTML = `Search packaged foods by name or barcode`;

      productScannerNavLink!.classList.add("bg-emerald-50", "text-emerald-700");
      productScannerNavLink!.classList.remove(
        "text-gray-600",
        "hover:bg-gray-50",
      );
      mealsRecipesNavLink!.classList.remove(
        "bg-emerald-50",
        "text-emerald-700",
      );
      foodLogNavLink!.classList.remove("bg-emerald-50", "text-emerald-700");
      mealsRecipesNavLink!.classList.add("text-gray-600", "hover:bg-gray-50");
      foodLogNavLink!.classList.add("text-gray-600", "hover:bg-gray-50");
    } else if (currentPath === "/foodlog") {
      foodLogSection!.classList.remove("hidden");
      mealsCategoriesSection!.classList.add("hidden");
      mealsRecipesSection!.classList.add("hidden");
      mealsSearchFilterSection!.classList.add("hidden");
      productsScannerSection!.classList.add("hidden");
      mealDetailsSection!.classList.add("hidden");
      logMealSection!.classList.add("hidden");
      productDetailModelSection!.classList.add("hidden");
      headerHeading!.innerHTML = `Food Log`;
      headerHeadingP!.innerHTML = `Track your daily nutrition and food intake`;

      foodLogNavLink!.classList.add("bg-emerald-50", "text-emerald-700");
      foodLogNavLink!.classList.remove("text-gray-600", "hover:bg-gray-50");
      productScannerNavLink!.classList.remove(
        "bg-emerald-50",
        "text-emerald-700",
      );
      mealsRecipesNavLink!.classList.remove(
        "bg-emerald-50",
        "text-emerald-700",
      );
      mealsRecipesNavLink!.classList.add("text-gray-600", "hover:bg-gray-50");
      productScannerNavLink!.classList.add("text-gray-600", "hover:bg-gray-50");
      updateFoodLogPage();
    } else if (currentPath.startsWith("/meal/")) {
      let mealId = currentPath.split("/")[2];

      mealsCategoriesSection!.classList.add("hidden");
      mealsRecipesSection!.classList.add("hidden");
      mealsSearchFilterSection!.classList.add("hidden");
      productsScannerSection!.classList.add("hidden");
      foodLogSection!.classList.add("hidden");

      getMealDetails(mealId);
    }
  }

  mealsRecipesNavLink?.addEventListener("click", function (event) {
    event.preventDefault();
    navigateTo("/home");
    document.getElementById("sidebar-overlay")!.classList.remove("active");
    document.getElementById("sidebar")!.classList.remove("open");
  });

  productScannerNavLink?.addEventListener("click", function (event) {
    event.preventDefault();
    navigateTo("/products");
    document.getElementById("sidebar-overlay")!.classList.remove("active");
    document.getElementById("sidebar")!.classList.remove("open");
  });

  foodLogNavLink?.addEventListener("click", function (event) {
    event.preventDefault();
    navigateTo("/foodlog");
    document.getElementById("sidebar-overlay")!.classList.remove("active");
    document.getElementById("sidebar")!.classList.remove("open");
  });

  window.addEventListener("hashchange", renderRoute);
  renderRoute();

  //____________________________________________________________________________________

  // _______________________________ Meals & Recipes Page ts __________________________________________

  //____________________________________________________________________________________

  const baseUrl = "https://nutriplan-api.vercel.app/api";
  let areasBadges: any = [];
  let categoriesBadges: any = [];
  let mealsCards: any = [];
  let productCards: any = [];
  let productCategoriesBadges: any = [];
  let allProducts: any = [];
  let mealDetails: any = [];

  //__________________________________________________________________________________________

  let selectedActiveArea = "";

  async function getAreas() {
    try {
      let response = await fetch(`${baseUrl}/meals/areas`);
      let data = await response.json();
      areasBadges = data.results;
      displayAreas();
    } catch (error) {
      console.error("Error fetching areas: ", error);
    }
  }

  getAreas();

  function displayAreas() {
    let container = `<button
              data-area=""
              class="${selectedActiveArea == "" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"} area-btn px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap hover:bg-emerald-700 transition-all"
            >
              All Cuisines
            </button>`;
    for (let i = 0; i < 12; i++) {
      let isActive = selectedActiveArea === areasBadges[i].name;
      container += `<button
              data-area="${areasBadges[i].name}"
              class="${isActive ? "bg-emerald-600 text-white" : " bg-gray-100 text-gray-700"} area-btn px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap hover:bg-gray-200 transition-all"
            >
              ${areasBadges[i].name}
            </button>`;
    }
    if (areaBtns) {
      areaBtns.innerHTML = container;
      setupAreaListeners();
    }
  }

  //__________________________________________________________________________________________

  async function filterMealsByArea(area: string = "") {
    if (recipesGrid) {
      recipesGrid.innerHTML = `<div class="flex items-center justify-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
</div>`;
    }

    try {
      selectedActiveArea = area;

      let url = "";
      if (area === "") {
        url = `${baseUrl}/meals/search?q=chicken&page=1&limit=25`;
      } else {
        url = `${baseUrl}/meals/filter?area=${area}&page=1&limit=25`;
      }

      let response = await fetch(url);
      let data = await response.json();

      mealsCards = data.results || [];
      displayMeals();
    } catch (error) {
      console.error("Error filtering meals", error);
      if (recipesGrid) {
        recipesGrid.innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-center">
    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
    </div>
    <p class="text-gray-500 text-lg">No recipes found. Try a different search term</p>
</div>`;
      }
    }
  }

  function setupAreaListeners() {
    let buttons = document.querySelectorAll(".area-btn");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        let clickedButton = e.currentTarget as HTMLButtonElement;
        let area = clickedButton.getAttribute("data-area") || "";
        filterMealsByArea(area);
        displayAreas();
      });
    });
  }

  //__________________________________________________________________________________________

  let selectedActiveCategory = "";
  let categoryStyles: {
    [key: string]: { bg: string; border: string; iconBg: string; icon: string };
  } = {
    Beef: {
      bg: "bg-gradient-to-br from-red-50 to-rose-50",
      border: "border-red-200 hover:border-red-400",
      iconBg: "bg-gradient-to-br from-red-400 to-rose-500",
      icon: "fa-drumstick-bite",
    },
    Chicken: {
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      border: "border-amber-200 hover:border-amber-400",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      icon: "fa-drumstick-bite",
    },
    Dessert: {
      bg: "bg-gradient-to-br from-pink-50 to-rose-50",
      border: "border-pink-200 hover:border-pink-400",
      iconBg: "bg-gradient-to-br from-pink-400 to-rose-500",
      icon: "fa-cake-candles",
    },
    Lamb: {
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      border: "border-orange-200 hover:border-orange-400",
      iconBg: "bg-gradient-to-br from-orange-400 to-amber-500",
      icon: "fa-utensils",
    },
    Seafood: {
      bg: "bg-gradient-to-br from-sky-50 to-blue-50",
      border: "border-teal-200 hover:border-sky-400",
      iconBg: "bg-gradient-to-br from-sky-400 to-blue-500",
      icon: "fa-fish",
    },
    Pasta: {
      bg: "bg-gradient-to-br from-amber-50 to-yellow-50",
      border: "border-amber-200 hover:border-amber-400",
      iconBg: "bg-gradient-to-br from-amber-400 to-yellow-500",
      icon: "fa-bowl-food",
    },
    Vegan: {
      bg: "bg-gradient-to-br from-emerald-50 to-green-50",
      border: "border-emerald-200 hover:border-emerald-400",
      iconBg: "bg-gradient-to-br from-emerald-400 to-green-500",
      icon: "fa-leaf",
    },
    Vegetarian: {
      bg: "bg-gradient-to-br from-lime-50 to-emerald-50",
      border: "border-lime-200 hover:border-lime-400",
      iconBg: "bg-gradient-to-br from-lime-400 to-green-500",
      icon: "fa-seedling",
    },
    Starter: {
      bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
      border: "border-teal-200 hover:border-teal-400",
      iconBg: "bg-gradient-to-br from-teal-400 to-cyan-500",
      icon: "fa-utensils",
    },
    Side: {
      bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
      border: "border-emerald-200 hover:border-emerald-400",
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-500",
      icon: "fa-plate-wheat",
    },
    Miscellaneous: {
      bg: "bg-gradient-to-br from-slate-50 to-zinc-50",
      border: "border-slate-200 hover:border-slate-400",
      iconBg: "bg-gradient-to-br from-slate-400 to-gray-500",
      icon: "fa-bowl-rice",
    },
    Pork: {
      bg: "bg-gradient-to-br from-rose-50 to-red-50",
      border: "border-rose-200 hover:border-rose-400",
      iconBg: "bg-gradient-to-br from-rose-400 to-red-500",
      icon: "fa-bacon",
    },
  };

  let defaultStyle = {
    bg: "bg-gradient-to-br from-gray-50 to-slate-50",
    border: "border-gray-200 hover:border-gray-400",
    iconBg: "bg-gradient-to-br from-gray-400 to-slate-500",
    icon: "fa-utensils",
  };

  async function getCategories() {
    try {
      let response = await fetch(`${baseUrl}/meals/categories`);
      let data = await response.json();
      categoriesBadges = data.results;
      displayCategories();
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  getCategories();

  function displayCategories() {
    let container = "";
    for (let i = 0; i < 12; i++) {
      let style = categoryStyles[categoriesBadges[i].name] || defaultStyle;
      container += `<div
              class="category-card ${style.bg} rounded-xl p-3 border ${style.border} hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all group"
              data-category="${categoriesBadges[i].name}"
            >
              <div class="flex items-center gap-2.5">
                <div
                  class="text-white w-9 h-9 ${style.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"
                >
                  <i class="fa-solid ${style.icon}"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-gray-900">${categoriesBadges[i].name}</h3>
                </div>
              </div>
            </div>`;
    }
    if (categoriesGrid) {
      categoriesGrid.innerHTML = container;
      setupCategoryListeners();
    }
  }

  async function filterMealsByCategory(category: string = "") {
    if (recipesGrid) {
      recipesGrid.innerHTML = `<div class="flex items-center justify-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
         </div>`;
    }

    try {
      selectedActiveCategory = category;

      let url = "";
      if (category === "") {
        url = `${baseUrl}/meals/search?q=chicken&page=1&limit=25`;
      } else {
        url = `${baseUrl}/meals/filter?category=${category}&page=1&limit=25`;
      }

      let response = await fetch(url);
      let data = await response.json();

      mealsCards = data.results || [];
      displayMeals();
    } catch (error) {
      console.error("Error filtering meals by category", error);
      if (recipesGrid) {
        recipesGrid.innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-center">
    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
    </div>
    <p class="text-gray-500 text-lg">No recipes found. Try a different search term</p>
</div>`;
      }
    }
  }

  function setupCategoryListeners() {
    let categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        let clickedCard = e.currentTarget as HTMLElement;
        let categoryName = clickedCard.getAttribute("data-category") || "";

        filterMealsByCategory(categoryName);
        displayCategories();
      });
    });
  }

  //__________________________________________________________________________________________

  async function getMeals() {
    if (recipesGrid) {
      recipesGrid.innerHTML = `<div class="flex items-center justify-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
         </div>`;
    }
    try {
      let response = await fetch(
        `${baseUrl}/meals/search?q=chicken&page=1&limit=25`,
      );
      let data = await response.json();
      mealsCards = data.results;
      displayMeals();
    } catch (error) {
      console.error("Error fetching meals : ", error);
      if (recipesGrid) {
        recipesGrid.innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-center">
    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
    </div>
    <p class="text-gray-500 text-lg">No recipes found. Try a different search term</p>
</div>`;
      }
    }
  }

  getMeals();

  let recipeCardStyle = "gridView";
  let afterRecipeCardStyle = "gridView";
  let bottomCardInfo = "gridView";

  function displayMeals() {
    let searchQuery = searchInput ? searchInput.value.trim() : "";
    let displayName =
      selectedActiveCategory === "" ? "recipes" : selectedActiveCategory;

    if (!mealsCards || mealsCards.length === 0) {
      if (recipesGrid) {
        recipesGrid.innerHTML = `<div class="col-span-full flex flex-col items-center justify-center py-12 text-center">
          <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
          </div>
          <p class="text-gray-500 text-lg">No recipes found. Try a different search term</p>
        </div>`;
      }

      if (recipesCount) {
        if (searchQuery !== "") {
          recipesCount.innerHTML = `Showing 0 recipes for "${searchQuery}"`;
        } else {
          recipesCount.innerHTML = `Showing 0 ${displayName} recipes`;
        }
      }
      return;
    }

    let container = "";
    for (let i = 0; i < mealsCards.length; i++) {
      container += `<div
              class="${recipeCardStyle == "gridView" ? " " : " flex flex-row h-40 "}recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              data-meal-id="${mealsCards[i].id}"
            >
              <div class="${afterRecipeCardStyle == "gridView" ? " h-48 " : " w-48 h-full flex-shrink-0 "}relative overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="${mealsCards[i].thumbnail}"
                  alt="${mealsCards[i].name}"
                  loading="lazy"
                />
                <div class="${bottomCardInfo == "gridView" ? "" : "hidden"} absolute bottom-3 left-3 flex gap-2">
                  <span
                    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-lg"
                  >
                   <i class="fa-solid fa-tag mr-1/2 text-emerald-600"></i> ${mealsCards[i].category}
                  </span>
                  ${
                    mealsCards[i].area == null
                      ? " "
                      : `<span
                    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-lg"
                  >
                    <i class="fa-solid fa-globe text-blue-500 mr-1/2"></i>${mealsCards[i].area}
                  </span>`
                  }
                </div>
              </div>
              <div class="p-4">
                <h3
                  class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
                >
                  ${mealsCards[i].name}
                </h3>
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                  ${mealsCards[i].instructions}
                </p>
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-gray-900">
                    <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                    ${mealsCards[i].category}
                  </span>
                 ${
                   mealsCards[i].area == null
                     ? `<span class="font-semibold text-gray-500">
                    <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                    International
                  </span>`
                     : `<span class="font-semibold text-gray-500">
                    <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                    ${mealsCards[i].area}
                  </span>`
                 }
                </div>
              </div>
            </div>`;
    }
    if (recipesGrid) recipesGrid.innerHTML = container;

    if (recipesCount) {
      if (searchQuery !== "") {
        recipesCount.innerHTML = `Showing ${mealsCards.length} recipes for "${searchQuery}"`;
      } else {
        recipesCount.innerHTML = `Showing ${mealsCards.length} ${displayName} recipes`;
      }
    }
  }

  //__________________________________________________________________________________________

  listViewBtn?.addEventListener("click", function () {
    listViewBtn!.classList.add("bg-white", "shadow-sm", "rounded-md");
    gridViewBtn!.classList.remove("bg-white", "shadow-sm", "rounded-md");
    recipeCardStyle = "listView";
    afterRecipeCardStyle = "listView";
    bottomCardInfo = "listView";
    recipesGrid!.classList.add("grid", "grid-cols-2", "gap-4");
    recipesGrid!.classList.remove("grid-cols-4", "gap-5");
    displayMeals();
  });

  gridViewBtn?.addEventListener("click", function () {
    gridViewBtn!.classList.add("bg-white", "shadow-sm", "rounded-md");
    listViewBtn!.classList.remove("bg-white", "shadow-sm", "rounded-md");
    recipeCardStyle = "gridView";
    afterRecipeCardStyle = "gridView";
    bottomCardInfo = "gridView";
    recipesGrid!.classList.add("grid", "grid-cols-4", "gap-5");
    recipesGrid!.classList.remove("grid-cols-2", "gap-4");
    displayMeals();
  });

  //____________________________________________________________________________________________

  async function searchMeals(query: string = "") {
    if (recipesGrid) {
      recipesGrid.innerHTML = `<div class="flex items-center justify-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
</div>`;
    }
    try {
      let response = await fetch(
        `${baseUrl}/meals/search?q=${query}&page=1&limit=25`,
      );
      let data = await response.json();
      mealsCards = data.results;
      displayMeals();
    } catch (error) {
      console.error("Error seraching meals : ", error);
      if (recipesGrid) {
        recipesGrid.innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-center">
    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
    </div>
    <p class="text-gray-500 text-lg">No recipes found. Try a different search term</p>
</div>`;
      }
    }
  }

  searchInput?.addEventListener("input", function () {
    let query = searchInput.value.trim();
    searchMeals(query);
  });

  //____________________________________________________________________________________________

  recipesCount!.innerHTML = `Showing ${mealsCards.length} ${mealsCards.category} recipes`;

  // _______________________________ Product Scanner Page ts __________________________________________

  async function searchProductsByName(productName: string = "") {
    if (productsGrid) {
      productsGrid.innerHTML = `<div class="flex items-center justify-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>`;
    }
    emptyProductSection!.classList.add("hidden");
    try {
      let response = await fetch(
        `${baseUrl}/products/search?q=${productName}&page=1&limit=24`,
      );
      let data = await response.json();
      productCards = data.results;
      allProducts = data.results;
      displayCards();
    } catch (error) {
      console.error("Error seraching for products : ", error);
      productCards = [];
      allProducts = [];
      displayCards();
    }
  }

  productSearchBtn?.addEventListener("click", function () {
    let productName = productSearchInp.value.trim();
    searchProductsByName(productName);
  });

  //____________________________________________________________________________________________

  let selectedCard: any = null;

  async function searchProductsByBarcode(barcodeNumber: string = "") {
    if (productsGrid) {
      productsGrid.innerHTML = `<div class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>`;
    }
    emptyProductSection!.classList.add("hidden");
    try {
      let response = await fetch(
        `${baseUrl}/products/barcode/${barcodeNumber}`,
      );
      let data = await response.json();

      if (data && data.result) {
        productCards = [data.result];
        allProducts = [data.result];
        selectedCard = data.result;
        displayCards();
        displayFormProductPage();
      } else {
        productCards = [];
        allProducts = [];
        selectedCard = null;

        if (productDetailModelSection) {
          productDetailModelSection.classList.add("hidden");
        }

        displayCards();

        Swal.mixin({
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: false,
          background: "#ef4444",
          color: "#ffffff",
          customClass: {
            popup: "not-found",
          },
        }).fire({
          title: "Product not found in database",
        });
      }
    } catch (error) {
      console.error(
        "Error searching for product with this barcode number : ",
        error,
      );

      productCards = [];
      allProducts = [];
      selectedCard = null;

      if (productDetailModelSection) {
        productDetailModelSection.classList.add("hidden");
      }
      displayCards();
    }
  }

  barcodeBtn?.addEventListener("click", function () {
    let barcodeNumber = barcodeInp.value.trim();
    searchProductsByBarcode(barcodeNumber);
  });

  //____________________________________________________________________________________________

  let novaGroupStyles: {
    [key: number]: { bg: string; text: string };
  } = {
    1: {
      bg: "bg-green-500",
      text: "text-white",
    },
    2: {
      bg: "bg-lime-500",
      text: "text-white",
    },
    3: {
      bg: "bg-orange-500",
      text: "text-white",
    },
    4: {
      bg: "bg-red-500",
      text: "text-white",
    },
  };

  let nutritionScoreStyles: {
    [key: string]: { bg: string; text: string };
  } = {
    a: {
      bg: "bg-green-500",
      text: "text-white",
    },
    b: {
      bg: "bg-lime-500",
      text: "text-white",
    },
    c: {
      bg: "bg-yellow-500",
      text: "text-white",
    },
    d: {
      bg: "bg-orange-500",
      text: "text-white",
    },
    e: {
      bg: "bg-red-500",
      text: "text-white",
    },
    unknown: {
      bg: "bg-gray-400",
      text: "text-white",
    },
    "not-applicable": {
      bg: "bg-gray-400",
      text: "text-white",
    },
  };

  function displayCards() {
    if (!productCards || productCards.length === 0) {
      if (productsGrid) productsGrid.innerHTML = "";
      if (emptyProductSection) emptyProductSection.classList.remove("hidden");

      if (productsCount) {
        let displayName =
          selectedActiveCategory === "" ? "products" : selectedActiveCategory;
        productsCount.innerHTML = `Showing 0 products from ${displayName}`;
      }
      return;
    }
    if (emptyProductSection) {
      emptyProductSection!.classList.add("hidden");
    }
    let container = "";
    for (let i = 0; i < productCards.length; i++) {
      let product = productCards[i];

      let novaStyle = novaGroupStyles[product.novaGroup] || {
        bg: "bg-gray-400",
        text: "text-white",
      };
      let gradeKey = product.nutritionGrade
        ? product.nutritionGrade.toLowerCase()
        : "unknown";
      let nutriStyle = nutritionScoreStyles[gradeKey] || {
        bg: "bg-gray-400",
        text: "text-white",
      };
      container += `
             <div
                class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                data-barcode="${productCards[i].barcode}"
              >
                <div
                  class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
                >
                  ${
                    productCards[i].image == undefined
                      ? `<div class="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center"><i class="fa-solid fa-box text-2xl text-gray-400"></i></div>`
                      : `<img
                    class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    src="${productCards[i].image}"
                    alt="${productCards[i].name}"
                    loading="lazy"
                  />`
                  }

                  <!-- Nutri-Score Badge -->
                  <div
                    class="absolute top-2 left-2 ${nutriStyle.bg} ${nutriStyle.text} text-xs font-bold px-2 py-1 rounded uppercase"
                  >
                    Nutri-Score ${productCards[i].nutritionGrade}
                  </div>

                  <!-- NOVA Badge -->
                  ${
                    productCards[i].novaGroup == undefined
                      ? ""
                      : `<div
                    class="absolute top-2 right-2 ${novaStyle.bg} ${novaStyle.text} text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    title="NOVA ${productCards[i].novaGroup}"
                  >
                    ${productCards[i].novaGroup}
                  </div>`
                  }
                  
                </div>

                <div class="p-4">
                  <p
                    class="text-xs text-emerald-600 font-semibold mb-1 truncate"
                  >
                    ${productCards[i].brand}
                  </p>
                  <h3
                    class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
                  >
                    ${productCards[i].name}
                  </h3>

                  <div
                    class="flex items-center gap-3 text-xs text-gray-500 mb-3"
                  >
                    <span
                      ><i class="fa-solid fa-weight-scale mr-1"></i>250g</span
                    >
                    <span
                      ><i class="fa-solid fa-fire mr-1"></i>${productCards[i].nutrients.calories.toFixed(2)} kcal/100g</span
                    >
                  </div>

                  <!-- Mini Nutrition -->
                  <div class="grid grid-cols-4 gap-1 text-center">
                    <div class="bg-emerald-50 rounded p-1.5">
                      <p class="text-xs font-bold text-emerald-700">${productCards[i].nutrients.protein.toFixed(2)}g</p>
                      <p class="text-[10px] text-gray-500">Protein</p>
                    </div>
                    <div class="bg-blue-50 rounded p-1.5">
                      <p class="text-xs font-bold text-blue-700">${productCards[i].nutrients.carbs.toFixed(2)}g</p>
                      <p class="text-[10px] text-gray-500">Carbs</p>
                    </div>
                    <div class="bg-purple-50 rounded p-1.5">
                      <p class="text-xs font-bold text-purple-700">${productCards[i].nutrients.fat.toFixed(2)}g</p>
                      <p class="text-[10px] text-gray-500">Fat</p>
                    </div>
                    <div class="bg-orange-50 rounded p-1.5">
                      <p class="text-xs font-bold text-orange-700">${productCards[i].nutrients.sugar.toFixed(2)}g</p>
                      <p class="text-[10px] text-gray-500">Sugar</p>
                    </div>
                  </div>
                </div>
              </div>
        `;
    }
    productsGrid!.innerHTML = container;

    if (productsCount) {
      let productSearchQuery = productSearchInp
        ? productSearchInp.value.trim()
        : "";
      let displayName =
        selectedActiveCategory === "" ? "products" : selectedActiveCategory;

      if (productSearchQuery !== "") {
        productsCount.innerHTML = `Showing ${productCards.length} products for "${productSearchQuery}"`;
      } else {
        productsCount.innerHTML = `Showing ${productCards.length} products from ${displayName}`;
      }
    }
  }

  //____________________________________________________________________________________________

  function displayFormProductPage() {
    if (!selectedCard) return;
    let product = selectedCard;
    let novaStyle = novaGroupStyles[product.novaGroup] || {
      bg: "bg-gray-400",
      text: "text-white",
    };
    let gradeKey = product.nutritionGrade
      ? product.nutritionGrade.toLowerCase()
      : "unknown";
    let nutriStyle = nutritionScoreStyles[gradeKey] || {
      bg: "bg-gray-400",
      text: "text-white",
    };

    productModelHeaderPart!.innerHTML = `
            <!-- Header -->
            <div class="flex items-start gap-6 mb-6">
                <div class="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                    
                ${
                  product.image
                    ? `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain">`
                    : `<div class="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center"><i class="text-2xl text-gray-400" data-fa-i2svg=""><svg class="svg-inline--fa fa-box" data-prefix="fas" data-icon="box" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"></path></svg></i></div>`
                }
                    
                </div>
                <div class="flex-1">
                    <p class="text-sm text-emerald-600 font-semibold mb-1">${product.brand}</p>
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">${product.name}</h2>
                    <p class="text-sm text-gray-500 mb-3">825 g</p>
                    
                    <div class="flex items-center gap-3">
                        
                            <!-- Nutri-Score Badge الديناميكي -->
                            <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
                                <span class="w-8 h-8 rounded flex items-center justify-center font-bold uppercase ${nutriStyle.bg} ${nutriStyle.text}">
                                    ${product.nutritionGrade || "UK"}
                                </span>
                                <div>
                                    <p class="text-xs font-bold text-gray-700">Nutri-Score</p>
                                    <p class="text-[10px] text-gray-500 uppercase">${product.nutritionGrade || "Unknown"}</p>
                                </div>
                            </div>
                        
                        
                            <!-- NOVA Badge الديناميكي -->
                            <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
                                <span class="w-8 h-8 rounded-full flex items-center justify-center font-bold ${novaStyle.bg} ${novaStyle.text}">
                                    ${product.novaGroup ?? "UK"}
                                </span>
                                <div>
                                    <p class="text-xs font-bold text-gray-700">NOVA</p>
                                    <p class="text-[10px] text-gray-500">Group ${product.novaGroup || "N/A"}</p>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <button class="close-product-modal-header text-gray-400 hover:text-gray-600">
                    <i class="text-2xl" data-fa-i2svg=""><svg class="svg-inline--fa fa-xmark" data-prefix="fas" data-icon="xmark" role="img" viewBox="0 0 384 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"></path></svg></i>
                </button>
            </div>
             `;

    productModelNutrientsPart!.innerHTML = `<!-- Nutrition Facts -->
            <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 mb-6 border border-emerald-200">
                <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <i class="text-emerald-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-chart-pie" data-prefix="fas" data-icon="chart-pie" role="img" viewBox="0 0 576 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M512.4 240l-176 0c-17.7 0-32-14.3-32-32l0-176c0-17.7 14.4-32.2 31.9-29.9 107 14.2 191.8 99 206 206 2.3 17.5-12.2 31.9-29.9 31.9zM222.6 37.2c18.1-3.8 33.8 11 33.8 29.5l0 197.3c0 5.6 2 11 5.5 15.3L394 438.7c11.7 14.1 9.2 35.4-6.9 44.1-34.1 18.6-73.2 29.2-114.7 29.2-132.5 0-240-107.5-240-240 0-115.5 81.5-211.9 190.2-234.8zM477.8 288l64 0c18.5 0 33.3 15.7 29.5 33.8-10.2 48.4-35 91.4-69.6 124.2-12.3 11.7-31.6 9.2-42.4-3.9L374.9 340.4c-17.3-20.9-2.4-52.4 24.6-52.4l78.2 0z"></path></svg></i>
                    Nutrition Facts <span class="text-sm font-normal text-gray-500">(per 100g)</span>
                </h3>
                
                <div class="text-center mb-4 pb-4 border-b border-emerald-200">
                    <p class="text-4xl font-bold text-gray-900">${product.nutrients.calories.toFixed(2)}</p>
                    <p class="text-sm text-gray-500">Calories</p>
                </div>
                
                <div class="grid grid-cols-4 gap-4">
                    <div class="text-center">
                        <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div class="bg-emerald-500 h-2 rounded-full" style="width: 12.6%"></div>
                        </div>
                        <p class="text-lg font-bold text-emerald-600">${product.nutrients.protein.toFixed(2)}g</p>
                        <p class="text-xs text-gray-500">Protein</p>
                    </div>
                    <div class="text-center">
                        <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div class="bg-blue-500 h-2 rounded-full" style="width: 57.49999999999999%"></div>
                        </div>
                        <p class="text-lg font-bold text-blue-600">${product.nutrients.carbs.toFixed(2)}g</p>
                        <p class="text-xs text-gray-500">Carbs</p>
                    </div>
                    <div class="text-center">
                        <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div class="bg-purple-500 h-2 rounded-full" style="width: 47.53846153846153%"></div>
                        </div>
                        <p class="text-lg font-bold text-purple-600">${product.nutrients.fat.toFixed(2)}g</p>
                        <p class="text-xs text-gray-500">Fat</p>
                    </div>
                    <div class="text-center">
                        <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div class="bg-orange-500 h-2 rounded-full" style="width: 100%"></div>
                        </div>
                        <p class="text-lg font-bold text-orange-600">${product.nutrients.sugar.toFixed(2)}g</p>
                        <p class="text-xs text-gray-500">Sugar</p>
                    </div>
                </div>
               </div>`;
    productDetailModelSection!.classList.remove("hidden");
  }

  productsGrid!.addEventListener("click", function (event) {
    let target = event.target as HTMLElement;
    let productGridCard = target.closest(".product-card");
    if (productGridCard) {
      let productCardBarcode = productGridCard.getAttribute("data-barcode");
      if (productCardBarcode) {
        selectedCard = productCards.find(
          (p: any) => p.barcode === productCardBarcode,
        );

        if (selectedCard) {
          displayFormProductPage();
        }
      }
    }
    // console.log(productGridCard)
  });

  function closeProductModal() {
    productDetailModelSection!.classList.add("hidden");
  }

  document.addEventListener("click", function (e) {
    let target = e.target as HTMLElement;
    if (
      target.closest(".close-product-modal-header") ||
      target.closest(".close-product-modal")
    ) {
      closeProductModal();
    }
  });

  //____________________________________________________________________________________________

  let productCategoryStyles: {
    [key: string]: { bg: string; icon: string };
  } = {
    snacks: {
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
      icon: "fa-cookie",
    },
    beverages: {
      bg: "bg-gradient-to-r from-blue-500 to-cyan-500",
      icon: "fa-bottle-water",
    },
    dairies: {
      bg: "bg-gradient-to-r from-sky-400 to-blue-500",
      icon: "fa-cheese",
    },
    "breakfast-cereals": {
      bg: "bg-gradient-to-r from-amber-500 to-orange-500",
      icon: "fa-wheat-awn",
    },
    breads: {
      bg: "bg-gradient-to-r from-amber-600 to-yellow-500",
      icon: "fa-bread-slice",
    },
    fruits: {
      bg: "bg-gradient-to-r from-red-500 to-rose-500",
      icon: "fa-apple-whole",
    },
    vegetables: {
      bg: "bg-gradient-to-r from-green-500 to-emerald-500",
      icon: "fa-carrot",
    },
    meats: {
      bg: "bg-gradient-to-r from-red-600 to-rose-600",
      icon: "fa-drumstick-bite",
    },
    sauces: {
      bg: "bg-gradient-to-r from-orange-500 to-red-500",
      icon: "fa-jar",
    },
  };

  //____________________________________________________________________________________________

  async function getProductCategories() {
    try {
      let response = await fetch(`${baseUrl}/products/categories`);
      let data = await response.json();
      productCategoriesBadges = data.results;
      displayProductCategories();
    } catch (error) {
      console.error("Error fetching product categories:", error);
    }
  }

  getProductCategories();

  function displayProductCategories() {
    let container = "";
    for (let i = 0; i < productCategoriesBadges.length; i++) {
      if (!productCategoryStyles[productCategoriesBadges[i].id]) {
        continue;
      }
      let style = productCategoryStyles[productCategoriesBadges[i].id];
      container += `<button
                class="product-category-btn flex-shrink-0 px-5 py-3 ${style.bg} text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                data-category="${productCategoriesBadges[i].id}"
              >
                <i class="fa-solid ${style.icon} mr-1.5"></i>${productCategoriesBadges[i].name}
              </button>`;
    }

    if (productCategories) {
      productCategories.innerHTML = container;
      setupProductListeners();
    }
  }

  //____________________________________________________________________________________________

  let selectedNutriScore = "";

  async function filterProductsByCategory(category: string = "") {
    if (productsGrid) {
      productsGrid.innerHTML = `<div class="flex items-center justify-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
</div>`;
    }
    emptyProductSection!.classList.add("hidden");
    try {
      selectedActiveCategory = category;

      let url = "";
      if (category === "") {
        url = `${baseUrl}/products/category/snacks`;
      } else {
        url = `${baseUrl}/products/category/${category}`;
      }

      let response = await fetch(url);
      let data = await response.json();

      productCards = data.results || [];
      allProducts = data.results;
      displayCards();
      emptyProductSection!.classList.add("hidden");
    } catch (error) {
      console.error("Error filtering meals by category", error);
      productCards = [];
      displayCards();
    }
  }

  function setupProductListeners() {
    let productCards = document.querySelectorAll(".product-category-btn");
    productCards.forEach((product) => {
      product.addEventListener("click", (e) => {
        let clickedCard = e.currentTarget as HTMLElement;
        let categoryName = clickedCard.getAttribute("data-category") || "";

        filterProductsByCategory(categoryName);
        displayProductCategories();
      });
    });
  }

  //____________________________________________________________________________________________

  function filterByNutriScore(grade: string = "") {
    selectedNutriScore = grade;

    if (grade === "") {
      productCards = [...allProducts];
    } else {
      productCards = allProducts.filter((product: any) => {
        return (
          product.nutritionGrade &&
          product.nutritionGrade.toLowerCase() === grade.toLowerCase()
        );
      });
    }

    displayCards();
  }

  function setupNutriScoreListeners() {
    let scoreButtons = document.querySelectorAll(".nutri-score-filter");

    scoreButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let clickedBtn = e.currentTarget as HTMLElement;
        let grade = clickedBtn.getAttribute("data-grade") || "";

        scoreButtons.forEach((b) => {
          b.classList.remove("ring-2", "ring-gray-900");
        });

        clickedBtn.classList.add("ring-2", "ring-gray-900");
        filterByNutriScore(grade);
      });
    });
  }

  setupNutriScoreListeners();

  //____________________________________________________________________________________________

  // _______________________________ Product Details Page ts __________________________________________

  async function getMealDetails(mealId: string) {
    if (imageCalories) {
      imageCalories.innerHTML = `<i class="fa-solid fa-fire mr-1"></i> Calculating...`;
    }

    if (nutritionFactsPart) {
      nutritionFactsPart.innerHTML = `
      <div class="text-center py-12">
        <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <i class="fa-solid fa-calculator text-emerald-600 text-xl"></i>
      </div>
      <p class="text-gray-700 font-semibold text-sm">Calculating Nutrition</p>
      <p class="text-gray-400 text-xs mt-1">Analyzing ingredients...</p>
      <span class="loader"></span>
    </div>
  `;
    }
    if (logMealBtn) {
      logMealBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> Calculating...`;
      logMealBtn.setAttribute("disabled", "true");
      logMealBtn.classList.add("opacity-50", "bg-gray-200", "text-gray-500");
      logMealBtn.classList.remove(
        "bg-blue-600",
        "text-white",
        "hover:bg-blue-700",
        "transition-all",
        "cursor-pointer",
      );
    }

    try {
      let response = await fetch(`${baseUrl}/meals/${mealId}`);
      let data = await response.json();
      mealDetails = data.result;

      let mealName = mealDetails.name;
      let ingredientsList: string[] = [];
      for (let i = 0; i < mealDetails.ingredients.length; i++) {
        let item = mealDetails.ingredients[i];
        let measure = item.measure || "";
        let ingredientName = item.ingredient || "";

        let fullIngredient = `${measure} ${ingredientName}`.trim();
        ingredientsList.push(fullIngredient);
      }
      postMealDetails(mealName, ingredientsList);
      displayMealDetails();

      mealsRecipesSection!.classList.add("hidden");
      mealsSearchFilterSection!.classList.add("hidden");
      mealsCategoriesSection!.classList.add("hidden");
      productsScannerSection!.classList.add("hidden");
      logMealSection!.classList.add("hidden");
      productDetailModelSection!.classList.add("hidden");

      if (mealDetailsSection) {
        mealDetailsSection.classList.remove("hidden");
      }

      headerHeading!.innerHTML = `Recipe Details`;
      headerHeadingP!.innerHTML = `View full recipe information and nutrition facts`;
    } catch (error) {
      console.error("Error fetching meal details: ", error);
    }
  }

  function displayMealDetails() {
    mealDetailsImage!.setAttribute("src", mealDetails.thumbnail);
    mealDetailsImage!.setAttribute("alt", mealDetails.name);
    mealCategoryDetails!.innerHTML = mealDetails.category;
    mealNameDetails!.innerHTML = mealDetails.name;

    if (mealDetails.youtube && mealDetails.youtube.trim() !== "") {
      let youtubeUrl = mealDetails.youtube;
      let videoId = "";

      if (youtubeUrl.includes("watch?v=")) {
        videoId = youtubeUrl.split("watch?v=")[1].split("&")[0];
      } else if (youtubeUrl.includes("youtu.be/")) {
        videoId = youtubeUrl.split("youtu.be/")[1].split("?")[0];
      }

      let embedUrl = `https://www.youtube.com/embed/${videoId}`;

      if (youtubeVideoSrc) {
        youtubeVideoSrc.setAttribute("src", embedUrl);
      }
      if (youtubeSection) {
        youtubeSection.classList.remove("hidden");
      }
    } else {
      if (youtubeSection) {
        youtubeSection.classList.add("hidden");
      }
    }

    if (mealDetails.area) {
      mealCountryDetails!.classList.remove("hidden");
      mealCountryDetails!.innerHTML = mealDetails.area;
    } else {
      mealCountryDetails!.classList.add("hidden");
    }
    let spanTag = "";
    for (let i = 0; i < mealDetails.tags.length; i++) {
      spanTag += `<span class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full">${mealDetails.tags[i]}</span>`;
    }

    document.querySelector(".meal-div-tags")!.innerHTML = spanTag;

    let ingredientsContainer = `<h2
                  class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                >
                  <i class="fa-solid fa-list-check text-emerald-600"></i>
                  Ingredients
                  <span class="text-sm font-normal text-gray-500 ml-auto"
                    >${mealDetails.ingredients.length} items</span
                  >
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">`;
    for (let i = 0; i < mealDetails.ingredients.length; i++) {
      ingredientsContainer += `
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900">${mealDetails.ingredients[i].measure}</span>
                      ${mealDetails.ingredients[i].ingredient}
                    </span>
                  </div>`;
    }

    document.getElementById("ingredients-part")!.innerHTML =
      ingredientsContainer;

    let instructionsContainer = `<h2
                  class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                >
                  <i class="fa-solid fa-shoe-prints text-emerald-600"></i>
                  Instructions
                </h2>
                <div class="space-y-4">`;
    for (let i = 0; i < mealDetails.instructions.length; i++) {
      instructionsContainer += `<div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                    >
                      ${i + 1}
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2">
                     ${mealDetails.instructions[i]}
                    </p>
                  </div>`;
    }
    document.getElementById("instructions-part")!.innerHTML =
      instructionsContainer;
  }

  let nutritionDetails: nutritionData;

  async function postMealDetails(mealName: string, ingredientsList: string[]) {
    try {
      let response = await fetch(`${baseUrl}/nutrition/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "LLGCmMDNJNhNKNjzmPppbQPKrbKLt9qNTwCcMtJh",
        },
        body: JSON.stringify({
          recipeName: mealName,
          ingredients: ingredientsList,
        }),
      });

      let data = await response.json();
      nutritionDetails = data.data;
      if (imageCalories && logMealBtn && nutritionDetails?.perServing) {
        imageCalories.innerHTML = `${nutritionDetails.perServing.calories} cal/serving`;
        logMealBtn.innerHTML = `<i class="fa-solid fa-clipboard-list"></i> Log This Meal`;
        logMealBtn.removeAttribute("disabled");
        logMealBtn.classList.remove("opacity-50", "cursor-not-allowed");
        logMealBtn.classList.add(
          "bg-blue-600",
          "text-white",
          "hover:bg-blue-700",
          "transition-all",
          "cursor-pointer",
        );
        logMealBtn.classList.remove(
          "opacity-50",
          "bg-gray-200",
          "text-gray-500",
        );
      }
      displayNutritionFactsPart();
    } catch (error) {
      console.error("Error fetching nutrition details", error);
    }
  }

  recipesGrid?.addEventListener("click", function (event) {
    let target = event.target as HTMLElement;
    let mealCard = target.closest(".recipe-card");
    if (mealCard) {
      let mealId = mealCard.getAttribute("data-meal-id");
      if (mealId) {
        navigateTo(`/meal/${mealId}`);
      }
    }
  });

  function displayNutritionFactsPart() {
    let proteinProgressBar = (nutritionDetails.perServing.protein / 50) * 100;
    let carbsProgressBar = (nutritionDetails.perServing.carbs / 250) * 100;
    let fatProgressBar = (nutritionDetails.perServing.fat / 65) * 100;
    let fiberProgressBar = (nutritionDetails.perServing.fiber / 28) * 100;
    let sugarProgressBar = (nutritionDetails.perServing.sugar / 50) * 100;
    let saturatedFatProgressBar = (nutritionDetails.perServing.fat / 20) * 100;

    let container = `<p class="text-sm text-gray-500 mb-4">Per serving</p>

                  <div
                    class="text-center py-4 mb-4 bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl"
                  >
                    <p class="text-sm text-gray-600">Calories per serving</p>
                    <p class="text-4xl font-bold text-emerald-600">${nutritionDetails.perServing.calories}</p>
                    <p class="text-xs text-gray-500 mt-1">Total: ${nutritionDetails.totals.calories} cal</p>
                  </div>

                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <span class="text-gray-700">Protein</span>
                      </div>
                      <span class="font-bold text-gray-900">${nutritionDetails.perServing.protein}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-emerald-500 h-2 rounded-full"
                        style="width: ${proteinProgressBar > 100 ? 100 : proteinProgressBar}%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span class="text-gray-700">Carbs</span>
                      </div>
                      <span class="font-bold text-gray-900">${nutritionDetails.perServing.carbs}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-blue-500 h-2 rounded-full"
                        style="width: ${carbsProgressBar > 100 ? 100 : carbsProgressBar}%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span class="text-gray-700">Fat</span>
                      </div>
                      <span class="font-bold text-gray-900">${nutritionDetails.perServing.fat}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-purple-500 h-2 rounded-full"
                        style="width: ${fatProgressBar > 100 ? 100 : fatProgressBar}%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span class="text-gray-700">Fiber</span>
                      </div>
                      <span class="font-bold text-gray-900">${nutritionDetails.perServing.fiber}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-orange-500 h-2 rounded-full"
                        style="width: ${fiberProgressBar > 100 ? 100 : fiberProgressBar}%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex item5s-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-pink-500"></div>
                        <span class="text-gray-700">Sugar</span>
                      </div>
                      <span class="font-bold text-gray-900">${nutritionDetails.perServing.sugar}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-pink-500 h-2 rounded-full"
                        style="width: ${sugarProgressBar > 100 ? 100 : sugarProgressBar}%"
                      ></div>
                    </div>


                    ${
                      nutritionDetails.perServing.saturatedFat > 0
                        ? `<div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <span class="text-gray-700">Saturated Fat</span>
                      </div>
                      <span class="font-bold text-gray-900">${nutritionDetails.perServing.saturatedFat}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-red-500 h-2 rounded-full"
                        style="width: ${saturatedFatProgressBar > 100 ? 100 : saturatedFatProgressBar}%"
                      ></div>
                    </div>`
                        : ``
                    }

                  </div>

             <div class="mt-6 pt-6 border-t border-gray-100">
                <h3 class="text-sm font-semibold text-gray-900 mb-3">Other</h3>
                <div class="grid grid-cols-2 gap-3 text-sm">
                    <div class="flex justify-between">
                        <span class="text-gray-600">Cholesterol</span>
                        <span class="font-medium">${nutritionDetails.perServing.cholesterol}mg</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-600">Sodium</span>
                        <span class="font-medium">${nutritionDetails.perServing.sodium}mg</span>
                    </div>
                </div>
            </div>`;
    nutritionFactsPart!.innerHTML = container;
  }

  interface nutritionInterface {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    fiber: number;
    sugar: number;
    saturatedFat: number;
    cholesterol: number;
    sodium: number;
  }

  interface nutritionData {
    recipeName: string;
    servings: number;
    totalWeight: number;
    totals: nutritionInterface;
    perServing: nutritionInterface;
  }

  //____________________________________________________________________________________________

  backBtnToMealsRecipes!.addEventListener("click", function () {
    // mealsSearchFilterSection!.classList.remove("hidden");
    // mealsCategoriesSection!.classList.remove("hidden");
    // mealsRecipesSection!.classList.remove("hidden");
    // mealDetailsSection!.classList.add("hidden");
    // headerHeading!.innerHTML = `Meals & Recipes`;
    // headerHeadingP!.innerHTML = `Discover delicious and nutritious recipes tailored for you`;
    navigateTo("/home");
  });

  //____________________________________________________________________________________________

  logMealBtn!.addEventListener("click", function () {
    logMealSection!.classList.remove("hidden");
    logMealImage!.setAttribute("src", mealDetails.thumbnail);
    logMealImage!.setAttribute("alt", mealDetails.name);
    logMealRecipeName!.innerHTML = mealDetails.name;
    logMealImage!.classList.add("w-16", "h-16", "rounded-xl", "object-cover");
  });

  cancelLogMeal!.addEventListener("click", function () {
    logMealSection!.classList.add("hidden");
  });

  //____________________________________________________________________________________________

  // _______________________________  Food Log Page ts  __________________________________________

  function getTodayDateKey() {
    let todayDate = new Date();
    let year = todayDate.getFullYear();
    let month = String(todayDate.getMonth() + 1).padStart(2, "0");
    let day = String(todayDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getAllLogs() {
    let data = localStorage.getItem("nutriplan_food_logs");
    return data ? JSON.parse(data) : {};
  }

  function saveAllLogs(logs: any) {
    localStorage.setItem("nutriplan_food_logs", JSON.stringify(logs));
  }

  //____________________________________________________________________________________________

  confirmLogMeal?.addEventListener("click", function () {
    let servings = mealServingInp ? parseFloat(mealServingInp.value) || 1 : 1;

    let mealName = mealDetails.name;
    let baseCalories = nutritionDetails?.perServing?.calories || 0;
    let baseProtein = nutritionDetails?.perServing?.protein || 0;
    let baseCarbs = nutritionDetails?.perServing?.carbs || 0;
    let baseFat = nutritionDetails?.perServing?.fat || 0;

    let newItem = {
      id: Date.now(),
      name: mealName,
      image: mealDetails.thumbnail,
      type: "Recipe",
      servings: mealServingInp.value,
      calories: Math.round(baseCalories * servings),
      protein: Math.round(baseProtein * servings),
      carbs: Math.round(baseCarbs * servings),
      fat: Math.round(baseFat * servings),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    let allLogs = getAllLogs();
    let todayKey = getTodayDateKey();

    if (!allLogs[todayKey]) {
      allLogs[todayKey] = {
        dateString: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        }),
        items: [],
      };
    }

    allLogs[todayKey].items.push(newItem);
    saveAllLogs(allLogs);

    logMealSection!.classList.add("hidden");
    updateFoodLogPage();
    logMealSweetAlert(mealName, servings, baseCalories);
  });

  //____________________________________________________________________________________________

  (window as any).deleteLoggedItem = function (recipeId: number) {
    let allLogs = getAllLogs();
    let todayKey = getTodayDateKey();

    if (allLogs[todayKey] && allLogs[todayKey].items) {
      let oldItems = allLogs[todayKey].items;
      let updatedItems = [];

      for (let i = 0; i < oldItems.length; i++) {
        let currentItem = oldItems[i];
        if (currentItem.id !== recipeId) {
          updatedItems.push(currentItem);
        }
      }

      allLogs[todayKey].items = updatedItems;
      saveAllLogs(allLogs);
      updateFoodLogPage();

      Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timerProgressBar: false,
        background: "rgba(46, 165, 205, 1)",
        color: "#ffffff",
        timer: 1500,
        customClass: {
          popup: "delete-one-meal",
        },
      }).fire({
        title: "Item removed from log",
      });
    }
  };

  (window as any).clearAllLogsToday = function () {
    Swal.fire({
      title: "Clear Today's Log?",
      text: "This will remove all logged food items for today.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, clear it!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        let allLogs = getAllLogs();
        let todayKey = getTodayDateKey();
        if (allLogs[todayKey]) {
          allLogs[todayKey].items = [];
          saveAllLogs(allLogs);
          updateFoodLogPage();
        }
        Swal.fire({
          title: "Cleared!",
          text: "Your food log has been cleared.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //____________________________________________________________________________________________

  addProductModelBtn!.addEventListener("click", function () {
    if (!selectedCard) return;

    let productName = selectedCard.name;
    let productImg = selectedCard.image;

    let productCalories = selectedCard.nutrients?.calories || 0;
    let productProtein = selectedCard.nutrients?.protein || 0;
    let productCarbs = selectedCard.nutrients?.carbs || 0;
    let productFat = selectedCard.nutrients?.fat || 0;

    let newItem = {
      id: Date.now(),
      name: productName,
      image: productImg,
      type: "Product",
      servings: mealServingInp.value,
      calories: Math.round(productCalories),
      protein: Math.round(productProtein),
      carbs: Math.round(productCarbs),
      fat: Math.round(productFat),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    let allLogs = getAllLogs();
    let todayKey = getTodayDateKey();

    if (!allLogs[todayKey]) {
      allLogs[todayKey] = {
        dateString: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        }),
        items: [],
      };
    }

    allLogs[todayKey].items.push(newItem);
    saveAllLogs(allLogs);

    closeProductModal();
    updateFoodLogPage();

    Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      background: "#059669",
      color: "#ffffff",
      customClass: {
        popup: "custom-toast",
      },
    }).fire({
      title: `${productName} logged to your daily intake! 📝`,
    });
  });

  //____________________________________________________________________________________________

  function updateFoodLogPage() {
    let allLogs = getAllLogs();
    let todayKey = getTodayDateKey();
    let todayData = allLogs[todayKey] || { items: [] };
    let items = todayData.items || [];

    if (foodLogDateHeader) {
      let options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "short",
        day: "numeric",
      };
      foodLogDateHeader.innerHTML = new Date().toLocaleDateString(
        "en-US",
        options,
      );
    }

    let totalCalories = 0,
      totalProtein = 0,
      totalCarbs = 0,
      totalFat = 0;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      totalCalories += item.calories;
      totalProtein += item.protein;
      totalCarbs += item.carbs;
      totalFat += item.fat;
    }
    let caloriesGoal = 2000;
    let proteinGoal = 50;
    let carbsGoal = 250;
    let fatGoal = 65;

    let caloriesPercent = Math.min(
      Math.round((totalCalories / caloriesGoal) * 100),
      100,
    );
    let proteinPercent = Math.min(
      Math.round((totalProtein / proteinGoal) * 100),
      100,
    );
    let carbsPercent = Math.min(
      Math.round((totalCarbs / carbsGoal) * 100),
      100,
    );
    let fatPercent = Math.min(Math.round((totalFat / fatGoal) * 100), 100);

    let progressCards = document.querySelectorAll(
      "#foodlog-today-section .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 > div",
    );
    if (progressCards.length >= 4) {
      let cardData = [
        {
          percent: caloriesPercent,
          colorClass: "text-emerald-600",
          barClass: "bg-emerald-500",
          valueMeasure: `${totalCalories} kcal`,
        },
        {
          percent: proteinPercent,
          colorClass: "text-blue-600",
          barClass: "bg-blue-500",
          valueMeasure: `${totalProtein} g`,
        },
        {
          percent: carbsPercent,
          colorClass: "text-amber-600",
          barClass: "bg-amber-500",
          valueMeasure: `${totalCarbs} g`,
        },
        {
          percent: fatPercent,
          colorClass: "text-purple-600",
          barClass: "bg-purple-500",
          valueMeasure: `${totalFat} g`,
        },
      ];

      for (let i = 0; i < 4; i++) {
        let card = progressCards[i];
        let data = cardData[i];

        let ElementPercentage = card.querySelector("." + data.colorClass);
        if (ElementPercentage) ElementPercentage.innerHTML = `${data.percent}%`;

        let progressBarPart = card.querySelector(
          "." + data.barClass,
        ) as HTMLElement;
        if (progressBarPart) {
          progressBarPart.style.width = `${data.percent}%`;
        }

        let elementValue = card.querySelector(
          ".flex.items-center.justify-between.text-xs span.font-bold",
        );
        if (elementValue) elementValue.innerHTML = data.valueMeasure;
      }
    }

    let containerItemsArea = document.querySelector(
      "#foodlog-today-section .border-t.border-gray-200.pt-4",
    );
    if (containerItemsArea) {
      let itemsHtml = "";
      if (items.length === 0) {
        itemsHtml = `
          <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-semibold text-gray-700">Logged Items (0)</h4>
          </div>
          <div class="text-center py-12">
              <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fa-solid fa-utensils text-3xl text-gray-300"></i>
              </div>
              <p class="text-gray-500 font-medium mb-2">No food logged today</p>
              <p class="text-gray-400 text-sm mb-4">Start tracking your nutrition by logging meals or scanning products</p>
              <div class="flex items-center justify-center gap-3">
                  <button onclick="document.getElementById('mealsRecipes').click()" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer">
                      <i class="fa-solid fa-plus"></i> Browse Recipes
                  </button>
                  <button onclick="document.getElementById('productScanner').click()" class="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer">
                      <i class="fa-solid fa-barcode"></i> Scan Product
                  </button>
              </div>
          </div>
        `;
      } else {
        let listContent = "";
        items.forEach((item: any) => {
          let servingText =
            item.servings > 1
              ? `${item.servings} servings`
              : `${item.servings} serving`;
          listContent += `
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-3 border border-gray-100">
                <div class="flex items-center gap-4">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover">
                    <div>
                        <h4 class="font-bold text-gray-900">${item.name}</h4>
                        <p class="text-xs text-gray-500">${servingText} • ${item.type} <span class="ml-2">${item.time}</span></p>
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <div class="text-right flex items-center gap-6">
                        <p class="font-bold text-emerald-600 text-lg">${item.calories} <span class="text-xs font-normal text-gray-500">kcal</span></p>
                        <p class="text-xs hidden md:flex text-gray-400">${item.protein}g P • ${item.carbs}g C • ${item.fat}g F</p>
                    </div>
                    <button onclick="window.deleteLoggedItem(${item.id})" class="text-gray-400 hover:text-red-500 transition-colors p-2 cursor-pointer">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
          `;
        });

        itemsHtml = `
          <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-semibold text-gray-700">Logged Items (${items.length})</h4>
              <button onclick="window.clearAllLogsToday()" class="text-xs text-red-500 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer">
                  <i class="fa-solid fa-trash"></i> Clear All
              </button>
          </div>
          <div class="space-y-3">
              ${listContent}
          </div>
        `;
      }
      containerItemsArea.innerHTML = itemsHtml;
    }

    let weeklyContainer = document.querySelector(
      "#foodlog-section .grid.grid-cols-7",
    );
    if (weeklyContainer) {
      let weekHtml = "";
      let totalWeeklyCalories = 0;
      let totalWeeklyItems = 0;
      let daysOnGoalCount = 0;

      for (let i = 6; i >= 0; i--) {
        let d = new Date();
        d.setDate(d.getDate() - i);
        let year = d.getFullYear();
        let month = String(d.getMonth() + 1).padStart(2, "0");
        let dayStr = String(d.getDate()).padStart(2, "0");
        let dateKey = `${year}-${month}-${dayStr}`;

        let dayLog = allLogs[dateKey] || { items: [] };
        let dayCalories = dayLog.items.reduce(
          (sum: number, it: any) => sum + it.calories,
          0,
        );
        let dayItemsCount = dayLog.items.length;

        totalWeeklyCalories += dayCalories;
        totalWeeklyItems += dayItemsCount;

        if (dayCalories >= caloriesGoal) {
          daysOnGoalCount++;
        }

        let dayName = d.toLocaleDateString("en-US", { weekday: "short" });
        let dayNumber = d.getDate();
        let isToday = i === 0;

        weekHtml += `
          <div class="text-center ${isToday ? "bg-indigo-100 rounded-xl p-2" : "p-2"}">
              <p class="text-xs text-gray-500 mb-1">${dayName}</p>
              <p class="text-sm font-medium text-gray-900">${dayNumber}</p>
              <div class="mt-2 mt-2 text-emerald-600 ${dayCalories > 0 ? "text-indigo-600 font-bold" : "text-gray-300"}">
                  <p class="text-lg font-bold ">${dayCalories}</p>
                  <p class="text-xs">kcal</p>
              </div>
              <p class="text-[10px] text-gray-400 mt-1">${dayItemsCount} items</p>
          </div>
        `;
      }
      weeklyContainer.innerHTML = weekHtml;

      let quickActionBoxes = document.querySelectorAll(
        "#foodlog-section .grid.grid-cols-1.md\\:grid-cols-3 .text-xl.font-bold",
      );
      if (quickActionBoxes.length >= 3) {
        let weeklyAvg = Math.round(totalWeeklyCalories / 7);
        quickActionBoxes[0].innerHTML = `${weeklyAvg} kcal`;
        quickActionBoxes[1].innerHTML = `${totalWeeklyItems} items`;
        quickActionBoxes[2].innerHTML = `${daysOnGoalCount} / 7`;
      }
    }
  }

  //____________________________________________________________________________________________

  foodLogNavLink?.addEventListener("click", function () {
    updateFoodLogPage();
  });

  //____________________________________________________________________________________________

  increaseServingBtn!.addEventListener("click", function () {
    let currentValue = parseFloat(mealServingInp!.value) || 1;
    if (currentValue < 10) {
      mealServingInp!.value = (currentValue + 0.5).toString();
    }
  });

  decreaseServingBtn?.addEventListener("click", function () {
    let currentValue = parseFloat(mealServingInp!.value) || 1;
    if (currentValue > 0.5) {
      mealServingInp!.value = (currentValue - 0.5).toString();
    }
  });

  //____________________________________________________________________________________________

  function logMealSweetAlert(
    mealName: string,
    servings: number,
    calories: number,
  ) {
    let existingAlert = document.getElementById("custom-swal-overlay");
    if (existingAlert) existingAlert.remove();

    let overlay = document.createElement("div");
    overlay.id = "custom-swal-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "999999";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.animation = "fadeIn 0.2s ease-in-out";

    overlay.innerHTML = `
    <div style="background: white; width: 450px; padding: 30px; border-radius: 6px; text-align: center; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
      <div style="width: 70px; height: 70px; border: 3px solid #c5e7d2; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto;">
        <svg style="width: 50px; height: 40px; color: #6ec58f;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      
      <h2 style="font-size: 24px; font-weight: bold; color: #4a4545; margin-bottom: 15px;">Meal Logged!</h2>
      <p style="font-size: 14px; color: #4b5563; line-height: 1.5; font-weight:400;">
        ${mealName} (${servings} ${servings > 1 ? "servings" : "serving"}) has been added to your daily log.
      </p>
      <p style="font-size: 16px; font-weight: bold; color: #4bb390;">
        +${calories} calories
      </p>

    </div>
  `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      if (document.body.contains(overlay)) {
        overlay.remove();
      }
    }, 3000);
  }
})();
