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
import {ProductStoreGroupTypeInputType} from '../../product/ProductStoreGroupType/ProductStoreGroupTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreGroupType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductStoreGroupType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreGroupTypes/add?`, null, req);
  }
};
export {createProductStoreGroupType};


const updateProductStoreGroupType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductStoreGroupType method',
  args:{productStoreGroupTypeToBeUpdated: {type: ProductStoreGroupTypeInputType},productStoreGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreGroupTypes/${args.productStoreGroupTypeId}?`, args.productStoreGroupTypeToBeUpdated, req);
  }
};
export {updateProductStoreGroupType};


const deleteProductStoreGroupTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductStoreGroupTypeByIdUpdated method',
  args:{productStoreGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreGroupTypes/${args.productStoreGroupTypeId}?`, null, req);
  }
};
export {deleteProductStoreGroupTypeByIdUpdated};
