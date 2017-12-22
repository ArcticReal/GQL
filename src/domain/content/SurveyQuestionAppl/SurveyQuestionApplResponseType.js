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

const SurveyQuestionApplResponseType = new GraphQLObjectType({
  name: 'SurveyQuestionApplResponseType',
  description: 'response type for SurveyQuestionAppl',

  fields: () => ({
    externalFieldRef: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    requiredField: {type: GraphQLBoolean},
    sequenceNum: {type: GraphQLInt},
    surveyId: {type: GraphQLString},
    surveyMultiRespColId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString},
    surveyPageSeqId: {type: GraphQLString},
    surveyQuestionId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    withSurveyOptionSeqId: {type: GraphQLString},
    withSurveyQuestionId: {type: GraphQLString}
  })
});

export {SurveyQuestionApplResponseType};
    