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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductCategoryRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryRoles/add?`, null, req);
  }
};
export {createProductCategoryRole};


const deleteProductCategoryRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductCategoryRoleByIdUpdated method',
  args:{productCategoryRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryRoles/${args.productCategoryRoleId}?`, null, req);
  }
};
export {deleteProductCategoryRoleByIdUpdated};


const updateProductCategoryRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductCategoryRole method',
  args:{productCategoryRoleToBeUpdated: {type: ProductCategoryRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryRoles/${args.roleTypeId}?`, args.productCategoryRoleToBeUpdated, req);
  }
};
export {updateProductCategoryRole};
