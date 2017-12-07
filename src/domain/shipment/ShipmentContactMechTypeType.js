
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentContactMechType} from '../shipment/ShipmentContactMechType.js';


const ShipmentContactMechTypeType = new GraphQLObjectType({
  name: 'ShipmentContactMechTypeType',
  description: 'Type for ShipmentContactMechType in shipment',

  fields: () => ({
    description: {type: GraphQLString},
    shipmentContactMechTypeId: {type: GraphQLString},
    shipmentContactMech: {
      type: new GraphQLList(ShipmentContactMechType),
      args : {shipmentContactMechTypeId: {type: GraphQLString}},
      resolve: (shipmentContactMechType, args, {loaders}) => loaders.ofbizArray.load(`shipmentContactMechs/find?shipmentContactMechTypeId=${shipmentContactMechType.shipmentContactMechTypeId}`)
    }
  })
});

export {ShipmentContactMechTypeType};
    