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
import {ProductFeaturePriceInputType} from '../../product/ProductFeaturePrice/ProductFeaturePriceInputType.js';
import {ProductFeaturePriceResponseType} from '../../product/ProductFeaturePrice/ProductFeaturePriceResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeaturePrice = {
  type: ProductFeaturePriceResponseType,
  description: 'mutation for ofbiz createProductFeaturePrice method',
  args:{productFeaturePriceToBeAdded: {type: ProductFeaturePriceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeaturePrices/add?`, args.productFeaturePriceToBeAdded, req);
  }
};
export {createProductFeaturePrice};


const updateProductFeaturePrice = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeaturePrice method',
  args:{productFeaturePriceToBeUpdated: {type: ProductFeaturePriceInputType},productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeaturePrices/${args.productFeatureId}?`, args.productFeaturePriceToBeUpdated, req);
  }
};
export {updateProductFeaturePrice};


const deleteProductFeaturePriceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeaturePriceByIdUpdated method',
  args:{productFeaturePriceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeaturePrices/${args.productFeaturePriceId}?`, null, req);
  }
};
export {deleteProductFeaturePriceByIdUpdated};
