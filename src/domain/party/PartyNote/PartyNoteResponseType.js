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

const PartyNoteResponseType = new GraphQLObjectType({
  name: 'PartyNoteResponseType',
  description: 'response type for PartyNote',

  fields: () => ({
    noteId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PartyNoteResponseType};
    