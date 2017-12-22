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

const AcctgTransEntryResponseType = new GraphQLObjectType({
  name: 'AcctgTransEntryResponseType',
  description: 'response type for AcctgTransEntry',

  fields: () => ({
    acctgTransEntrySeqId: {type: GraphQLString},
    acctgTransEntryTypeId: {type: GraphQLString},
    acctgTransId: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    debitCreditFlag: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    dueDate: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    groupId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    isSummary: {type: GraphQLBoolean},
    organizationPartyId: {type: GraphQLString},
    origAmount: {type: GraphQLFloat},
    origCurrencyUomId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productId: {type: GraphQLString},
    reconcileStatusId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    settlementTermId: {type: GraphQLString},
    taxId: {type: GraphQLString},
    theirPartyId: {type: GraphQLString},
    theirProductId: {type: GraphQLString},
    voucherRef: {type: GraphQLString}
  })
});

export {AcctgTransEntryResponseType};
    