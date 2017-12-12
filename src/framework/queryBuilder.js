import {productQueries} from './rootQueries/productQueries.js';
import {cartQueries} from './rootQueries/cartQueries.js';
import {countryQueries} from './rootQueries/countryQueries.js';
import {loginQueries} from './rootQueries/loginQueries.js';
import {orderQueries} from './rootQueries/orderQueries.js';
import {productCategoryQueries} from './rootQueries/productCategoryQueries.js';
import {productPromoQueries} from './rootQueries/productPromoQueries.js';
import {verificationQueries} from './rootQueries/verificationQueries.js';

const queryFields = Object.assign( {},
  productQueries,
  cartQueries,
  countryQueries,
  loginQueries,
  orderQueries,
  productCategoryQueries,
  productPromoQueries,
  verificationQueries
);

export {queryFields};
