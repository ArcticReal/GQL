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
import {ProductStoreGroupMemberInputType} from '../../product/ProductStoreGroupMember/ProductStoreGroupMemberInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductStoreGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreGroupMember method',
  args:{productStoreGroupMemberToBeAdded: {type: ProductStoreGroupMemberInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreGroupMembers/add?`, args.productStoreGroupMemberToBeAdded, req);
  }
};
export {createProductStoreGroupMember};


const updateProductStoreGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreGroupMember method',
  args:{productStoreGroupMemberToBeUpdated: {type: ProductStoreGroupMemberInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreGroupMembers/${args.nullVal}?`, args.productStoreGroupMemberToBeUpdated, req);
  }
};
export {updateProductStoreGroupMember};


const deleteProductStoreGroupMemberByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreGroupMemberByIdUpdated method',
  args:{productStoreGroupMemberId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreGroupMembers/${args.productStoreGroupMemberId}?`, null, req);
  }
};
export {deleteProductStoreGroupMemberByIdUpdated};
