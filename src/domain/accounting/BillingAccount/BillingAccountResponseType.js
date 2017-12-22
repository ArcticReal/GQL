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

const BillingAccountResponseType = new GraphQLObjectType({
  name: 'BillingAccountResponseType',
  description: 'response type for BillingAccount',

  fields: () => ({
    accountCurrencyUomId: {type: GraphQLString},
    accountLimit: {type: GraphQLFloat},
    billingAccountId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    description: {type: GraphQLString},
    externalAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {BillingAccountResponseType};
    