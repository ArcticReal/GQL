
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

import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';


const OrderHeaderNoteType = new GraphQLObjectType({
  name: 'OrderHeaderNoteType',
  description: 'Type for OrderHeaderNote in order',

  fields: () => ({
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeaderNote, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderHeaderNote.orderId}`)
    },
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString}
  })
});

export {OrderHeaderNoteType};
    