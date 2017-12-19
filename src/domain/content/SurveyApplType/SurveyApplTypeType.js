
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

import {SurveyTriggerType} from '../../content/SurveyTrigger/SurveyTriggerType.js';
import {ProductStoreSurveyApplType} from '../../product/ProductStoreSurveyAppl/ProductStoreSurveyApplType.js';


const SurveyApplTypeType = new GraphQLObjectType({
  name: 'SurveyApplTypeType',
  description: 'Type for SurveyApplType in content',

  fields: () => ({
    description: {type: GraphQLString},
    surveyApplTypeId: {type: GraphQLString},
    surveyTriggers: {
      type: new GraphQLList(SurveyTriggerType),
      args : {},
      resolve: (surveyApplType, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyTriggers/find?surveyApplTypeId=${surveyApplType.surveyApplTypeId}`)
    },
    productStoreSurveyAppls: {
      type: new GraphQLList(ProductStoreSurveyApplType),
      args : {},
      resolve: (surveyApplType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreSurveyAppls/find?surveyApplTypeId=${surveyApplType.surveyApplTypeId}`)
    }
  })
});

export {SurveyApplTypeType};
    