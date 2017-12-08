
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

import {ShipmentReceiptType} from '../shipment/ShipmentReceipt.js';


const RejectionReasonType = new GraphQLObjectType({
  name: 'RejectionReasonType',
  description: 'Type for RejectionReason in shipment',

  fields: () => ({
    rejectionId: {type: GraphQLString},
    description: {type: GraphQLString},
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {rejectionId: {type: GraphQLString}},
      resolve: (rejectionReason, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?rejectionId=${rejectionReason.rejectionId}`)
    }
  })
});

export {RejectionReasonType};
    




const RejectionReasonInputType = new GraphQLInputObjectType({
  name: 'RejectionReasonInputType',
  description: 'input type for RejectionReason in shipment',

  fields: () => ({
    rejectionId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {RejectionReasonInputType};
    