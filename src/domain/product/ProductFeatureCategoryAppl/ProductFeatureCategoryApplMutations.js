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
import {ProductFeatureCategoryApplInputType} from '../../product/ProductFeatureCategoryAppl/ProductFeatureCategoryApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductFeatureCategoryAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductFeatureCategoryAppl method',
  args:{productFeatureCategoryApplToBeAdded: {type: ProductFeatureCategoryApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureCategoryAppls/add?`, args.productFeatureCategoryApplToBeAdded, req);
  }
};
export {createProductFeatureCategoryAppl};


const updateProductFeatureCategoryAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureCategoryAppl method',
  args:{productFeatureCategoryApplToBeUpdated: {type: ProductFeatureCategoryApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureCategoryAppls/${args.nullVal}?`, args.productFeatureCategoryApplToBeUpdated, req);
  }
};
export {updateProductFeatureCategoryAppl};


const deleteProductFeatureCategoryApplByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureCategoryApplByIdUpdated method',
  args:{productFeatureCategoryApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureCategoryAppls/${args.productFeatureCategoryApplId}?`, null, req);
  }
};
export {deleteProductFeatureCategoryApplByIdUpdated};
