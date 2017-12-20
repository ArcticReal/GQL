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
import {ProductFeatureTypeInputType} from '../../product/ProductFeatureType/ProductFeatureTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureType method',
  args:{productFeatureTypeToBeAdded: {type: ProductFeatureTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureTypes/add?`, args.productFeatureTypeToBeAdded, req);
  }
};
export {createProductFeatureType};


const updateProductFeatureType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureType method',
  args:{productFeatureTypeToBeUpdated: {type: ProductFeatureTypeInputType},productFeatureTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureTypes/${args.productFeatureTypeId}?`, args.productFeatureTypeToBeUpdated, req);
  }
};
export {updateProductFeatureType};


const deleteProductFeatureTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureTypeByIdUpdated method',
  args:{productFeatureTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureTypes/${args.productFeatureTypeId}?`, null, req);
  }
};
export {deleteProductFeatureTypeByIdUpdated};
