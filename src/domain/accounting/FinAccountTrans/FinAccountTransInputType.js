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

const FinAccountTransInputType = new GraphQLInputObjectType({
  name: 'FinAccountTransInputType',
  description: 'input type for FinAccountTrans',

  fields: () => ({
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    finAccountTransId: {type: GraphQLString},
    finAccountTransTypeId: {type: GraphQLString},
    glReconciliationId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    performedByPartyId: {type: GraphQLString},
    reasonEnumId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    transactionDate: {type: GraphQLString}
  })
});

export {FinAccountTransInputType};
    