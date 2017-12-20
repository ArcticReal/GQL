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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductStoreGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreGroups/add?`, null, req);
  }
};
export {createProductStoreGroup};


const updateProductStoreGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductStoreGroup method',
  args:{productStoreGroupToBeUpdated: {type: ProductStoreGroupInputType},productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreGroups/${args.productStoreGroupId}?`, args.productStoreGroupToBeUpdated, req);
  }
};
export {updateProductStoreGroup};


const deleteProductStoreGroupByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductStoreGroupByIdUpdated method',
  args:{productStoreGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreGroups/${args.productStoreGroupId}?`, null, req);
  }
};
export {deleteProductStoreGroupByIdUpdated};
