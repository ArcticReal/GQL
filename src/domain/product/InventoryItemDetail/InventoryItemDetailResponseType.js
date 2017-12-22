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

const InventoryItemDetailResponseType = new GraphQLObjectType({
  name: 'InventoryItemDetailResponseType',
  description: 'response type for InventoryItemDetail',

  fields: () => ({
    accountingQuantityDiff: {type: GraphQLFloat},
    availableToPromiseDiff: {type: GraphQLFloat},
    description: {type: GraphQLString},
    effectiveDate: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    inventoryItemDetailSeqId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    itemIssuanceId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    physicalInventoryId: {type: GraphQLString},
    quantityOnHandDiff: {type: GraphQLFloat},
    reasonEnumId: {type: GraphQLString},
    receiptId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    unitCost: {type: GraphQLFloat},
    workEffortId: {type: GraphQLString}
  })
});

export {InventoryItemDetailResponseType};
    