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

const SurveyMultiRespResponseType = new GraphQLObjectType({
  name: 'SurveyMultiRespResponseType',
  description: 'response type for SurveyMultiResp',

  fields: () => ({
    multiRespTitle: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString}
  })
});

export {SurveyMultiRespResponseType};
    