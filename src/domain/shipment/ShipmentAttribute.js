
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


const ShipmentAttributeType = new GraphQLObjectType({
  name: 'ShipmentAttributeType',
  description: 'Type for ShipmentAttribute in shipment',

  fields: () => ({
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentAttribute, args, {loaders}) => loaders.ofbiz.load(`shipments/find?shipmentId=${shipmentAttribute.shipmentId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ShipmentAttributeType};
    




const ShipmentAttributeInputType = new GraphQLInputObjectType({
  name: 'ShipmentAttributeInputType',
  description: 'input type for ShipmentAttribute in shipment',

  fields: () => ({
    shipmentId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ShipmentAttributeInputType};
    