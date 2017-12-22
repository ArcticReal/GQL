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
import {ProductFeatureApplTypeResponseType} from '../../product/ProductFeatureApplType/ProductFeatureApplTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureApplType = {
  type: ProductFeatureApplTypeResponseType,
  description: 'mutation for ofbiz createProductFeatureApplType method',
  args:{productFeatureApplTypeToBeAdded: {type: ProductFeatureApplTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureApplTypes/add?`, args.productFeatureApplTypeToBeAdded, req);
  }
};
export {createProductFeatureApplType};


const updateProductFeatureApplType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureApplType method',
  args:{productFeatureApplTypeToBeUpdated: {type: ProductFeatureApplTypeInputType},productFeatureApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureApplTypes/${args.productFeatureApplTypeId}?`, args.productFeatureApplTypeToBeUpdated, req);
  }
};
export {updateProductFeatureApplType};


const deleteProductFeatureApplTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureApplTypeByIdUpdated method',
  args:{productFeatureApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureApplTypes/${args.productFeatureApplTypeId}?`, null, req);
  }
};
export {deleteProductFeatureApplTypeByIdUpdated};
