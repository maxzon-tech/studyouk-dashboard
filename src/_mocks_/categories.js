import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgCategory } from '../utils/mockImages';

// ----------------------------------------------------------------------

const CATEGORY_NAME = [
  'B.Com Tax',
  'B.Com Computer',
  'B.Com Finance',
  'BBA HR',
  'BBA Finance',
  'BBA Marketing',
  'Bsc Physics',
  'Bsc Chemistry',
  'Bsc Mathematics',
  'BCA'
];
const CATEGORY_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

// ----------------------------------------------------------------------

const categories = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgCategory(setIndex),
    name: CATEGORY_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && CATEGORY_COLOR.slice(0, 2)) ||
      (setIndex === 2 && CATEGORY_COLOR.slice(1, 3)) ||
      (setIndex === 3 && CATEGORY_COLOR.slice(2, 4)) ||
      (setIndex === 4 && CATEGORY_COLOR.slice(3, 6)) ||
      (setIndex === 23 && CATEGORY_COLOR.slice(4, 6)) ||
      (setIndex === 24 && CATEGORY_COLOR.slice(5, 6)),
    status: sample(['sale', 'new', '', ''])
  };
});

export default categories;
