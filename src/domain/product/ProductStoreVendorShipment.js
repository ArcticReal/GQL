
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

import {PartyType} from '../party/Party.js';
import {ShipmentMethodTypeType} from '../shipment/ShipmentMethodType.js';
import {ProductStoreType} from '../product/ProductStore.js';


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
    




const ProductStoreVendorShipmentInputType = new GraphQLInputObjectType({
  name: 'ProductStoreVendorShipmentInputType',
  description: 'input type for ProductStoreVendorShipment in product',

  fields: () => ({
    carrierPartyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {ProductStoreVendorShipmentInputType};
    