
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentType} from '../shipment/ShipmentType.js';
import {ShipmentTypeAttrType} from '../shipment/ShipmentTypeAttrType.js';


const ShipmentTypeType = new GraphQLObjectType({
  name: 'ShipmentTypeType',
  description: 'Type for ShipmentType in shipment',

  fields: () => ({
    parentType: {
      type: ShipmentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (shipmentType, args, {loaders}) => loaders.ofbiz.load(`shipmentTypes/find?shipmentTypeId=${shipmentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    shipmentTypeId: {type: GraphQLString},
    shipmentType: {
      type: new GraphQLList(ShipmentTypeType),
      args : {shipmentTypeId: {type: GraphQLString}},
      resolve: (shipmentType, args, {loaders}) => loaders.ofbizArray.load(`shipmentTypes/find?shipmentTypeId=${shipmentType.shipmentTypeId}`)
    },
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {shipmentTypeId: {type: GraphQLString}},
      resolve: (shipmentType, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?shipmentTypeId=${shipmentType.shipmentTypeId}`)
    },
    shipmentTypeAttr: {
      type: new GraphQLList(ShipmentTypeAttrType),
      args : {shipmentTypeId: {type: GraphQLString}},
      resolve: (shipmentType, args, {loaders}) => loaders.ofbizArray.load(`shipmentTypeAttrs/find?shipmentTypeId=${shipmentType.shipmentTypeId}`)
    }
  })
});

export {ShipmentTypeType};
    