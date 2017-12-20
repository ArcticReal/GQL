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
import {ProductFeatureApplTypeInputType} from '../../product/ProductFeatureApplType/ProductFeatureApplTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureApplType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureApplType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureApplTypes/add?`, null, req);
  }
};
export {createProductFeatureApplType};


const updateProductFeatureApplType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureApplType method',
  args:{productFeatureApplTypeToBeUpdated: {type: ProductFeatureApplTypeInputType},productFeatureApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureApplTypes/${args.productFeatureApplTypeId}?`, args.productFeatureApplTypeToBeUpdated, req);
  }
};
export {updateProductFeatureApplType};


const deleteProductFeatureApplTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureApplTypeByIdUpdated method',
  args:{productFeatureApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureApplTypes/${args.productFeatureApplTypeId}?`, null, req);
  }
};
export {deleteProductFeatureApplTypeByIdUpdated};
