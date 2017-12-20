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
import {ProductConfigOptionIactnInputType} from '../../product/ProductConfigOptionIactn/ProductConfigOptionIactnInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductConfigOptionIactn = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductConfigOptionIactn method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productConfigOptionIactns/add?`, null, req);
  }
};
export {createProductConfigOptionIactn};


const updateProductConfigOptionIactn = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductConfigOptionIactn method',
  args:{productConfigOptionIactnToBeUpdated: {type: ProductConfigOptionIactnInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productConfigOptionIactns/${args.nullVal}?`, args.productConfigOptionIactnToBeUpdated, req);
  }
};
export {updateProductConfigOptionIactn};


const deleteProductConfigOptionIactnByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductConfigOptionIactnByIdUpdated method',
  args:{productConfigOptionIactnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productConfigOptionIactns/${args.productConfigOptionIactnId}?`, null, req);
  }
};
export {deleteProductConfigOptionIactnByIdUpdated};
