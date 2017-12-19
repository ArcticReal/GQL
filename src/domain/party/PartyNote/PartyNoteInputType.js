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

const PartyNoteInputType = new GraphQLInputObjectType({
  name: 'PartyNoteInputType',
  description: 'input type for PartyNote',

  fields: () => ({
    noteId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PartyNoteInputType};
    