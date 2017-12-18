
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

import {ShipmentTypeType} from '../shipment/ShipmentType.js';


const ShipmentTypeAttrType = new GraphQLObjectType({
  name: 'ShipmentTypeAttrType',
  description: 'Type for ShipmentTypeAttr in shipment',

  fields: () => ({
    description: {type: GraphQLString},
    shipmentType: {
      type: ShipmentTypeType,
      args : {shipmentTypeId: {type: GraphQLString}},
      resolve: (shipmentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentTypes/find?shipmentTypeId=${shipmentTypeAttr.shipmentTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {ShipmentTypeAttrType};
    




const ShipmentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'ShipmentTypeAttrInputType',
  description: 'input type for ShipmentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    shipmentTypeId: {type: GraphQLString}
  })
});

export {ShipmentTypeAttrInputType};
    