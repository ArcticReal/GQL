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
import {ProductConfigItemInputType} from '../../product/ProductConfigItem/ProductConfigItemInputType.js';
import {ProductConfigItemResponseType} from '../../product/ProductConfigItem/ProductConfigItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductConfigItem = {
  type: ProductConfigItemResponseType,
  description: 'mutation for ofbiz createProductConfigItem method',
  args:{productConfigItemToBeAdded: {type: ProductConfigItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productConfigItems/add?`, args.productConfigItemToBeAdded, req);
  }
};
export {createProductConfigItem};


const updateProductConfigItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductConfigItem method',
  args:{productConfigItemToBeUpdated: {type: ProductConfigItemInputType},configItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productConfigItems/${args.configItemId}?`, args.productConfigItemToBeUpdated, req);
  }
};
export {updateProductConfigItem};


const deleteProductConfigItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductConfigItemByIdUpdated method',
  args:{productConfigItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productConfigItems/${args.productConfigItemId}?`, null, req);
  }
};
export {deleteProductConfigItemByIdUpdated};
