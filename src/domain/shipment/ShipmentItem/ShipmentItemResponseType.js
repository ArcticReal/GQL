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

const ShipmentItemResponseType = new GraphQLObjectType({
  name: 'ShipmentItemResponseType',
  description: 'response type for ShipmentItem',

  fields: () => ({
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    shipmentContentDescription: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemResponseType};
    