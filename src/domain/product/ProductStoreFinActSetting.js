
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



const ProductStoreFinActSettingType = new GraphQLObjectType({
  name: 'ProductStoreFinActSettingType',
  description: 'Type for ProductStoreFinActSetting in product',

  fields: () => ({
    authValidDays: {type: GraphQLInt},
    allowAuthToNegative: {type: GraphQLBoolean},
    accountCodeLength: {type: GraphQLInt},
    purchSurveyCopyMe: {type: GraphQLString},
    validateGCFinAcct: {type: GraphQLBoolean},
    replenishThreshold: {type: GraphQLFloat},
    accountValidDays: {type: GraphQLInt},
    finAccountTypeId: {type: GraphQLString},
    replenishMethodEnumId: {type: GraphQLString},
    purchSurveySendTo: {type: GraphQLString},
    minBalance: {type: GraphQLFloat},
    productStoreId: {type: GraphQLString},
    purchaseSurveyId: {type: GraphQLString},
    requirePinCode: {type: GraphQLBoolean},
    pinCodeLength: {type: GraphQLInt}
  })
});

export {ProductStoreFinActSettingType};
    




const ProductStoreFinActSettingInputType = new GraphQLInputObjectType({
  name: 'ProductStoreFinActSettingInputType',
  description: 'input type for ProductStoreFinActSetting in product',

  fields: () => ({
    authValidDays: {type: GraphQLInt},
    allowAuthToNegative: {type: GraphQLBoolean},
    accountCodeLength: {type: GraphQLInt},
    purchSurveyCopyMe: {type: GraphQLString},
    validateGCFinAcct: {type: GraphQLBoolean},
    replenishThreshold: {type: GraphQLFloat},
    accountValidDays: {type: GraphQLInt},
    finAccountTypeId: {type: GraphQLString},
    replenishMethodEnumId: {type: GraphQLString},
    purchSurveySendTo: {type: GraphQLString},
    minBalance: {type: GraphQLFloat},
    productStoreId: {type: GraphQLString},
    purchaseSurveyId: {type: GraphQLString},
    requirePinCode: {type: GraphQLBoolean},
    pinCodeLength: {type: GraphQLInt}
  })
});

export {ProductStoreFinActSettingInputType};
    