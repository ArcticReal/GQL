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
import {ProductStoreGroupTypeResponseType} from '../../product/ProductStoreGroupType/ProductStoreGroupTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreGroupType = {
  type: ProductStoreGroupTypeResponseType,
  description: 'mutation for ofbiz createProductStoreGroupType method',
  args:{productStoreGroupTypeToBeAdded: {type: ProductStoreGroupTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreGroupTypes/add?`, args.productStoreGroupTypeToBeAdded, req);
  }
};
export {createProductStoreGroupType};


const updateProductStoreGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreGroupType method',
  args:{productStoreGroupTypeToBeUpdated: {type: ProductStoreGroupTypeInputType},productStoreGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreGroupTypes/${args.productStoreGroupTypeId}?`, args.productStoreGroupTypeToBeUpdated, req);
  }
};
export {updateProductStoreGroupType};


const deleteProductStoreGroupTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreGroupTypeByIdUpdated method',
  args:{productStoreGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreGroupTypes/${args.productStoreGroupTypeId}?`, null, req);
  }
};
export {deleteProductStoreGroupTypeByIdUpdated};
