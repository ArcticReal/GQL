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

const AcctgTransResponseType = new GraphQLObjectType({
  name: 'AcctgTransResponseType',
  description: 'response type for AcctgTrans',

  fields: () => ({
    acctgTransId: {type: GraphQLString},
    acctgTransTypeId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    description: {type: GraphQLString},
    finAccountTransId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    glFiscalTypeId: {type: GraphQLString},
    glJournalId: {type: GraphQLString},
    groupStatusId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    isPosted: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    physicalInventoryId: {type: GraphQLString},
    postedDate: {type: GraphQLString},
    receiptId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    scheduledPostingDate: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    theirAcctgTransId: {type: GraphQLString},
    transactionDate: {type: GraphQLString},
    voucherDate: {type: GraphQLString},
    voucherRef: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {AcctgTransResponseType};
    