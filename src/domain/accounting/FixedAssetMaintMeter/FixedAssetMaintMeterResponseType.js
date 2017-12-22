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

const FixedAssetMaintMeterResponseType = new GraphQLObjectType({
  name: 'FixedAssetMaintMeterResponseType',
  description: 'response type for FixedAssetMaintMeter',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    meterValue: {type: GraphQLFloat},
    productMeterTypeId: {type: GraphQLString}
  })
});

export {FixedAssetMaintMeterResponseType};
    