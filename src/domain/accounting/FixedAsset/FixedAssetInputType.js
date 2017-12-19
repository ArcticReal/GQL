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

const FixedAssetInputType = new GraphQLInputObjectType({
  name: 'FixedAssetInputType',
  description: 'input type for FixedAsset',

  fields: () => ({
    acquireOrderId: {type: GraphQLString},
    acquireOrderItemSeqId: {type: GraphQLString},
    actualEndOfLife: {type: GraphQLString},
    calendarId: {type: GraphQLString},
    classEnumId: {type: GraphQLString},
    dateAcquired: {type: GraphQLString},
    dateLastServiced: {type: GraphQLString},
    dateNextService: {type: GraphQLString},
    depreciation: {type: GraphQLFloat},
    expectedEndOfLife: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fixedAssetName: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString},
    instanceOfProductId: {type: GraphQLString},
    locatedAtFacilityId: {type: GraphQLString},
    locatedAtLocationSeqId: {type: GraphQLString},
    parentFixedAssetId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productionCapacity: {type: GraphQLFloat},
    purchaseCost: {type: GraphQLFloat},
    purchaseCostUomId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    salvageValue: {type: GraphQLFloat},
    serialNumber: {type: GraphQLString},
    uomId: {type: GraphQLString}
  })
});

export {FixedAssetInputType};
    