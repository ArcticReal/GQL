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

const FixedAssetMeterResponseType = new GraphQLObjectType({
  name: 'FixedAssetMeterResponseType',
  description: 'response type for FixedAssetMeter',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    meterValue: {type: GraphQLFloat},
    productMeterTypeId: {type: GraphQLString},
    readingDate: {type: GraphQLString},
    readingReasonEnumId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {FixedAssetMeterResponseType};
    