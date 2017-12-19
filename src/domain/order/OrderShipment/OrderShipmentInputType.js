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

const OrderShipmentInputType = new GraphQLInputObjectType({
  name: 'OrderShipmentInputType',
  description: 'input type for OrderShipment',

  fields: () => ({
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    shipGroupSeqId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {OrderShipmentInputType};
    