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
import {ProductFeatureApplInputType} from '../../product/ProductFeatureAppl/ProductFeatureApplInputType.js';
import {ProductFeatureApplResponseType} from '../../product/ProductFeatureAppl/ProductFeatureApplResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureAppl = {
  type: ProductFeatureApplResponseType,
  description: 'mutation for ofbiz createProductFeatureAppl method',
  args:{productFeatureApplToBeAdded: {type: ProductFeatureApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureAppls/add?`, args.productFeatureApplToBeAdded, req);
  }
};
export {createProductFeatureAppl};


const updateProductFeatureAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureAppl method',
  args:{productFeatureApplToBeUpdated: {type: ProductFeatureApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureAppls/${args.nullVal}?`, args.productFeatureApplToBeUpdated, req);
  }
};
export {updateProductFeatureAppl};


const deleteProductFeatureApplByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureApplByIdUpdated method',
  args:{productFeatureApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureAppls/${args.productFeatureApplId}?`, null, req);
  }
};
export {deleteProductFeatureApplByIdUpdated};
