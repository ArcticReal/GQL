
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
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {ShipmentAttributeType};
    