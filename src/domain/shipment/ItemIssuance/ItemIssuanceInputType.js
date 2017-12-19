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

const ItemIssuanceInputType = new GraphQLInputObjectType({
  name: 'ItemIssuanceInputType',
  description: 'input type for ItemIssuance',

  fields: () => ({
    cancelQuantity: {type: GraphQLFloat},
    fixedAssetId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    issuedByUserLoginId: {type: GraphQLString},
    issuedDateTime: {type: GraphQLString},
    itemIssuanceId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    shipGroupSeqId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ItemIssuanceInputType};
    