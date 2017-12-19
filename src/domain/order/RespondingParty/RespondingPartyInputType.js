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

const RespondingPartyInputType = new GraphQLInputObjectType({
  name: 'RespondingPartyInputType',
  description: 'input type for RespondingParty',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    dateSent: {type: GraphQLString},
    partyId: {type: GraphQLString},
    respondingPartySeqId: {type: GraphQLString}
  })
});

export {RespondingPartyInputType};
    