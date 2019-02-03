import { Recipe } from './recipe';

export const RECIPES: Recipe[] = [
  {
    "id":123,
    "dish":"Soup",
    "steps": [
      "Cut the chicken in small pieces",
      "Fry the chicken",
      "Cook the noodles for 30 minutes",
      "Mix all ingredients"
    ],
    "ingredients": [
      "1L of water",
      "200g of noodles",
      "200g of chicken"
    ],
    "tags": [
      "hot",
      "nutritive"
    ]
  },
  {
    "id":124,
    "dish":"Burguer",
    "steps": [
      "Fry the hamburguer",
      "Slice the bread",
      "Mount the burguer"
    ],
    "ingredients": [
      "1 bum",
      "1 hamburguer",
      "2 slices of cheese"
    ],
    "tags": [
      "hot"
    ]
  },
  {
    "id":124,
    "dish":"hotdog",
    "steps": [
      "Cook the hotdogs",
      "Cut the bread",
      "Put the hotdog inside the bread and cover with cheese"
    ],
    "ingredients": [
      "bread",
      "hotdogs",
      "cheese"
    ],
    "tags": [
      "hot"
    ]
  }
]