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

const PartyInvitationInputType = new GraphQLInputObjectType({
  name: 'PartyInvitationInputType',
  description: 'input type for PartyInvitation',

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

export {PartyInvitationInputType};
    