
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {ProductStoreSurveyApplType} from '../../product/ProductStoreSurveyAppl/ProductStoreSurveyApplType.js';


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
    