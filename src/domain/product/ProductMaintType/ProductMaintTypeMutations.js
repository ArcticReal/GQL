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
import {ProductMaintTypeInputType} from '../../product/ProductMaintType/ProductMaintTypeInputType.js';
import {ProductMaintTypeResponseType} from '../../product/ProductMaintType/ProductMaintTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductMaintType = {
  type: ProductMaintTypeResponseType,
  description: 'mutation for ofbiz createProductMaintType method',
  args:{productMaintTypeToBeAdded: {type: ProductMaintTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productMaintTypes/add?`, args.productMaintTypeToBeAdded, req);
  }
};
export {createProductMaintType};


const updateProductMaintType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductMaintType method',
  args:{productMaintTypeToBeUpdated: {type: ProductMaintTypeInputType},productMaintTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productMaintTypes/${args.productMaintTypeId}?`, args.productMaintTypeToBeUpdated, req);
  }
};
export {updateProductMaintType};


const deleteProductMaintTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductMaintTypeByIdUpdated method',
  args:{productMaintTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productMaintTypes/${args.productMaintTypeId}?`, null, req);
  }
};
export {deleteProductMaintTypeByIdUpdated};
