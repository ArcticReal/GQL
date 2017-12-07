
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
import {SurveyApplTypeType} from '../content/SurveyApplTypeType.js';


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
    