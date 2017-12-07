
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SurveyType} from '../content/SurveyType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {SurveyApplTypeType} from '../content/SurveyApplTypeType.js';
import {WorkEffortSurveyApplType} from '../workeffort/WorkEffortSurveyApplType.js';


const ProductStoreSurveyApplType = new GraphQLObjectType({
  name: 'ProductStoreSurveyApplType',
  description: 'Type for ProductStoreSurveyAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productStoreSurveyId: {type: GraphQLString},
    groupName: {type: GraphQLString},
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbiz.load(`surveys/find?surveyId=${productStoreSurveyAppl.surveyId}`)
    },
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    surveyTemplate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStoreSurveyAppl.productStoreId}`)
    },
    resultTemplate: {type: GraphQLString},
    surveyApplType: {
      type: SurveyApplTypeType,
      args : {surveyApplTypeId: {type: GraphQLString}},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbiz.load(`surveyApplTypes/find?surveyApplTypeId=${productStoreSurveyAppl.surveyApplTypeId}`)
    },
    thruDate: {type: GraphQLString},
    workEffortSurveyAppl: {
      type: new GraphQLList(WorkEffortSurveyApplType),
      args : {productStoreSurveyId: {type: GraphQLString}},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbizArray.load(`workEffortSurveyAppls/find?productStoreSurveyId=${productStoreSurveyAppl.productStoreSurveyId}`)
    }
  })
});

export {ProductStoreSurveyApplType};
    