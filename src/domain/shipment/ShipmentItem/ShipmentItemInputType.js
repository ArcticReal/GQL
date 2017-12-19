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

const ShipmentItemInputType = new GraphQLInputObjectType({
  name: 'ShipmentItemInputType',
  description: 'input type for ShipmentItem',

  fields: () => ({
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    shipmentContentDescription: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemInputType};
    