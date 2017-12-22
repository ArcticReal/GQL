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

const PartyInvitationGroupAssocResponseType = new GraphQLObjectType({
  name: 'PartyInvitationGroupAssocResponseType',
  description: 'response type for PartyInvitationGroupAssoc',

  fields: () => ({
    partyIdTo: {type: GraphQLString},
    partyInvitationId: {type: GraphQLString}
  })
});

export {PartyInvitationGroupAssocResponseType};
    