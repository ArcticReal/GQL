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

const ProductOrderItemInputType = new GraphQLInputObjectType({
  name: 'ProductOrderItemInputType',
  description: 'input type for ProductOrderItem',

  fields: () => ({
    engagementId: {type: GraphQLString},
    engagementItemSeqId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductOrderItemInputType};
    