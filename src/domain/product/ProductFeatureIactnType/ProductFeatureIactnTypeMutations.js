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
import {ProductFeatureIactnTypeInputType} from '../../product/ProductFeatureIactnType/ProductFeatureIactnTypeInputType.js';
import {ProductFeatureIactnTypeResponseType} from '../../product/ProductFeatureIactnType/ProductFeatureIactnTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureIactnType = {
  type: ProductFeatureIactnTypeResponseType,
  description: 'mutation for ofbiz createProductFeatureIactnType method',
  args:{productFeatureIactnTypeToBeAdded: {type: ProductFeatureIactnTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureIactnTypes/add?`, args.productFeatureIactnTypeToBeAdded, req);
  }
};
export {createProductFeatureIactnType};


const updateProductFeatureIactnType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureIactnType method',
  args:{productFeatureIactnTypeToBeUpdated: {type: ProductFeatureIactnTypeInputType},productFeatureIactnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureIactnTypes/${args.productFeatureIactnTypeId}?`, args.productFeatureIactnTypeToBeUpdated, req);
  }
};
export {updateProductFeatureIactnType};


const deleteProductFeatureIactnTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureIactnTypeByIdUpdated method',
  args:{productFeatureIactnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureIactnTypes/${args.productFeatureIactnTypeId}?`, null, req);
  }
};
export {deleteProductFeatureIactnTypeByIdUpdated};
