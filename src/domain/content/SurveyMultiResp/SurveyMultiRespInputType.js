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

const SurveyMultiRespInputType = new GraphQLInputObjectType({
  name: 'SurveyMultiRespInputType',
  description: 'input type for SurveyMultiResp',

  fields: () => ({
    multiRespTitle: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    surveyMultiRespId: {type: GraphQLString}
  })
});

export {SurveyMultiRespInputType};
    