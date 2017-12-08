
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

import {SurveyType} from '../content/Survey.js';
import {SurveyApplTypeType} from '../content/SurveyApplType.js';


const SurveyTriggerType = new GraphQLObjectType({
  name: 'SurveyTriggerType',
  description: 'Type for SurveyTrigger in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyTrigger, args, {loaders}) => loaders.ofbiz.load(`surveys/find?surveyId=${surveyTrigger.surveyId}`)
    },
    surveyApplType: {
      type: SurveyApplTypeType,
      args : {surveyApplTypeId: {type: GraphQLString}},
      resolve: (surveyTrigger, args, {loaders}) => loaders.ofbiz.load(`surveyApplTypes/find?surveyApplTypeId=${surveyTrigger.surveyApplTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {SurveyTriggerType};
    




const SurveyTriggerInputType = new GraphQLInputObjectType({
  name: 'SurveyTriggerInputType',
  description: 'input type for SurveyTrigger in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    surveyApplTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {SurveyTriggerInputType};
    