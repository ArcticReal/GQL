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

const PartyInvitationGroupAssocInputType = new GraphQLInputObjectType({
  name: 'PartyInvitationGroupAssocInputType',
  description: 'input type for PartyInvitationGroupAssoc',

  fields: () => ({
    partyIdTo: {type: GraphQLString},
    partyInvitationId: {type: GraphQLString}
  })
});

export {PartyInvitationGroupAssocInputType};
    