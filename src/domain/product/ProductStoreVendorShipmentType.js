
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {ShipmentMethodTypeType} from '../shipment/ShipmentMethodTypeType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';


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
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStoreVendorShipment.productStoreId}`)
    },
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbiz.load(`shipmentMethodTypes/find?shipmentMethodTypeId=${productStoreVendorShipment.shipmentMethodTypeId}`)
    },
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${productStoreVendorShipment.vendorPartyId}`)
    }
  })
});

export {ProductStoreVendorShipmentType};
    