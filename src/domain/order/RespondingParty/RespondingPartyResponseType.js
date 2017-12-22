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

const RespondingPartyResponseType = new GraphQLObjectType({
  name: 'RespondingPartyResponseType',
  description: 'response type for RespondingParty',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    dateSent: {type: GraphQLString},
    partyId: {type: GraphQLString},
    respondingPartySeqId: {type: GraphQLString}
  })
});

export {RespondingPartyResponseType};
    