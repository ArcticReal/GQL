
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SurveyTriggerType} from '../content/SurveyTriggerType.js';
import {ProductStoreSurveyApplType} from '../product/ProductStoreSurveyApplType.js';


const SurveyApplTypeType = new GraphQLObjectType({
  name: 'SurveyApplTypeType',
  description: 'Type for SurveyApplType in content',

  fields: () => ({
    description: {type: GraphQLString},
    surveyApplTypeId: {type: GraphQLString},
    surveyTrigger: {
      type: new GraphQLList(SurveyTriggerType),
      args : {surveyApplTypeId: {type: GraphQLString}},
      resolve: (surveyApplType, args, {loaders}) => loaders.ofbizArray.load(`surveyTriggers/find?surveyApplTypeId=${surveyApplType.surveyApplTypeId}`)
    },
    productStoreSurveyAppl: {
      type: new GraphQLList(ProductStoreSurveyApplType),
      args : {surveyApplTypeId: {type: GraphQLString}},
      resolve: (surveyApplType, args, {loaders}) => loaders.ofbizArray.load(`productStoreSurveyAppls/find?surveyApplTypeId=${surveyApplType.surveyApplTypeId}`)
    }
  })
});

export {SurveyApplTypeType};
    