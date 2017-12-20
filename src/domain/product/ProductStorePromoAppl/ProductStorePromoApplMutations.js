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
import {ProductStorePromoApplInputType} from '../../product/ProductStorePromoAppl/ProductStorePromoApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStorePromoAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductStorePromoAppl method',
  args:{productStorePromoApplToBeAdded: {type: ProductStorePromoApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStorePromoAppls/add?`, args.productStorePromoApplToBeAdded, req);
  }
};
export {createProductStorePromoAppl};


const updateProductStorePromoAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductStorePromoAppl method',
  args:{productStorePromoApplToBeUpdated: {type: ProductStorePromoApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStorePromoAppls/${args.nullVal}?`, args.productStorePromoApplToBeUpdated, req);
  }
};
export {updateProductStorePromoAppl};


const deleteProductStorePromoApplByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductStorePromoApplByIdUpdated method',
  args:{productStorePromoApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStorePromoAppls/${args.productStorePromoApplId}?`, null, req);
  }
};
export {deleteProductStorePromoApplByIdUpdated};
