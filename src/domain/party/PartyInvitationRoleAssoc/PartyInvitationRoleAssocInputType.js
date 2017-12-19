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

const PartyInvitationRoleAssocInputType = new GraphQLInputObjectType({
  name: 'PartyInvitationRoleAssocInputType',
  description: 'input type for PartyInvitationRoleAssoc',

  fields: () => ({
    partyInvitationId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {PartyInvitationRoleAssocInputType};
    