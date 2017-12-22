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

const ProductOrderItemResponseType = new GraphQLObjectType({
  name: 'ProductOrderItemResponseType',
  description: 'response type for ProductOrderItem',

  fields: () => ({
    engagementId: {type: GraphQLString},
    engagementItemSeqId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductOrderItemResponseType};
    