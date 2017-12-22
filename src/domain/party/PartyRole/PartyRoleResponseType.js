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

const PartyRoleResponseType = new GraphQLObjectType({
  name: 'PartyRoleResponseType',
  description: 'response type for PartyRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {PartyRoleResponseType};
    