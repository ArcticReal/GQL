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

const CustRequestItemNoteInputType = new GraphQLInputObjectType({
  name: 'CustRequestItemNoteInputType',
  description: 'input type for CustRequestItemNote',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {CustRequestItemNoteInputType};
    