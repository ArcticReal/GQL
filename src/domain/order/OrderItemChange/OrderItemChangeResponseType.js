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

const OrderItemChangeResponseType = new GraphQLObjectType({
  name: 'OrderItemChangeResponseType',
  description: 'response type for OrderItemChange',

  fields: () => ({
    cancelQuantity: {type: GraphQLFloat},
    changeComments: {type: GraphQLString},
    changeDatetime: {type: GraphQLString},
    changeTypeEnumId: {type: GraphQLString},
    changeUserLogin: {type: GraphQLString},
    itemDescription: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemChangeId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reasonEnumId: {type: GraphQLString},
    unitPrice: {type: GraphQLFloat}
  })
});

export {OrderItemChangeResponseType};
    