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
import {ProductFeatureIactnInputType} from '../../product/ProductFeatureIactn/ProductFeatureIactnInputType.js';
import {ProductFeatureIactnResponseType} from '../../product/ProductFeatureIactn/ProductFeatureIactnResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductFeatureIactn = {
  type: ProductFeatureIactnResponseType,
  description: 'mutation for ofbiz createProductFeatureIactn method',
  args:{productFeatureIactnToBeAdded: {type: ProductFeatureIactnInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productFeatureIactns/add?`, args.productFeatureIactnToBeAdded, req);
  }
};
export {createProductFeatureIactn};


const updateProductFeatureIactn = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductFeatureIactn method',
  args:{productFeatureIactnToBeUpdated: {type: ProductFeatureIactnInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productFeatureIactns/${args.nullVal}?`, args.productFeatureIactnToBeUpdated, req);
  }
};
export {updateProductFeatureIactn};


const deleteProductFeatureIactnByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductFeatureIactnByIdUpdated method',
  args:{productFeatureIactnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productFeatureIactns/${args.productFeatureIactnId}?`, null, req);
  }
};
export {deleteProductFeatureIactnByIdUpdated};
