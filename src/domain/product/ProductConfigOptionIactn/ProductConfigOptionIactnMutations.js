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


const createProductConfigOptionIactn = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductConfigOptionIactn method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productConfigOptionIactns/add?`, null, req);
  }
};
export {createProductConfigOptionIactn};


const updateProductConfigOptionIactn = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductConfigOptionIactn method',
  args:{productConfigOptionIactnToBeUpdated: {type: ProductConfigOptionIactnInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productConfigOptionIactns/${args.nullVal}?`, args.productConfigOptionIactnToBeUpdated, req);
  }
};
export {updateProductConfigOptionIactn};


const deleteProductConfigOptionIactnByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductConfigOptionIactnByIdUpdated method',
  args:{productConfigOptionIactnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productConfigOptionIactns/${args.productConfigOptionIactnId}?`, null, req);
  }
};
export {deleteProductConfigOptionIactnByIdUpdated};
