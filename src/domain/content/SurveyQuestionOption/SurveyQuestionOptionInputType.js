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

const SurveyQuestionOptionInputType = new GraphQLInputObjectType({
  name: 'SurveyQuestionOptionInputType',
  description: 'input type for SurveyQuestionOption',

  fields: () => ({
    amountBase: {type: GraphQLFloat},
    amountBaseUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    duration: {type: GraphQLInt},
    durationUomId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    surveyOptionSeqId: {type: GraphQLString},
    surveyQuestionId: {type: GraphQLString},
    weightFactor: {type: GraphQLFloat}
  })
});

export {SurveyQuestionOptionInputType};
    