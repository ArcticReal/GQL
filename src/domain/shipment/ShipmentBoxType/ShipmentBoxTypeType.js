
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

import {ShipmentPackageType} from '../../shipment/ShipmentPackage/ShipmentPackageType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {CarrierShipmentBoxTypeType} from '../../shipment/CarrierShipmentBoxType/CarrierShipmentBoxTypeType.js';


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
      args : {},
      resolve: (shipmentBoxType, args, {loaders}) => loaders.ofbizArray.load(`/products/find?shipmentBoxTypeId=${shipmentBoxType.shipmentBoxTypeId}`)
    },
    carrierShipmentBoxTypes: {
      type: new GraphQLList(CarrierShipmentBoxTypeType),
      args : {},
      resolve: (shipmentBoxType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/carrierShipmentBoxTypes/find?shipmentBoxTypeId=${shipmentBoxType.shipmentBoxTypeId}`)
    },
    shipmentPackages: {
      type: new GraphQLList(ShipmentPackageType),
      args : {},
      resolve: (shipmentBoxType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentPackages/find?shipmentBoxTypeId=${shipmentBoxType.shipmentBoxTypeId}`)
    }
  })
});

export {ShipmentBoxTypeType};
    