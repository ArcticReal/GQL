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

const OrderItemGroupInputType = new GraphQLInputObjectType({
  name: 'OrderItemGroupInputType',
  description: 'input type for OrderItemGroup',

  fields: () => ({
    groupName: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemGroupSeqId: {type: GraphQLString},
    parentGroupSeqId: {type: GraphQLString}
  })
});

export {OrderItemGroupInputType};
    