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
import {ProductCategoryTypeInputType} from '../../product/ProductCategoryType/ProductCategoryTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductCategoryType method',
  args:{productCategoryTypeToBeAdded: {type: ProductCategoryTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryTypes/add?`, args.productCategoryTypeToBeAdded, req);
  }
};
export {createProductCategoryType};


const updateProductCategoryType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductCategoryType method',
  args:{productCategoryTypeToBeUpdated: {type: ProductCategoryTypeInputType},productCategoryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryTypes/${args.productCategoryTypeId}?`, args.productCategoryTypeToBeUpdated, req);
  }
};
export {updateProductCategoryType};


const deleteProductCategoryTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductCategoryTypeByIdUpdated method',
  args:{productCategoryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryTypes/${args.productCategoryTypeId}?`, null, req);
  }
};
export {deleteProductCategoryTypeByIdUpdated};
