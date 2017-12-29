
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

import {PartyType} from '../../party/Party/PartyType.js';
import {ShipmentMethodTypeType} from '../../shipment/ShipmentMethodType/ShipmentMethodTypeType.js';
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';


const ProductStoreVendorShipmentType = new GraphQLObjectType({
  name: 'ProductStoreVendorShipmentType',
  description: 'Type for ProductStoreVendorShipment in product',

  fields: () => ({
    carrierParty: {
      type: PartyType,
      args : {carrierPartyId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productStoreVendorShipment.carrierPartyId}`)
    },
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStoreVendorShipment.productStoreId}`)
    },
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentMethodTypes/find?shipmentMethodTypeId=${productStoreVendorShipment.shipmentMethodTypeId}`)
    },
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productStoreVendorShipment.vendorPartyId}`)
    }
  })
});

export {ProductStoreVendorShipmentType};
    