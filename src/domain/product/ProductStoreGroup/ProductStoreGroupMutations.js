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
import {ProductStoreGroupInputType} from '../../product/ProductStoreGroup/ProductStoreGroupInputType.js';
import {ProductStoreGroupResponseType} from '../../product/ProductStoreGroup/ProductStoreGroupResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreGroup = {
  type: ProductStoreGroupResponseType,
  description: 'mutation for ofbiz createProductStoreGroup method',
  args:{productStoreGroupToBeAdded: {type: ProductStoreGroupInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreGroups/add?`, args.productStoreGroupToBeAdded, req);
  }
};
export {createProductStoreGroup};


const updateProductStoreGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreGroup method',
  args:{productStoreGroupToBeUpdated: {type: ProductStoreGroupInputType},productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreGroups/${args.productStoreGroupId}?`, args.productStoreGroupToBeUpdated, req);
  }
};
export {updateProductStoreGroup};


const deleteProductStoreGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreGroupByIdUpdated method',
  args:{productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreGroups/${args.productStoreGroupId}?`, null, req);
  }
};
export {deleteProductStoreGroupByIdUpdated};
