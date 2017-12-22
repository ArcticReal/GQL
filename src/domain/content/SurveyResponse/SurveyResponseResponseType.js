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

const SurveyResponseResponseType = new GraphQLObjectType({
  name: 'SurveyResponseResponseType',
  description: 'response type for SurveyResponse',

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

export {SurveyResponseResponseType};
    