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

const FinAccountInputType = new GraphQLInputObjectType({
  name: 'FinAccountInputType',
  description: 'input type for FinAccount',

  fields: () => ({
    actualBalance: {type: GraphQLFloat},
    availableBalance: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    finAccountCode: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    finAccountName: {type: GraphQLString},
    finAccountPin: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    isRefundable: {type: GraphQLBoolean},
    organizationPartyId: {type: GraphQLString},
    ownerPartyId: {type: GraphQLString},
    postToGlAccountId: {type: GraphQLString},
    replenishLevel: {type: GraphQLFloat},
    replenishPaymentId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FinAccountInputType};
    