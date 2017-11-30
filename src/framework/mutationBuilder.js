import {productMutations} from '../product/product.js';
import {loginMutations} from '../login/login.js';

const mutationFields = Object.assign( {},
  productMutations,
  loginMutations
);

export {mutationFields};
