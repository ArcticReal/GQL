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

const BillingAccountRoleInputType = new GraphQLInputObjectType({
  name: 'BillingAccountRoleInputType',
  description: 'input type for BillingAccountRole',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {BillingAccountRoleInputType};
    