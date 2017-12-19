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

const OrderItemContactMechInputType = new GraphQLInputObjectType({
  name: 'OrderItemContactMechInputType',
  description: 'input type for OrderItemContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString}
  })
});

export {OrderItemContactMechInputType};
    