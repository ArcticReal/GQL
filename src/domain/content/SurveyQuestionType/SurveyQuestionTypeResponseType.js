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

const SurveyQuestionTypeResponseType = new GraphQLObjectType({
  name: 'SurveyQuestionTypeResponseType',
  description: 'response type for SurveyQuestionType',

  fields: () => ({
    description: {type: GraphQLString},
    surveyQuestionTypeId: {type: GraphQLString}
  })
});

export {SurveyQuestionTypeResponseType};
    