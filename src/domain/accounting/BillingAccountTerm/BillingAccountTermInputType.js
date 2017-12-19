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

const BillingAccountTermInputType = new GraphQLInputObjectType({
  name: 'BillingAccountTermInputType',
  description: 'input type for BillingAccountTerm',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    billingAccountTermId: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    termTypeId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    uomId: {type: GraphQLString}
  })
});

export {BillingAccountTermInputType};
    