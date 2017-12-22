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
import {ProductFeatureTypeResponseType} from '../../product/ProductFeatureType/ProductFeatureTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureType = {
  type: ProductFeatureTypeResponseType,
  description: 'mutation for ofbiz createProductFeatureType method',
  args:{productFeatureTypeToBeAdded: {type: ProductFeatureTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureTypes/add?`, args.productFeatureTypeToBeAdded, req);
  }
};
export {createProductFeatureType};


const updateProductFeatureType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureType method',
  args:{productFeatureTypeToBeUpdated: {type: ProductFeatureTypeInputType},productFeatureTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureTypes/${args.productFeatureTypeId}?`, args.productFeatureTypeToBeUpdated, req);
  }
};
export {updateProductFeatureType};


const deleteProductFeatureTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureTypeByIdUpdated method',
  args:{productFeatureTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureTypes/${args.productFeatureTypeId}?`, null, req);
  }
};
export {deleteProductFeatureTypeByIdUpdated};
