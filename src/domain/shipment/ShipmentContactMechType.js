
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

import {ShipmentContactMechType} from '../shipment/ShipmentContactMech.js';


const ShipmentContactMechTypeType = new GraphQLObjectType({
  name: 'ShipmentContactMechTypeType',
  description: 'Type for ShipmentContactMechType in shipment',

  fields: () => ({
    description: {type: GraphQLString},
    shipmentContactMechTypeId: {type: GraphQLString},
    shipmentContactMeches: {
      type: new GraphQLList(ShipmentContactMechType),
      args : {},
      resolve: (shipmentContactMechType, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentContactMechs/find?shipmentContactMechTypeId=${shipmentContactMechType.shipmentContactMechTypeId}`)
    }
  })
});

export {ShipmentContactMechTypeType};
    




const ShipmentContactMechTypeInputType = new GraphQLInputObjectType({
  name: 'ShipmentContactMechTypeInputType',
  description: 'input type for ShipmentContactMechType in shipment',

  fields: () => ({
    description: {type: GraphQLString},
    shipmentContactMechTypeId: {type: GraphQLString}
  })
});

export {ShipmentContactMechTypeInputType};
    