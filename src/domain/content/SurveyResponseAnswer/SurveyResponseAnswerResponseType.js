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

const SurveyResponseAnswerResponseType = new GraphQLObjectType({
  name: 'SurveyResponseAnswerResponseType',
  description: 'response type for SurveyResponseAnswer',

  fields: () => ({
    amountBase: {type: GraphQLFloat},
    amountBaseUomId: {type: GraphQLString},
    answeredDate: {type: GraphQLString},
    booleanResponse: {type: GraphQLBoolean},
    contentId: {type: GraphQLString},
    currencyResponse: {type: GraphQLFloat},
    duration: {type: GraphQLInt},
    durationUomId: {type: GraphQLString},
    floatResponse: {type: GraphQLFloat},
    numericResponse: {type: GraphQLInt},
    sequenceNum: {type: GraphQLInt},
    surveyMultiRespColId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString},
    surveyOptionSeqId: {type: GraphQLString},
    surveyQuestionId: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString},
    textResponse: {type: GraphQLString},
    weightFactor: {type: GraphQLFloat}
  })
});

export {SurveyResponseAnswerResponseType};
    