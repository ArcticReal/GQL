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
import {ProductConfigOptionInputType} from '../../product/ProductConfigOption/ProductConfigOptionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductConfigOption = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductConfigOption method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productConfigOptions/add?`, null, req);
  }
};
export {createProductConfigOption};


const updateProductConfigOption = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductConfigOption method',
  args:{productConfigOptionToBeUpdated: {type: ProductConfigOptionInputType},configOptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productConfigOptions/${args.configOptionId}?`, args.productConfigOptionToBeUpdated, req);
  }
};
export {updateProductConfigOption};


const deleteProductConfigOptionByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductConfigOptionByIdUpdated method',
  args:{productConfigOptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productConfigOptions/${args.productConfigOptionId}?`, null, req);
  }
};
export {deleteProductConfigOptionByIdUpdated};
