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
import {ProductStoreShipmentMethInputType} from '../../product/ProductStoreShipmentMeth/ProductStoreShipmentMethInputType.js';
import {ProductStoreShipmentMethResponseType} from '../../product/ProductStoreShipmentMeth/ProductStoreShipmentMethResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreShipmentMeth = {
  type: ProductStoreShipmentMethResponseType,
  description: 'mutation for ofbiz createProductStoreShipmentMeth method',
  args:{productStoreShipmentMethToBeAdded: {type: ProductStoreShipmentMethInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreShipmentMeths/add?`, args.productStoreShipmentMethToBeAdded, req);
  }
};
export {createProductStoreShipmentMeth};


const updateProductStoreShipmentMeth = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreShipmentMeth method',
  args:{productStoreShipmentMethToBeUpdated: {type: ProductStoreShipmentMethInputType},productStoreShipMethId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreShipmentMeths/${args.productStoreShipMethId}?`, args.productStoreShipmentMethToBeUpdated, req);
  }
};
export {updateProductStoreShipmentMeth};


const deleteProductStoreShipmentMethByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreShipmentMethByIdUpdated method',
  args:{productStoreShipmentMethId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreShipmentMeths/${args.productStoreShipmentMethId}?`, null, req);
  }
};
export {deleteProductStoreShipmentMethByIdUpdated};
