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

const BillingAccountRoleResponseType = new GraphQLObjectType({
  name: 'BillingAccountRoleResponseType',
  description: 'response type for BillingAccountRole',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {BillingAccountRoleResponseType};
    