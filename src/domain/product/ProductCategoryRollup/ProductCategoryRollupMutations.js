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
import {ProductCategoryRollupInputType} from '../../product/ProductCategoryRollup/ProductCategoryRollupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductCategoryRollup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductCategoryRollup method',
  args:{productCategoryRollupToBeAdded: {type: ProductCategoryRollupInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryRollups/add?`, args.productCategoryRollupToBeAdded, req);
  }
};
export {createProductCategoryRollup};


const updateProductCategoryRollup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCategoryRollup method',
  args:{productCategoryRollupToBeUpdated: {type: ProductCategoryRollupInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryRollups/${args.nullVal}?`, args.productCategoryRollupToBeUpdated, req);
  }
};
export {updateProductCategoryRollup};


const deleteProductCategoryRollupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCategoryRollupByIdUpdated method',
  args:{productCategoryRollupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryRollups/${args.productCategoryRollupId}?`, null, req);
  }
};
export {deleteProductCategoryRollupByIdUpdated};
