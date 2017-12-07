
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentPackageType} from '../shipment/ShipmentPackageType.js';
import {ProductType} from '../product/ProductType.js';
import {CarrierShipmentBoxTypeType} from '../shipment/CarrierShipmentBoxTypeType.js';


const ShipmentBoxTypeType = new GraphQLObjectType({
  name: 'ShipmentBoxTypeType',
  description: 'Type for ShipmentBoxType in shipment',

  fields: () => ({
    boxLength: {type: GraphQLFloat},
    boxWeight: {type: GraphQLFloat},
    dimensionUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    weightUomId: {type: GraphQLString},
    boxWidth: {type: GraphQLFloat},
    boxHeight: {type: GraphQLFloat},
    shipmentBoxTypeId: {type: GraphQLString},
    product: {
      type: new GraphQLList(ProductType),
      args : {shipmentBoxTypeId: {type: GraphQLString}},
      resolve: (shipmentBoxType, args, {loaders}) => loaders.ofbizArray.load(`products/find?shipmentBoxTypeId=${shipmentBoxType.shipmentBoxTypeId}`)
    },
    carrierShipmentBoxType: {
      type: new GraphQLList(CarrierShipmentBoxTypeType),
      args : {shipmentBoxTypeId: {type: GraphQLString}},
      resolve: (shipmentBoxType, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentBoxTypes/find?shipmentBoxTypeId=${shipmentBoxType.shipmentBoxTypeId}`)
    },
    shipmentPackage: {
      type: new GraphQLList(ShipmentPackageType),
      args : {shipmentBoxTypeId: {type: GraphQLString}},
      resolve: (shipmentBoxType, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackages/find?shipmentBoxTypeId=${shipmentBoxType.shipmentBoxTypeId}`)
    }
  })
});

export {ShipmentBoxTypeType};
    