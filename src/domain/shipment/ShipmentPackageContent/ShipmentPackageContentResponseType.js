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

const ShipmentPackageContentResponseType = new GraphQLObjectType({
  name: 'ShipmentPackageContentResponseType',
  description: 'response type for ShipmentPackageContent',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    shipmentPackageSeqId: {type: GraphQLString},
    subProductId: {type: GraphQLString},
    subProductQuantity: {type: GraphQLFloat}
  })
});

export {ShipmentPackageContentResponseType};
    