
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {ProductStoreSurveyApplType} from '../product/ProductStoreSurveyAppl.js';


const WorkEffortSurveyApplType = new GraphQLObjectType({
  name: 'WorkEffortSurveyApplType',
  description: 'Type for WorkEffortSurveyAppl in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortSurveyAppl, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortSurveyAppl.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    survey: {
      type: ProductStoreSurveyApplType,
      args : {surveyId: {type: GraphQLString}},
      resolve: (workEffortSurveyAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreSurveyAppls/find?productStoreSurveyId=${workEffortSurveyAppl.surveyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortSurveyApplType};
    




const WorkEffortSurveyApplInputType = new GraphQLInputObjectType({
  name: 'WorkEffortSurveyApplInputType',
  description: 'input type for WorkEffortSurveyAppl in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortSurveyApplInputType};
    