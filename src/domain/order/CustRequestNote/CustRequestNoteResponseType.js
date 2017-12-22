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

const CustRequestNoteResponseType = new GraphQLObjectType({
  name: 'CustRequestNoteResponseType',
  description: 'response type for CustRequestNote',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {CustRequestNoteResponseType};
    