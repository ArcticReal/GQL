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

const SurveyPageResponseType = new GraphQLObjectType({
  name: 'SurveyPageResponseType',
  description: 'response type for SurveyPage',

  fields: () => ({
    pageName: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    surveyId: {type: GraphQLString},
    surveyPageSeqId: {type: GraphQLString}
  })
});

export {SurveyPageResponseType};
    