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
import {ProductCategoryContentInputType} from '../../product/ProductCategoryContent/ProductCategoryContentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductCategoryContent method',
  args:{productCategoryContentToBeAdded: {type: ProductCategoryContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryContents/add?`, args.productCategoryContentToBeAdded, req);
  }
};
export {createProductCategoryContent};


const updateProductCategoryContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductCategoryContent method',
  args:{productCategoryContentToBeUpdated: {type: ProductCategoryContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryContents/${args.nullVal}?`, args.productCategoryContentToBeUpdated, req);
  }
};
export {updateProductCategoryContent};


const deleteProductCategoryContentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductCategoryContentByIdUpdated method',
  args:{productCategoryContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryContents/${args.productCategoryContentId}?`, null, req);
  }
};
export {deleteProductCategoryContentByIdUpdated};
