
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentGatewayConfigType} from '../shipment/ShipmentGatewayConfigType.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimateType.js';


const ProductStoreShipmentMethType = new GraphQLObjectType({
  name: 'ProductStoreShipmentMethType',
  description: 'Type for ProductStoreShipmentMeth in product',

  fields: () => ({
    productStoreShipMethId: {type: GraphQLString},
    companyPartyId: {type: GraphQLString},
    allowancePercent: {type: GraphQLFloat},
    includeFeatureGroup: {type: GraphQLString},
    shipmentCustomMethodId: {type: GraphQLString},
    minTotal: {type: GraphQLFloat},
    minWeight: {type: GraphQLFloat},
    requireCompanyAddr: {type: GraphQLBoolean},
    maxSize: {type: GraphQLFloat},
    excludeGeoId: {type: GraphQLString},
    shipmentGatewayConfig: {
      type: ShipmentGatewayConfigType,
      args : {shipmentGatewayConfigId: {type: GraphQLString}},
      resolve: (productStoreShipmentMeth, args, {loaders}) => loaders.ofbiz.load(`shipmentGatewayConfigs/find?shipmentGatewayConfigId=${productStoreShipmentMeth.shipmentGatewayConfigId}`)
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
    includeNoChargeItems: {type: GraphQLBoolean},
    shipmentCostEstimate: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {productStoreShipMethId: {type: GraphQLString}},
      resolve: (productStoreShipmentMeth, args, {loaders}) => loaders.ofbizArray.load(`shipmentCostEstimates/find?productStoreShipMethId=${productStoreShipmentMeth.productStoreShipMethId}`)
    }
  })
});

export {ProductStoreShipmentMethType};
    