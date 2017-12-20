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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreShipmentMeth = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductStoreShipmentMeth method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreShipmentMeths/add?`, null, req);
  }
};
export {createProductStoreShipmentMeth};


const updateProductStoreShipmentMeth = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductStoreShipmentMeth method',
  args:{productStoreShipmentMethToBeUpdated: {type: ProductStoreShipmentMethInputType},productStoreShipMethId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreShipmentMeths/${args.productStoreShipMethId}?`, args.productStoreShipmentMethToBeUpdated, req);
  }
};
export {updateProductStoreShipmentMeth};


const deleteProductStoreShipmentMethByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductStoreShipmentMethByIdUpdated method',
  args:{productStoreShipmentMethId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreShipmentMeths/${args.productStoreShipmentMethId}?`, null, req);
  }
};
export {deleteProductStoreShipmentMethByIdUpdated};
