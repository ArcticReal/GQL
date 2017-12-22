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

const SurveyQuestionResponseType = new GraphQLObjectType({
  name: 'SurveyQuestionResponseType',
  description: 'response type for SurveyQuestion',

  fields: () => ({
    description: {type: GraphQLString},
    enumTypeId: {type: GraphQLString},
    formatString: {type: GraphQLString},
    geoId: {type: GraphQLString},
    hint: {type: GraphQLString},
    question: {type: GraphQLString},
    surveyQuestionCategoryId: {type: GraphQLString},
    surveyQuestionId: {type: GraphQLString},
    surveyQuestionTypeId: {type: GraphQLString}
  })
});

export {SurveyQuestionResponseType};
    