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

const FixedAssetMaintInputType = new GraphQLInputObjectType({
  name: 'FixedAssetMaintInputType',
  description: 'input type for FixedAssetMaint',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    intervalMeterTypeId: {type: GraphQLString},
    intervalQuantity: {type: GraphQLFloat},
    intervalUomId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    productMaintSeqId: {type: GraphQLString},
    productMaintTypeId: {type: GraphQLString},
    purchaseOrderId: {type: GraphQLString},
    scheduleWorkEffortId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {FixedAssetMaintInputType};
    