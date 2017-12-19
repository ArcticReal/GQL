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

const SurveyPageInputType = new GraphQLInputObjectType({
  name: 'SurveyPageInputType',
  description: 'input type for SurveyPage',

  fields: () => ({
    pageName: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    surveyId: {type: GraphQLString},
    surveyPageSeqId: {type: GraphQLString}
  })
});

export {SurveyPageInputType};
    