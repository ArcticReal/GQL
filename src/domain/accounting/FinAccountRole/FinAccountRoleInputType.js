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

const FinAccountRoleInputType = new GraphQLInputObjectType({
  name: 'FinAccountRoleInputType',
  description: 'input type for FinAccountRole',

  fields: () => ({
    finAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FinAccountRoleInputType};
    