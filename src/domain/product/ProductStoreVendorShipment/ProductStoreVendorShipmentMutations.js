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
import {ProductStoreVendorShipmentInputType} from '../../product/ProductStoreVendorShipment/ProductStoreVendorShipmentInputType.js';
import {ProductStoreVendorShipmentResponseType} from '../../product/ProductStoreVendorShipment/ProductStoreVendorShipmentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreVendorShipment = {
  type: ProductStoreVendorShipmentResponseType,
  description: 'mutation for ofbiz createProductStoreVendorShipment method',
  args:{productStoreVendorShipmentToBeAdded: {type: ProductStoreVendorShipmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreVendorShipments/add?`, args.productStoreVendorShipmentToBeAdded, req);
  }
};
export {createProductStoreVendorShipment};


const updateProductStoreVendorShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreVendorShipment method',
  args:{productStoreVendorShipmentToBeUpdated: {type: ProductStoreVendorShipmentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreVendorShipments/${args.nullVal}?`, args.productStoreVendorShipmentToBeUpdated, req);
  }
};
export {updateProductStoreVendorShipment};


const deleteProductStoreVendorShipmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreVendorShipmentByIdUpdated method',
  args:{productStoreVendorShipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreVendorShipments/${args.productStoreVendorShipmentId}?`, null, req);
  }
};
export {deleteProductStoreVendorShipmentByIdUpdated};
