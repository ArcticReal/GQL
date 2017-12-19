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

const ReturnItemShipmentInputType = new GraphQLInputObjectType({
  name: 'ReturnItemShipmentInputType',
  description: 'input type for ReturnItemShipment',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ReturnItemShipmentInputType};
    