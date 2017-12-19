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
import {ProductCategoryLinkInputType} from '../../product/ProductCategoryLink/ProductCategoryLinkInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductCategoryLink = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductCategoryLink method',
  args:{productCategoryLinkToBeAdded: {type: ProductCategoryLinkInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryLinks/add?`, args.productCategoryLinkToBeAdded, req);
  }
};
export {createProductCategoryLink};


const updateProductCategoryLink = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCategoryLink method',
  args:{productCategoryLinkToBeUpdated: {type: ProductCategoryLinkInputType},linkSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryLinks/${args.linkSeqId}?`, args.productCategoryLinkToBeUpdated, req);
  }
};
export {updateProductCategoryLink};


const deleteProductCategoryLinkByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCategoryLinkByIdUpdated method',
  args:{productCategoryLinkId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryLinks/${args.productCategoryLinkId}?`, null, req);
  }
};
export {deleteProductCategoryLinkByIdUpdated};
