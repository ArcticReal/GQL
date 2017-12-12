
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

import {ShipmentType} from '../shipment/Shipment.js';
import {ShipmentTypeAttrType} from '../shipment/ShipmentTypeAttr.js';


const ShipmentTypeType = new GraphQLObjectType({
  name: 'ShipmentTypeType',
  description: 'Type for ShipmentType in shipment',

  fields: () => ({
    parentType: {
      type: ShipmentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (shipmentType, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentTypes/find?shipmentTypeId=${shipmentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    shipmentTypeId: {type: GraphQLString},
    shipmentTypes: {
      type: new GraphQLList(ShipmentTypeType),
      args : {},
      resolve: (shipmentType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentTypes/find?shipmentTypeId=${shipmentType.shipmentTypeId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {},
      resolve: (shipmentType, args, {loaders}) => loaders.ofbizArray.load(`/shipments/find?shipmentTypeId=${shipmentType.shipmentTypeId}`)
    },
    shipmentTypeAttrs: {
      type: new GraphQLList(ShipmentTypeAttrType),
      args : {},
      resolve: (shipmentType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentTypeAttrs/find?shipmentTypeId=${shipmentType.shipmentTypeId}`)
    }
  })
});

export {ShipmentTypeType};
    




const ShipmentTypeInputType = new GraphQLInputObjectType({
  name: 'ShipmentTypeInputType',
  description: 'input type for ShipmentType in shipment',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    shipmentTypeId: {type: GraphQLString}
  })
});

export {ShipmentTypeInputType};
    