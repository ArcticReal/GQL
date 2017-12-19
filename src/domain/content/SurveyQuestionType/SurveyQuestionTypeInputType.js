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

const SurveyQuestionTypeInputType = new GraphQLInputObjectType({
  name: 'SurveyQuestionTypeInputType',
  description: 'input type for SurveyQuestionType',

  fields: () => ({
    description: {type: GraphQLString},
    surveyQuestionTypeId: {type: GraphQLString}
  })
});

export {SurveyQuestionTypeInputType};
    