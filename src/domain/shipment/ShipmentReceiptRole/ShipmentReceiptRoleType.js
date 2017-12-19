
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {ShipmentReceiptType} from '../../shipment/ShipmentReceipt/ShipmentReceiptType.js';


const ShipmentReceiptRoleType = new GraphQLObjectType({
  name: 'ShipmentReceiptRoleType',
  description: 'Type for ShipmentReceiptRole in shipment',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (shipmentReceiptRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${shipmentReceiptRole.partyId}`)
    },
    receipt: {
      type: ShipmentReceiptType,
      args : {receiptId: {type: GraphQLString}},
      resolve: (shipmentReceiptRole, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentReceipts/find?receiptId=${shipmentReceiptRole.receiptId}`)
    }
  })
});

export {ShipmentReceiptRoleType};
    