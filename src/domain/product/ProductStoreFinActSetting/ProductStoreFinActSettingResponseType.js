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

const ProductStoreFinActSettingResponseType = new GraphQLObjectType({
  name: 'ProductStoreFinActSettingResponseType',
  description: 'response type for ProductStoreFinActSetting',

  fields: () => ({
    accountCodeLength: {type: GraphQLInt},
    accountValidDays: {type: GraphQLInt},
    allowAuthToNegative: {type: GraphQLBoolean},
    authValidDays: {type: GraphQLInt},
    finAccountTypeId: {type: GraphQLString},
    minBalance: {type: GraphQLFloat},
    pinCodeLength: {type: GraphQLInt},
    productStoreId: {type: GraphQLString},
    purchSurveyCopyMe: {type: GraphQLString},
    purchSurveySendTo: {type: GraphQLString},
    purchaseSurveyId: {type: GraphQLString},
    replenishMethodEnumId: {type: GraphQLString},
    replenishThreshold: {type: GraphQLFloat},
    requirePinCode: {type: GraphQLBoolean},
    validateGCFinAcct: {type: GraphQLBoolean}
  })
});

export {ProductStoreFinActSettingResponseType};
    