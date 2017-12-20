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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureCatGrpAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureCatGrpAppl method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureCatGrpAppls/add?`, null, req);
  }
};
export {createProductFeatureCatGrpAppl};


const updateProductFeatureCatGrpAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureCatGrpAppl method',
  args:{productFeatureCatGrpApplToBeUpdated: {type: ProductFeatureCatGrpApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureCatGrpAppls/${args.nullVal}?`, args.productFeatureCatGrpApplToBeUpdated, req);
  }
};
export {updateProductFeatureCatGrpAppl};


const deleteProductFeatureCatGrpApplByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureCatGrpApplByIdUpdated method',
  args:{productFeatureCatGrpApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureCatGrpAppls/${args.productFeatureCatGrpApplId}?`, null, req);
  }
};
export {deleteProductFeatureCatGrpApplByIdUpdated};
