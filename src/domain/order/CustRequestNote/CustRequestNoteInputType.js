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

const CustRequestNoteInputType = new GraphQLInputObjectType({
  name: 'CustRequestNoteInputType',
  description: 'input type for CustRequestNote',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {CustRequestNoteInputType};
    