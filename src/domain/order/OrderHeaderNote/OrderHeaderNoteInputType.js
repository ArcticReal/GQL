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

const OrderHeaderNoteInputType = new GraphQLInputObjectType({
  name: 'OrderHeaderNoteInputType',
  description: 'input type for OrderHeaderNote',

  fields: () => ({
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {OrderHeaderNoteInputType};
    