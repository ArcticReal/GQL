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

const PartyRoleInputType = new GraphQLInputObjectType({
  name: 'PartyRoleInputType',
  description: 'input type for PartyRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {PartyRoleInputType};
    