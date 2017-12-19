
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

import {SurveyType} from '../../content/Survey/SurveyType.js';
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';
import {SurveyApplTypeType} from '../../content/SurveyApplType/SurveyApplTypeType.js';
import {WorkEffortSurveyApplType} from '../../workeffort/WorkEffortSurveyAppl/WorkEffortSurveyApplType.js';


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
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbiz.load(`content/surveys/find?surveyId=${productStoreSurveyAppl.surveyId}`)
    },
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    surveyTemplate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStoreSurveyAppl.productStoreId}`)
    },
    resultTemplate: {type: GraphQLString},
    surveyApplType: {
      type: SurveyApplTypeType,
      args : {surveyApplTypeId: {type: GraphQLString}},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyApplTypes/find?surveyApplTypeId=${productStoreSurveyAppl.surveyApplTypeId}`)
    },
    thruDate: {type: GraphQLString},
    workEffortSurveyAppls: {
      type: new GraphQLList(WorkEffortSurveyApplType),
      args : {},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortSurveyAppls/find?productStoreSurveyId=${productStoreSurveyAppl.productStoreSurveyId}`)
    }
  })
});

export {ProductStoreSurveyApplType};
    