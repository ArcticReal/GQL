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

const OrderItemGroupResponseType = new GraphQLObjectType({
  name: 'OrderItemGroupResponseType',
  description: 'response type for OrderItemGroup',

  fields: () => ({
    groupName: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemGroupSeqId: {type: GraphQLString},
    parentGroupSeqId: {type: GraphQLString}
  })
});

export {OrderItemGroupResponseType};
    