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
import {ProductFeatureCatGrpApplInputType} from '../../product/ProductFeatureCatGrpAppl/ProductFeatureCatGrpApplInputType.js';
import {ProductFeatureCatGrpApplResponseType} from '../../product/ProductFeatureCatGrpAppl/ProductFeatureCatGrpApplResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureCatGrpAppl = {
  type: ProductFeatureCatGrpApplResponseType,
  description: 'mutation for ofbiz createProductFeatureCatGrpAppl method',
  args:{productFeatureCatGrpApplToBeAdded: {type: ProductFeatureCatGrpApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureCatGrpAppls/add?`, args.productFeatureCatGrpApplToBeAdded, req);
  }
};
export {createProductFeatureCatGrpAppl};


const updateProductFeatureCatGrpAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureCatGrpAppl method',
  args:{productFeatureCatGrpApplToBeUpdated: {type: ProductFeatureCatGrpApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureCatGrpAppls/${args.nullVal}?`, args.productFeatureCatGrpApplToBeUpdated, req);
  }
};
export {updateProductFeatureCatGrpAppl};


const deleteProductFeatureCatGrpApplByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureCatGrpApplByIdUpdated method',
  args:{productFeatureCatGrpApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureCatGrpAppls/${args.productFeatureCatGrpApplId}?`, null, req);
  }
};
export {deleteProductFeatureCatGrpApplByIdUpdated};
