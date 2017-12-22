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

const PartyInvitationResponseType = new GraphQLObjectType({
  name: 'PartyInvitationResponseType',
  description: 'response type for PartyInvitation',

  fields: () => ({
    emailAddress: {type: GraphQLString},
    lastInviteDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyInvitationId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    toName: {type: GraphQLString}
  })
});

export {PartyInvitationResponseType};
    