
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

import {ShipmentContactMechType} from '../../shipment/ShipmentContactMech/ShipmentContactMechType.js';


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
    