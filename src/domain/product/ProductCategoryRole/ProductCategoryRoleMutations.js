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
import {ProductCategoryRoleInputType} from '../../product/ProductCategoryRole/ProductCategoryRoleInputType.js';
import {ProductCategoryRoleResponseType} from '../../product/ProductCategoryRole/ProductCategoryRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryRole = {
  type: ProductCategoryRoleResponseType,
  description: 'mutation for ofbiz createProductCategoryRole method',
  args:{productCategoryRoleToBeAdded: {type: ProductCategoryRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryRoles/add?`, args.productCategoryRoleToBeAdded, req);
  }
};
export {createProductCategoryRole};


const deleteProductCategoryRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCategoryRoleByIdUpdated method',
  args:{productCategoryRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryRoles/${args.productCategoryRoleId}?`, null, req);
  }
};
export {deleteProductCategoryRoleByIdUpdated};


const updateProductCategoryRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCategoryRole method',
  args:{productCategoryRoleToBeUpdated: {type: ProductCategoryRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryRoles/${args.roleTypeId}?`, args.productCategoryRoleToBeUpdated, req);
  }
};
export {updateProductCategoryRole};
