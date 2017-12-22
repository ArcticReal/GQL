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

const SurveyQuestionCategoryResponseType = new GraphQLObjectType({
  name: 'SurveyQuestionCategoryResponseType',
  description: 'response type for SurveyQuestionCategory',

  fields: () => ({
    description: {type: GraphQLString},
    parentCategoryId: {type: GraphQLString},
    surveyQuestionCategoryId: {type: GraphQLString}
  })
});

export {SurveyQuestionCategoryResponseType};
    