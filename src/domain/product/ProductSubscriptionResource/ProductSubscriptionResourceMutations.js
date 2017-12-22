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
import {ProductSubscriptionResourceInputType} from '../../product/ProductSubscriptionResource/ProductSubscriptionResourceInputType.js';
import {ProductSubscriptionResourceResponseType} from '../../product/ProductSubscriptionResource/ProductSubscriptionResourceResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductSubscriptionResource = {
  type: ProductSubscriptionResourceResponseType,
  description: 'mutation for ofbiz createProductSubscriptionResource method',
  args:{productSubscriptionResourceToBeAdded: {type: ProductSubscriptionResourceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productSubscriptionResources/add?`, args.productSubscriptionResourceToBeAdded, req);
  }
};
export {createProductSubscriptionResource};


const updateProductSubscriptionResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductSubscriptionResource method',
  args:{productSubscriptionResourceToBeUpdated: {type: ProductSubscriptionResourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productSubscriptionResources/${args.nullVal}?`, args.productSubscriptionResourceToBeUpdated, req);
  }
};
export {updateProductSubscriptionResource};


const deleteProductSubscriptionResourceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductSubscriptionResourceByIdUpdated method',
  args:{productSubscriptionResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productSubscriptionResources/${args.productSubscriptionResourceId}?`, null, req);
  }
};
export {deleteProductSubscriptionResourceByIdUpdated};
