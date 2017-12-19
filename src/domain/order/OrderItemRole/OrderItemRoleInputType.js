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

const OrderItemRoleInputType = new GraphQLInputObjectType({
  name: 'OrderItemRoleInputType',
  description: 'input type for OrderItemRole',

  fields: () => ({
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {OrderItemRoleInputType};
    