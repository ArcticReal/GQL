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

const OrderItemShipGroupAssocInputType = new GraphQLInputObjectType({
  name: 'OrderItemShipGroupAssocInputType',
  description: 'input type for OrderItemShipGroupAssoc',

  fields: () => ({
    cancelQuantity: {type: GraphQLFloat},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    shipGroupSeqId: {type: GraphQLString}
  })
});

export {OrderItemShipGroupAssocInputType};
    