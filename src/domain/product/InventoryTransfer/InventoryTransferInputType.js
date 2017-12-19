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

const InventoryTransferInputType = new GraphQLInputObjectType({
  name: 'InventoryTransferInputType',
  description: 'input type for InventoryTransfer',

  fields: () => ({
    comments: {type: GraphQLString},
    containerId: {type: GraphQLString},
    containerIdTo: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    facilityIdTo: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    inventoryTransferId: {type: GraphQLString},
    itemIssuanceId: {type: GraphQLString},
    locationSeqId: {type: GraphQLString},
    locationSeqIdTo: {type: GraphQLString},
    receiveDate: {type: GraphQLString},
    sendDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {InventoryTransferInputType};
    