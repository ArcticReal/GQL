
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Party} from '../product/Party.js';
import {ProductStore} from '../product/ProductStore.js';
import {ShipmentMethodType} from '../product/ShipmentMethodType.js';
import {Party} from '../product/Party.js';


const ProductStoreVendorShipment = new GraphQLObjectType({
  name: 'ProductStoreVendorShipmentType',
  description: 'Type for ProductStoreVendorShipment in product',

  fields: () => ({
    carrierParty: {
      type: PartyType,
      args : {carrierPartyId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.carrierPartyId}`)
    },
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbizArray.load(`shipmentMethodTypes/find?=${args.shipmentMethodTypeId}`)
    },
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (productStoreVendorShipment, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.vendorPartyId}`)
    }
  })
});

export {ProductStoreVendorShipment};
    