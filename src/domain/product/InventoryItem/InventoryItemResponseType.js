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

const InventoryItemResponseType = new GraphQLObjectType({
  name: 'InventoryItemResponseType',
  description: 'response type for InventoryItem',

  fields: () => ({
    accountingQuantityTotal: {type: GraphQLFloat},
    activationNumber: {type: GraphQLString},
    activationValidThru: {type: GraphQLString},
    availableToPromiseTotal: {type: GraphQLFloat},
    binNumber: {type: GraphQLString},
    comments: {type: GraphQLString},
    containerId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    datetimeManufactured: {type: GraphQLString},
    datetimeReceived: {type: GraphQLString},
    expireDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    inventoryItemTypeId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    lotId: {type: GraphQLString},
    oldAvailableToPromise: {type: GraphQLFloat},
    oldQuantityOnHand: {type: GraphQLFloat},
    ownerPartyId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantityOnHandTotal: {type: GraphQLFloat},
    serialNumber: {type: GraphQLString},
    softIdentifier: {type: GraphQLString},
    statusId: {type: GraphQLString},
    unitCost: {type: GraphQLFloat},
    uomId: {type: GraphQLString}
  })
});

export {InventoryItemResponseType};
    