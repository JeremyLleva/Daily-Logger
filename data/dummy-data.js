/** @format */

import Meal from '../models/meal'

export const MEALS = [
    new Meal('m1', 'Cereal', '8/26/2020', '7:02:20', ['Milk', 'Cereal'], 300),
    new Meal('m2', 'Burger', '8/26/2020', '12:02:47', ['Bread', 'Steak'], 700),
    new Meal(
        'm2',
        'Cake',
        '8/28/2020',
        '1:02:17',
        ['Flour', 'Baking Soda'],
        300
    ),
    new Meal(
        'm2',
        'Pancakes',
        '8/28/2020',
        '7:03:25',
        ['Flour', 'Baking Powder', 'Egg'],
        700
    ),
    new Meal(
        'm2',
        'Salad',
        '8/26/2020',
        '12:02:30',
        ['Lettuce', 'Tomatoes'],
        200
    ),
    new Meal('m2', 'Hotdog', '8/26/2020', '12:02:12', ['Bread', 'Hotdog'], 700),
]
