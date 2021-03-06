
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
import {SurveyApplTypeType} from '../../content/SurveyApplType/SurveyApplTypeType.js';


const SurveyTriggerType = new GraphQLObjectType({
  name: 'SurveyTriggerType',
  description: 'Type for SurveyTrigger in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    survey: {
      type: SurveyType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (surveyTrigger, args, {loaders}) => loaders.ofbiz.load(`content/surveys/find?surveyId=${surveyTrigger.surveyId}`)
    },
    surveyApplType: {
      type: SurveyApplTypeType,
      args : {surveyApplTypeId: {type: GraphQLString}},
      resolve: (surveyTrigger, args, {loaders}) => loaders.ofbiz.load(`content/survey/surveyApplTypes/find?surveyApplTypeId=${surveyTrigger.surveyApplTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {SurveyTriggerType};
    