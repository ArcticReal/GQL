
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
import {ShipmentContactMechTypeType} from '../shipment/ShipmentContactMechType.js';
import {ContactMechType} from '../party/ContactMech.js';


const ShipmentContactMechType = new GraphQLObjectType({
  name: 'ShipmentContactMechType',
  description: 'Type for ShipmentContactMech in shipment',

  fields: () => ({
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentContactMech, args, {loaders}) => loaders.ofbiz.load(`/shipments/find?shipmentId=${shipmentContactMech.shipmentId}`)
    },
    shipmentContactMechType: {
      type: ShipmentContactMechTypeType,
      args : {shipmentContactMechTypeId: {type: GraphQLString}},
      resolve: (shipmentContactMech, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentContactMechTypes/find?shipmentContactMechTypeId=${shipmentContactMech.shipmentContactMechTypeId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (shipmentContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${shipmentContactMech.contactMechId}`)
    }
  })
});

export {ShipmentContactMechType};
    




const ShipmentContactMechInputType = new GraphQLInputObjectType({
  name: 'ShipmentContactMechInputType',
  description: 'input type for ShipmentContactMech in shipment',

  fields: () => ({
    shipmentId: {type: GraphQLString},
    shipmentContactMechTypeId: {type: GraphQLString},
    contactMechId: {type: GraphQLString}
  })
});

export {ShipmentContactMechInputType};
    