
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustomMethod} from '../product/CustomMethod.js';
import {ShipmentGatewayConfig} from '../product/ShipmentGatewayConfig.js';


const ProductStoreShipmentMeth = new GraphQLObjectType({
  name: 'ProductStoreShipmentMethType',
  description: 'Type for ProductStoreShipmentMeth in product',

  fields: () => ({
    productStoreShipMethId: {type: GraphQLString},
    companyPartyId: {type: GraphQLString},
    allowancePercent: {type: GraphQLFloat},
    includeFeatureGroup: {type: GraphQLString},
    shipmentCustomMethod: {
      type: CustomMethodType,
      args : {shipmentCustomMethodId: {type: GraphQLString}},
      resolve: (productStoreShipmentMeth, args, {loaders}) => loaders.ofbizArray.load(`customMethods/find?customMethodId=${args.shipmentCustomMethodId}`)
    },
    minTotal: {type: GraphQLFloat},
    minWeight: {type: GraphQLFloat},
    requireCompanyAddr: {type: GraphQLBoolean},
    maxSize: {type: GraphQLFloat},
    excludeGeoId: {type: GraphQLString},
    shipmentGatewayConfig: {
      type: ShipmentGatewayConfigType,
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (productStoreShipmentMeth, args, {loaders}) => loaders.ofbizArray.load(`shipmentGatewayConfigs/find?=${args.shipmentGatewayConfigId}`)
    },
    minSize: {type: GraphQLFloat},
    productStoreId: {type: GraphQLString},
    allowCompanyAddr: {type: GraphQLBoolean},
    partyId: {type: GraphQLString},
    minimumPrice: {type: GraphQLFloat},
    shipmentMethodTypeId: {type: GraphQLString},
    excludeFeatureGroup: {type: GraphQLString},
    sequenceNumber: {type: GraphQLInt},
    roleTypeId: {type: GraphQLString},
    allowUspsAddr: {type: GraphQLBoolean},
    maxWeight: {type: GraphQLFloat},
    serviceName: {type: GraphQLString},
    includeGeoId: {type: GraphQLString},
    maxTotal: {type: GraphQLFloat},
    requireUspsAddr: {type: GraphQLBoolean},
    configProps: {type: GraphQLString},
    includeNoChargeItems: {type: GraphQLBoolean}
  })
});

export {ProductStoreShipmentMeth};
    