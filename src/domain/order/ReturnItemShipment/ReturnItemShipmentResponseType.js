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

const ReturnItemShipmentResponseType = new GraphQLObjectType({
  name: 'ReturnItemShipmentResponseType',
  description: 'response type for ReturnItemShipment',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ReturnItemShipmentResponseType};
    