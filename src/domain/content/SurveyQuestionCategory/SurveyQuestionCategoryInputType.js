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

const SurveyQuestionCategoryInputType = new GraphQLInputObjectType({
  name: 'SurveyQuestionCategoryInputType',
  description: 'input type for SurveyQuestionCategory',

  fields: () => ({
    description: {type: GraphQLString},
    parentCategoryId: {type: GraphQLString},
    surveyQuestionCategoryId: {type: GraphQLString}
  })
});

export {SurveyQuestionCategoryInputType};
    