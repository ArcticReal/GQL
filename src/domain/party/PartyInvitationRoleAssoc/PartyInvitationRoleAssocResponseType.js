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

const PartyInvitationRoleAssocResponseType = new GraphQLObjectType({
  name: 'PartyInvitationRoleAssocResponseType',
  description: 'response type for PartyInvitationRoleAssoc',

  fields: () => ({
    partyInvitationId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {PartyInvitationRoleAssocResponseType};
    