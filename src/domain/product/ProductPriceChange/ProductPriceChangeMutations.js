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
import {ProductPriceChangeInputType} from '../../product/ProductPriceChange/ProductPriceChangeInputType.js';
import {ProductPriceChangeResponseType} from '../../product/ProductPriceChange/ProductPriceChangeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPriceChange = {
  type: ProductPriceChangeResponseType,
  description: 'mutation for ofbiz createProductPriceChange method',
  args:{productPriceChangeToBeAdded: {type: ProductPriceChangeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPriceChanges/add?`, args.productPriceChangeToBeAdded, req);
  }
};
export {createProductPriceChange};


const updateProductPriceChange = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPriceChange method',
  args:{productPriceChangeToBeUpdated: {type: ProductPriceChangeInputType},productPriceChangeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPriceChanges/${args.productPriceChangeId}?`, args.productPriceChangeToBeUpdated, req);
  }
};
export {updateProductPriceChange};


const deleteProductPriceChangeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPriceChangeByIdUpdated method',
  args:{productPriceChangeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPriceChanges/${args.productPriceChangeId}?`, null, req);
  }
};
export {deleteProductPriceChangeByIdUpdated};
