
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';


const ShipmentReceiptRoleType = new GraphQLObjectType({
  name: 'ShipmentReceiptRoleType',
  description: 'Type for ShipmentReceiptRole in shipment',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (shipmentReceiptRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${shipmentReceiptRole.partyId}`)
    },
    receipt: {
      type: ShipmentReceiptType,
      args : {receiptId: {type: GraphQLString}},
      resolve: (shipmentReceiptRole, args, {loaders}) => loaders.ofbiz.load(`shipmentReceipts/find?receiptId=${shipmentReceiptRole.receiptId}`)
    }
  })
});

export {ShipmentReceiptRoleType};
    