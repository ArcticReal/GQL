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

const OrderHeaderNoteResponseType = new GraphQLObjectType({
  name: 'OrderHeaderNoteResponseType',
  description: 'response type for OrderHeaderNote',

  fields: () => ({
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {OrderHeaderNoteResponseType};
    