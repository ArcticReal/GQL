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

const GlAccountRoleInputType = new GraphQLInputObjectType({
  name: 'GlAccountRoleInputType',
  description: 'input type for GlAccountRole',

  fields: () => ({
    fromDate: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountRoleInputType};
    