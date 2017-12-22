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

const CustRequestItemNoteResponseType = new GraphQLObjectType({
  name: 'CustRequestItemNoteResponseType',
  description: 'response type for CustRequestItemNote',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {CustRequestItemNoteResponseType};
    