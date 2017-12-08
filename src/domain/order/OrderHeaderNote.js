
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

import {OrderHeaderType} from '../order/OrderHeader.js';


const OrderHeaderNoteType = new GraphQLObjectType({
  name: 'OrderHeaderNoteType',
  description: 'Type for OrderHeaderNote in order',

  fields: () => ({
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeaderNote, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderHeaderNote.orderId}`)
    },
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString}
  })
});

export {OrderHeaderNoteType};
    




const OrderHeaderNoteInputType = new GraphQLInputObjectType({
  name: 'OrderHeaderNoteInputType',
  description: 'input type for OrderHeaderNote in order',

  fields: () => ({
    orderId: {type: GraphQLString},
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString}
  })
});

export {OrderHeaderNoteInputType};
    