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
import {ProductFeatureGroupApplInputType} from '../../product/ProductFeatureGroupAppl/ProductFeatureGroupApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductFeatureGroupAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductFeatureGroupAppl method',
  args:{productFeatureGroupApplToBeAdded: {type: ProductFeatureGroupApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureGroupAppls/add?`, args.productFeatureGroupApplToBeAdded, req);
  }
};
export {createProductFeatureGroupAppl};


const updateProductFeatureGroupAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureGroupAppl method',
  args:{productFeatureGroupApplToBeUpdated: {type: ProductFeatureGroupApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureGroupAppls/${args.nullVal}?`, args.productFeatureGroupApplToBeUpdated, req);
  }
};
export {updateProductFeatureGroupAppl};


const deleteProductFeatureGroupApplByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureGroupApplByIdUpdated method',
  args:{productFeatureGroupApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureGroupAppls/${args.productFeatureGroupApplId}?`, null, req);
  }
};
export {deleteProductFeatureGroupApplByIdUpdated};
