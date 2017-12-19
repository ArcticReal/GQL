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

const SurveyResponseInputType = new GraphQLInputObjectType({
  name: 'SurveyResponseInputType',
  description: 'input type for SurveyResponse',

  fields: () => ({
    generalFeedback: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    referenceId: {type: GraphQLString},
    responseDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString}
  })
});

export {SurveyResponseInputType};
    