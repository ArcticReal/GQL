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

const BillingAccountInputType = new GraphQLInputObjectType({
  name: 'BillingAccountInputType',
  description: 'input type for BillingAccount',

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

export {BillingAccountInputType};
    