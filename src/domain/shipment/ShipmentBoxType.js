
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

import {ShipmentPackageType} from '../shipment/ShipmentPackage.js';
import {ProductType} from '../product/Product.js';
import {CarrierShipmentBoxTypeType} from '../shipment/CarrierShipmentBoxType.js';


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
    products: {
      type: new GraphQLList(ProductType),
      args : {shipmentBoxTypeId: {type: GraphQLString}},
      resolve: (shipmentBoxType, args, {loaders}) => loaders.ofbizArray.load(`products/find?shipmentBoxTypeId=${shipmentBoxType.shipmentBoxTypeId}`)
    },
    carrierShipmentBoxTypes: {
      type: new GraphQLList(CarrierShipmentBoxTypeType),
      args : {shipmentBoxTypeId: {type: GraphQLString}},
      resolve: (shipmentBoxType, args, {loaders}) => loaders.ofbizArray.load(`carrierShipmentBoxTypes/find?shipmentBoxTypeId=${shipmentBoxType.shipmentBoxTypeId}`)
    },
    shipmentPackages: {
      type: new GraphQLList(ShipmentPackageType),
      args : {shipmentBoxTypeId: {type: GraphQLString}},
      resolve: (shipmentBoxType, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackages/find?shipmentBoxTypeId=${shipmentBoxType.shipmentBoxTypeId}`)
    }
  })
});

export {ShipmentBoxTypeType};
    




const ShipmentBoxTypeInputType = new GraphQLInputObjectType({
  name: 'ShipmentBoxTypeInputType',
  description: 'input type for ShipmentBoxType in shipment',

  fields: () => ({
    boxLength: {type: GraphQLFloat},
    boxWeight: {type: GraphQLFloat},
    dimensionUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    weightUomId: {type: GraphQLString},
    boxWidth: {type: GraphQLFloat},
    boxHeight: {type: GraphQLFloat},
    shipmentBoxTypeId: {type: GraphQLString}
  })
});

export {ShipmentBoxTypeInputType};
    