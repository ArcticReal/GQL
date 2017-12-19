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

const FixedAssetMaintMeterInputType = new GraphQLInputObjectType({
  name: 'FixedAssetMaintMeterInputType',
  description: 'input type for FixedAssetMaintMeter',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    meterValue: {type: GraphQLFloat},
    productMeterTypeId: {type: GraphQLString}
  })
});

export {FixedAssetMaintMeterInputType};
    