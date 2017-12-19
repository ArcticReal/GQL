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

const ShipmentReceiptInputType = new GraphQLInputObjectType({
  name: 'ShipmentReceiptInputType',
  description: 'input type for ShipmentReceipt',

  fields: () => ({
    datetimeReceived: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    itemDescription: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantityAccepted: {type: GraphQLFloat},
    quantityRejected: {type: GraphQLFloat},
    receiptId: {type: GraphQLString},
    receivedByUserLoginId: {type: GraphQLString},
    rejectionId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    shipmentPackageSeqId: {type: GraphQLString}
  })
});

export {ShipmentReceiptInputType};
    