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

const WorkEffortSurveyApplResponseType = new GraphQLObjectType({
  name: 'WorkEffortSurveyApplResponseType',
  description: 'response type for WorkEffortSurveyAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortSurveyApplResponseType};
    