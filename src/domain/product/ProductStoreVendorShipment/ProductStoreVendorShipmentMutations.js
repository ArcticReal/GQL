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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreVendorShipment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductStoreVendorShipment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreVendorShipments/add?`, null, req);
  }
};
export {createProductStoreVendorShipment};


const updateProductStoreVendorShipment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductStoreVendorShipment method',
  args:{productStoreVendorShipmentToBeUpdated: {type: ProductStoreVendorShipmentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreVendorShipments/${args.nullVal}?`, args.productStoreVendorShipmentToBeUpdated, req);
  }
};
export {updateProductStoreVendorShipment};


const deleteProductStoreVendorShipmentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductStoreVendorShipmentByIdUpdated method',
  args:{productStoreVendorShipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreVendorShipments/${args.productStoreVendorShipmentId}?`, null, req);
  }
};
export {deleteProductStoreVendorShipmentByIdUpdated};
