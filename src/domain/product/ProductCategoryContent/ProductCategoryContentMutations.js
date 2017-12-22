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
import {ProductCategoryContentResponseType} from '../../product/ProductCategoryContent/ProductCategoryContentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryContent = {
  type: ProductCategoryContentResponseType,
  description: 'mutation for ofbiz createProductCategoryContent method',
  args:{productCategoryContentToBeAdded: {type: ProductCategoryContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryContents/add?`, args.productCategoryContentToBeAdded, req);
  }
};
export {createProductCategoryContent};


const updateProductCategoryContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCategoryContent method',
  args:{productCategoryContentToBeUpdated: {type: ProductCategoryContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryContents/${args.nullVal}?`, args.productCategoryContentToBeUpdated, req);
  }
};
export {updateProductCategoryContent};


const deleteProductCategoryContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCategoryContentByIdUpdated method',
  args:{productCategoryContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryContents/${args.productCategoryContentId}?`, null, req);
  }
};
export {deleteProductCategoryContentByIdUpdated};
