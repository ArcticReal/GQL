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
import {ProductCategoryMemberInputType} from '../../product/ProductCategoryMember/ProductCategoryMemberInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryMember = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductCategoryMember method',
  args:{productCategoryMemberToBeAdded: {type: ProductCategoryMemberInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryMembers/add?`, args.productCategoryMemberToBeAdded, req);
  }
};
export {createProductCategoryMember};


const updateProductCategoryMember = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductCategoryMember method',
  args:{productCategoryMemberToBeUpdated: {type: ProductCategoryMemberInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryMembers/${args.nullVal}?`, args.productCategoryMemberToBeUpdated, req);
  }
};
export {updateProductCategoryMember};


const deleteProductCategoryMemberByCategoryId = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductCategoryMemberByCategoryId method',
  args:{productCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryMembers/${args.productCategoryId}?`, null, req);
  }
};
export {deleteProductCategoryMemberByCategoryId};
