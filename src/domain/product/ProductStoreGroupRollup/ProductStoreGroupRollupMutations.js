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
import {ProductStoreGroupRollupResponseType} from '../../product/ProductStoreGroupRollup/ProductStoreGroupRollupResponseType.js';
import {ProductStoreGroupRollupInputType} from '../../product/ProductStoreGroupRollup/ProductStoreGroupRollupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreGroupRollup = {
  type: ProductStoreGroupRollupResponseType,
  description: 'mutation for ofbiz createProductStoreGroupRollup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreGroupRollups/add?`, null, req);
  }
};
export {createProductStoreGroupRollup};


const updateProductStoreGroupRollup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreGroupRollup method',
  args:{productStoreGroupRollupToBeUpdated: {type: ProductStoreGroupRollupInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreGroupRollups/${args.nullVal}?`, args.productStoreGroupRollupToBeUpdated, req);
  }
};
export {updateProductStoreGroupRollup};


const deleteProductStoreGroupRollupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreGroupRollupByIdUpdated method',
  args:{productStoreGroupRollupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreGroupRollups/${args.productStoreGroupRollupId}?`, null, req);
  }
};
export {deleteProductStoreGroupRollupByIdUpdated};
