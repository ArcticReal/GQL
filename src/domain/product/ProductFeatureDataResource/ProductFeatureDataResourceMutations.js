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
import {ProductFeatureDataResourceInputType} from '../../product/ProductFeatureDataResource/ProductFeatureDataResourceInputType.js';
import {ProductFeatureDataResourceResponseType} from '../../product/ProductFeatureDataResource/ProductFeatureDataResourceResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureDataResource = {
  type: ProductFeatureDataResourceResponseType,
  description: 'mutation for ofbiz createProductFeatureDataResource method',
  args:{productFeatureDataResourceToBeAdded: {type: ProductFeatureDataResourceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureDataResources/add?`, args.productFeatureDataResourceToBeAdded, req);
  }
};
export {createProductFeatureDataResource};


const updateProductFeatureDataResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureDataResource method',
  args:{productFeatureDataResourceToBeUpdated: {type: ProductFeatureDataResourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureDataResources/${args.nullVal}?`, args.productFeatureDataResourceToBeUpdated, req);
  }
};
export {updateProductFeatureDataResource};


const deleteProductFeatureDataResourceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureDataResourceByIdUpdated method',
  args:{productFeatureDataResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureDataResources/${args.productFeatureDataResourceId}?`, null, req);
  }
};
export {deleteProductFeatureDataResourceByIdUpdated};
