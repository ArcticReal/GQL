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

const OrderHeaderInputType = new GraphQLInputObjectType({
  name: 'OrderHeaderInputType',
  description: 'input type for OrderHeader',

  fields: () => ({
    autoOrderShoppingListId: {type: GraphQLString},
    billingAccountId: {type: GraphQLString},
    createdBy: {type: GraphQLString},
    currencyUom: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    externalId: {type: GraphQLString},
    firstAttemptOrderId: {type: GraphQLString},
    grandTotal: {type: GraphQLFloat},
    internalCode: {type: GraphQLString},
    invoicePerShipment: {type: GraphQLBoolean},
    isRushOrder: {type: GraphQLBoolean},
    isViewed: {type: GraphQLBoolean},
    needsInventoryIssuance: {type: GraphQLBoolean},
    orderDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderName: {type: GraphQLString},
    orderTypeId: {type: GraphQLString},
    originFacilityId: {type: GraphQLString},
    pickSheetPrintedDate: {type: GraphQLString},
    priority: {type: GraphQLBoolean},
    productStoreId: {type: GraphQLString},
    remainingSubTotal: {type: GraphQLFloat},
    salesChannelEnumId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    syncStatusId: {type: GraphQLString},
    terminalId: {type: GraphQLString},
    transactionId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {OrderHeaderInputType};
    