import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {ProductPriceResponseType} from '../../product/ProductPrice/ProductPriceResponseType.js';
import {ProductPriceInputType} from '../../product/ProductPrice/ProductPriceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPrice = {
  type: ProductPriceResponseType,
  description: 'mutation for ofbiz createProductPrice method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPrices/add?`, null, req);
  }
};
export {createProductPrice};


const updateProductPrice = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductPrice method',
  args:{productPriceToBeUpdated: {type: ProductPriceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPrices/${args.nullVal}?`, args.productPriceToBeUpdated, req);
  }
};
export {updateProductPrice};


const deleteProductPriceByIdUpdated = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductPriceByIdUpdated method',
  args:{productPriceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPrices/${args.productPriceId}?`, null, req);
  }
};
export {deleteProductPriceByIdUpdated};
