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

const WorkEffortSurveyApplInputType = new GraphQLInputObjectType({
  name: 'WorkEffortSurveyApplInputType',
  description: 'input type for WorkEffortSurveyAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortSurveyApplInputType};
    