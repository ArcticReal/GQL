
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProductStoreFinActSetting = new GraphQLObjectType({
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

export {ProductStoreFinActSetting};
    