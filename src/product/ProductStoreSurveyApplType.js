
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Survey} from '../product/Survey.js';
import {ProductStore} from '../product/ProductStore.js';
import {SurveyApplType} from '../product/SurveyApplType.js';


const ProductStoreSurveyAppl = new GraphQLObjectType({
  name: 'ProductStoreSurveyApplType',
  description: 'Type for ProductStoreSurveyAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productStoreSurveyId: {type: GraphQLString},
    groupName: {type: GraphQLString},
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbizArray.load(`surveys/find?=${args.surveyId}`)
    },
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    surveyTemplate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    resultTemplate: {type: GraphQLString},
    surveyApplType: {
      type: SurveyApplTypeType,
      args : {surveyApplTypeId: {type: GraphQLString}},
      resolve: (productStoreSurveyAppl, args, {loaders}) => loaders.ofbizArray.load(`surveyApplTypes/find?=${args.surveyApplTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreSurveyAppl};
    