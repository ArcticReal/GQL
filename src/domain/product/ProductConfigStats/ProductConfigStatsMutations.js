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
import {ProductConfigStatsInputType} from '../../product/ProductConfigStats/ProductConfigStatsInputType.js';
import {ProductConfigStatsResponseType} from '../../product/ProductConfigStats/ProductConfigStatsResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductConfigStats = {
  type: ProductConfigStatsResponseType,
  description: 'mutation for ofbiz createProductConfigStats method',
  args:{productConfigStatsToBeAdded: {type: ProductConfigStatsInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productConfigStatss/add?`, args.productConfigStatsToBeAdded, req);
  }
};
export {createProductConfigStats};


const updateProductConfigStats = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductConfigStats method',
  args:{productConfigStatsToBeUpdated: {type: ProductConfigStatsInputType},configId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productConfigStatss/${args.configId}?`, args.productConfigStatsToBeUpdated, req);
  }
};
export {updateProductConfigStats};


const deleteProductConfigStatsByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductConfigStatsByIdUpdated method',
  args:{productConfigStatsId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productConfigStatss/${args.productConfigStatsId}?`, null, req);
  }
};
export {deleteProductConfigStatsByIdUpdated};
