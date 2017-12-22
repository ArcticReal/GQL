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

const SurveyMultiRespColumnResponseType = new GraphQLObjectType({
  name: 'SurveyMultiRespColumnResponseType',
  description: 'response type for SurveyMultiRespColumn',

  fields: () => ({
    columnTitle: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    surveyId: {type: GraphQLString},
    surveyMultiRespColId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString}
  })
});

export {SurveyMultiRespColumnResponseType};
    