
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentTypeType} from '../shipment/ShipmentTypeType.js';


const ShipmentTypeAttrType = new GraphQLObjectType({
  name: 'ShipmentTypeAttrType',
  description: 'Type for ShipmentTypeAttr in shipment',

  fields: () => ({
    description: {type: GraphQLString},
    shipmentType: {
      type: ShipmentTypeType,
      args : {shipmentTypeId: {type: GraphQLString}},
      resolve: (shipmentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`shipmentTypes/find?shipmentTypeId=${shipmentTypeAttr.shipmentTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {ShipmentTypeAttrType};
    