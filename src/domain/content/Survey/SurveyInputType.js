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

const SurveyInputType = new GraphQLInputObjectType({
  name: 'SurveyInputType',
  description: 'input type for Survey',

  fields: () => ({
    acroFormContentId: {type: GraphQLString},
    allowMultiple: {type: GraphQLBoolean},
    allowUpdate: {type: GraphQLBoolean},
    comments: {type: GraphQLString},
    description: {type: GraphQLString},
    isAnonymous: {type: GraphQLBoolean},
    responseService: {type: GraphQLString},
    submitCaption: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    surveyName: {type: GraphQLString}
  })
});

export {SurveyInputType};
    