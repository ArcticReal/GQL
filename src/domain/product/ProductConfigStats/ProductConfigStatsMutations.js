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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductConfigStats = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductConfigStats method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productConfigStatss/add?`, null, req);
  }
};
export {createProductConfigStats};


const updateProductConfigStats = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductConfigStats method',
  args:{productConfigStatsToBeUpdated: {type: ProductConfigStatsInputType},configId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productConfigStatss/${args.configId}?`, args.productConfigStatsToBeUpdated, req);
  }
};
export {updateProductConfigStats};


const deleteProductConfigStatsByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductConfigStatsByIdUpdated method',
  args:{productConfigStatsId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productConfigStatss/${args.productConfigStatsId}?`, null, req);
  }
};
export {deleteProductConfigStatsByIdUpdated};
