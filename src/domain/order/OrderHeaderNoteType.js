
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderHeaderType} from '../order/OrderHeaderType.js';


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
    