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

const BillingAccountTermResponseType = new GraphQLObjectType({
  name: 'BillingAccountTermResponseType',
  description: 'response type for BillingAccountTerm',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    billingAccountTermId: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    termTypeId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    uomId: {type: GraphQLString}
  })
});

export {BillingAccountTermResponseType};
    