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

const SurveyMultiRespColumnInputType = new GraphQLInputObjectType({
  name: 'SurveyMultiRespColumnInputType',
  description: 'input type for SurveyMultiRespColumn',

  fields: () => ({
    columnTitle: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    surveyId: {type: GraphQLString},
    surveyMultiRespColId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString}
  })
});

export {SurveyMultiRespColumnInputType};
    