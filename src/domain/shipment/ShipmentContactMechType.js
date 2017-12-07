
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
import {ShipmentContactMechTypeType} from '../shipment/ShipmentContactMechTypeType.js';
import {ContactMechType} from '../party/ContactMechType.js';


const ShipmentContactMechType = new GraphQLObjectType({
  name: 'ShipmentContactMechType',
  description: 'Type for ShipmentContactMech in shipment',

  fields: () => ({
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentContactMech, args, {loaders}) => loaders.ofbiz.load(`shipments/find?shipmentId=${shipmentContactMech.shipmentId}`)
    },
    shipmentContactMechType: {
      type: ShipmentContactMechTypeType,
      args : {shipmentContactMechTypeId: {type: GraphQLString}},
      resolve: (shipmentContactMech, args, {loaders}) => loaders.ofbiz.load(`shipmentContactMechTypes/find?shipmentContactMechTypeId=${shipmentContactMech.shipmentContactMechTypeId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (shipmentContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${shipmentContactMech.contactMechId}`)
    }
  })
});

export {ShipmentContactMechType};
    