
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';


const RejectionReasonType = new GraphQLObjectType({
  name: 'RejectionReasonType',
  description: 'Type for RejectionReason in shipment',

  fields: () => ({
    rejectionId: {type: GraphQLString},
    description: {type: GraphQLString},
    shipmentReceipt: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {rejectionId: {type: GraphQLString}},
      resolve: (rejectionReason, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?rejectionId=${rejectionReason.rejectionId}`)
    }
  })
});

export {RejectionReasonType};
    