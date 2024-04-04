export const cdn_res_img =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/';

export const logo_image =
  'https://img.freepik.com/free-vector/food-logo-background_1390-72.jpg';

export const restaurantMenu = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0044745&lng=72.55311549999999&restaurantId=`;

export const api = `https://maryamshahnawaz.github.io/api/data.json`;
export const home_res_api =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
export const mock_restaurant = [
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
        layout: {
          columns: 4,
        },
        id: 'restaurant_grid_listing',
        gridElements: {
          infoWithStyle: {
            '@type':
              'type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle',
            restaurants: [
              {
                info: {
                  id: '36191',
                  name: 'R.K. Egg Eatery',
                  cloudinaryImageId: 'fm7jin6qt8lhitzdmkl4',
                  locality: 'Vastrapur',
                  areaName: 'Vastrapur',
                  costForTwo: '₹300 for two',
                  cuisines: ['Indian', 'Mughlai', 'Snacks', 'North Indian'],
                  avgRating: 4.3,
                  parentId: '163871',
                  avgRatingString: '4.3',
                  totalRatingsString: '10K+',
                  sla: {
                    deliveryTime: 36,
                    lastMileTravel: 4.9,
                    serviceability: 'SERVICEABLE',
                    slaString: '36 mins',
                    lastMileTravelString: '4.9 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2024-03-11 00:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '₹125 OFF',
                    subHeader: 'ABOVE ₹249',
                    discountTag: 'FLAT DEAL',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-a699f5ad-6b09-4598-b766-cd6bbaf1b55a',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/r-k-egg-eatery-vastrapur-ahmedabad-36191',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '491800',
                  name: 'Tamil Pasanga Cafe',
                  cloudinaryImageId: 'hjivmdrklmuqyrncuwlf',
                  locality: 'Vastrapur',
                  areaName: 'Amrapali Lakeview',
                  costForTwo: '₹200 for two',
                  cuisines: ['South Indian'],
                  avgRating: 4.7,
                  veg: true,
                  parentId: '294921',
                  avgRatingString: '4.7',
                  totalRatingsString: '500+',
                  sla: {
                    deliveryTime: 36,
                    lastMileTravel: 4.9,
                    serviceability: 'SERVICEABLE',
                    slaString: '36 mins',
                    lastMileTravelString: '4.9 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2024-03-04 23:59:00',
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: 'v1695133679/badges/Pure_Veg111.png',
                        description: 'pureveg',
                      },
                    ],
                  },
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: 'pureveg',
                              imageId: 'v1695133679/badges/Pure_Veg111.png',
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-a699f5ad-6b09-4598-b766-cd6bbaf1b55a',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/tamil-pasanga-cafe-vastrapur-amrapali-lakeview-ahmedabad-491800',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '168666',
                  name: 'Cake Bonzer Bites',
                  cloudinaryImageId: 'eqyqykgxqduewpor0hvv',
                  locality: 'Vidyanagar',
                  areaName: 'Vastrapur',
                  costForTwo: '₹200 for two',
                  cuisines: [
                    'Cakes and Pastries',
                    'Desserts',
                    'Bakery',
                    'Sweets',
                  ],
                  avgRating: 4.4,
                  veg: true,
                  parentId: '54771',
                  avgRatingString: '4.4',
                  totalRatingsString: '1K+',
                  sla: {
                    deliveryTime: 39,
                    lastMileTravel: 4.9,
                    serviceability: 'SERVICEABLE',
                    slaString: '39 mins',
                    lastMileTravelString: '4.9 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2024-03-11 00:00:00',
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: 'newg.png',
                        description: 'Gourmet',
                      },
                      {
                        imageId: 'v1695133679/badges/Pure_Veg111.png',
                        description: 'pureveg',
                      },
                    ],
                  },
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: 'Gourmet',
                              imageId: 'newg.png',
                            },
                          },
                          {
                            attributes: {
                              description: 'pureveg',
                              imageId: 'v1695133679/badges/Pure_Veg111.png',
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-a699f5ad-6b09-4598-b766-cd6bbaf1b55a',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/cake-bonzer-bites-vidyanagar-vastrapur-ahmedabad-168666',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '380885',
                  name: 'Meal Box',
                  cloudinaryImageId: 'zmhiwnkq3dfjt42cldjf',
                  locality: 'Shivranjani',
                  areaName: 'Vastrapur',
                  costForTwo: '₹100 for two',
                  cuisines: ['North Indian', 'Punjabi', 'Chinese'],
                  avgRating: 3.5,
                  veg: true,
                  parentId: '4939',
                  avgRatingString: '3.5',
                  totalRatingsString: '100+',
                  sla: {
                    deliveryTime: 51,
                    lastMileTravel: 3.9,
                    serviceability: 'SERVICEABLE',
                    slaString: '51 mins',
                    lastMileTravelString: '3.9 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2024-03-04 23:59:00',
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: 'v1695133679/badges/Pure_Veg111.png',
                        description: 'pureveg',
                      },
                    ],
                  },
                  isOpen: true,
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: 'pureveg',
                              imageId: 'v1695133679/badges/Pure_Veg111.png',
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: '₹100 OFF',
                    subHeader: 'ABOVE ₹399',
                    discountTag: 'FLAT DEAL',
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-a699f5ad-6b09-4598-b766-cd6bbaf1b55a',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/meal-box-shivranjani-vastrapur-ahmedabad-380885',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '380893',
                  name: 'Urban Foods',
                  cloudinaryImageId: 'mxycntcafrxgqnlr7kfc',
                  locality: 'Shivranjani',
                  areaName: 'Vastrapur',
                  costForTwo: '₹100 for two',
                  cuisines: ['North Indian', 'Chinese', 'Gujarati', 'Punjabi'],
                  avgRating: 3.3,
                  veg: true,
                  parentId: '11964',
                  avgRatingString: '3.3',
                  totalRatingsString: '50+',
                  sla: {
                    deliveryTime: 55,
                    lastMileTravel: 3.9,
                    serviceability: 'SERVICEABLE',
                    slaString: '55 mins',
                    lastMileTravelString: '3.9 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2024-03-04 23:59:00',
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: 'v1695133679/badges/Pure_Veg111.png',
                        description: 'pureveg',
                      },
                    ],
                  },
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: 'pureveg',
                              imageId: 'v1695133679/badges/Pure_Veg111.png',
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-a699f5ad-6b09-4598-b766-cd6bbaf1b55a',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/urban-foods-shivranjani-vastrapur-ahmedabad-380893',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '224293',
                  name: 'Cake Eggless',
                  cloudinaryImageId: 'u9zuuwtw4clnmplvhcms',
                  locality: 'Navrangpura',
                  areaName: 'Vastrapur',
                  costForTwo: '₹450 for two',
                  cuisines: [
                    'Cakes and Pastries',
                    'Bakery',
                    'Desserts',
                    'Sweets',
                  ],
                  avgRating: 4.6,
                  veg: true,
                  parentId: '54867',
                  avgRatingString: '4.6',
                  totalRatingsString: '500+',
                  sla: {
                    deliveryTime: 55,
                    lastMileTravel: 4.9,
                    serviceability: 'SERVICEABLE',
                    slaString: '55 mins',
                    lastMileTravelString: '4.9 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2024-03-11 00:00:00',
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: 'v1695133679/badges/Pure_Veg111.png',
                        description: 'pureveg',
                      },
                    ],
                  },
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: 'pureveg',
                              imageId: 'v1695133679/badges/Pure_Veg111.png',
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-a699f5ad-6b09-4598-b766-cd6bbaf1b55a',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/cake-eggless-navrangpura-vastrapur-ahmedabad-224293',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '817254',
                  name: 'Spice Box',
                  cloudinaryImageId: '8d8e0af99cbe68fe436f8a764aec7052',
                  locality: 'Vastrapur',
                  areaName: 'Vastrapur',
                  costForTwo: '₹200 for two',
                  cuisines: ['Healthy Food', 'Fast Food', 'Chinese'],
                  avgRating: 3.8,
                  veg: true,
                  parentId: '3651',
                  avgRatingString: '3.8',
                  totalRatingsString: '7',
                  sla: {
                    deliveryTime: 49,
                    lastMileTravel: 3.9,
                    serviceability: 'SERVICEABLE',
                    slaString: '49 mins',
                    lastMileTravelString: '3.9 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2024-03-05 00:00:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  isNewlyOnboarded: true,
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-a699f5ad-6b09-4598-b766-cd6bbaf1b55a',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/spice-box-vastrapur-ahmedabad-817254',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '816799',
                  name: 'Karma Junction',
                  cloudinaryImageId: '28e8b09c0ef8225deeae61fb755768f7',
                  locality: 'Vastrapur',
                  areaName: 'Vastrapur',
                  costForTwo: '₹200 for two',
                  cuisines: ['Indian', 'Fast Food', 'Snacks'],
                  avgRating: 3.7,
                  veg: true,
                  parentId: '486691',
                  avgRatingString: '3.7',
                  totalRatingsString: '5',
                  sla: {
                    deliveryTime: 47,
                    lastMileTravel: 3.7,
                    serviceability: 'SERVICEABLE',
                    slaString: '47 mins',
                    lastMileTravelString: '3.7 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2024-03-04 23:45:00',
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  isNewlyOnboarded: true,
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-a699f5ad-6b09-4598-b766-cd6bbaf1b55a',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/karma-junction-vastrapur-ahmedabad-816799',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
              {
                info: {
                  id: '386452',
                  name: 'Dilkhush Dabeli King',
                  cloudinaryImageId: 'mlr7a9vialk8moleprlf',
                  locality: 'Opposite Satyam mall',
                  areaName: 'Vastrapur',
                  costForTwo: '₹100 for two',
                  cuisines: ['Snacks'],
                  avgRating: 3.5,
                  veg: true,
                  parentId: '244830',
                  avgRatingString: '3.5',
                  totalRatingsString: '20+',
                  sla: {
                    deliveryTime: 45,
                    lastMileTravel: 4.7,
                    serviceability: 'SERVICEABLE',
                    slaString: '45 mins',
                    lastMileTravelString: '4.7 km',
                    iconType: 'ICON_TYPE_EMPTY',
                  },
                  availability: {
                    nextCloseTime: '2024-03-11 00:00:00',
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: 'v1695133679/badges/Pure_Veg111.png',
                        description: 'pureveg',
                      },
                    ],
                  },
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: 'F',
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: 'pureveg',
                              imageId: 'v1695133679/badges/Pure_Veg111.png',
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                    differentiatedUiMediaDetails: {
                      mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: 'seo-data-a699f5ad-6b09-4598-b766-cd6bbaf1b55a',
                },
                cta: {
                  link: 'https://www.swiggy.com/restaurants/dilkhush-dabeli-king-opposite-satyam-mall-vastrapur-ahmedabad-386452',
                  text: 'RESTAURANT_MENU',
                  type: 'WEBLINK',
                },
                widgetId:
                  'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
              },
            ],
            theme: 'SeoRestaurantListingGridWidget',
          },
        },
      },
    },
  },
];

//Function to check the number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Function to find the nth prime number
export function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}
