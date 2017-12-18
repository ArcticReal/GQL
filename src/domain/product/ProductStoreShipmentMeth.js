
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

import {ShipmentGatewayConfigType} from '../shipment/ShipmentGatewayConfig.js';
import {ShipmentCostEstimateType} from '../shipment/ShipmentCostEstimate.js';


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
      resolve: (productStoreShipmentMeth, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentGatewayConfigs/find?shipmentGatewayConfigId=${productStoreShipmentMeth.shipmentGatewayConfigId}`)
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
    shipmentCostEstimates: {
      type: new GraphQLList(ShipmentCostEstimateType),
      args : {},
      resolve: (productStoreShipmentMeth, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentCostEstimates/find?productStoreShipMethId=${productStoreShipmentMeth.productStoreShipMethId}`)
    }
  })
});

export {ProductStoreShipmentMethType};
    




const ProductStoreShipmentMethInputType = new GraphQLInputObjectType({
  name: 'ProductStoreShipmentMethInputType',
  description: 'input type for ProductStoreShipmentMeth',

  fields: () => ({
    allowCompanyAddr: {type: GraphQLBoolean},
    allowUspsAddr: {type: GraphQLBoolean},
    allowancePercent: {type: GraphQLFloat},
    companyPartyId: {type: GraphQLString},
    configProps: {type: GraphQLString},
    excludeFeatureGroup: {type: GraphQLString},
    excludeGeoId: {type: GraphQLString},
    includeFeatureGroup: {type: GraphQLString},
    includeGeoId: {type: GraphQLString},
    includeNoChargeItems: {type: GraphQLBoolean},
    maxSize: {type: GraphQLFloat},
    maxTotal: {type: GraphQLFloat},
    maxWeight: {type: GraphQLFloat},
    minSize: {type: GraphQLFloat},
    minTotal: {type: GraphQLFloat},
    minWeight: {type: GraphQLFloat},
    minimumPrice: {type: GraphQLFloat},
    partyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    productStoreShipMethId: {type: GraphQLString},
    requireCompanyAddr: {type: GraphQLBoolean},
    requireUspsAddr: {type: GraphQLBoolean},
    roleTypeId: {type: GraphQLString},
    sequenceNumber: {type: GraphQLInt},
    serviceName: {type: GraphQLString},
    shipmentCustomMethodId: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {ProductStoreShipmentMethInputType};
    