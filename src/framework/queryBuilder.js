import {productQueries} from '../domain/rootQueries/productQueries.js';
import {cartQueries} from '../domain/rootQueries/cartQueries.js';
import {countryQueries} from '../domain/rootQueries/countryQueries.js';
import {loginQueries} from '../domain/rootQueries/loginQueries.js';
import {orderQueries} from '../domain/rootQueries/orderQueries.js';
import {productCategoryQueries} from '../domain/rootQueries/productCategoryQueries.js';
import {productPromoQueries} from '../domain/rootQueries/productPromoQueries.js';
import {verificationQueries} from '../domain/rootQueries/verificationQueries.js';

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
