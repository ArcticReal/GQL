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

const SurveyTriggerResponseType = new GraphQLObjectType({
  name: 'SurveyTriggerResponseType',
  description: 'response type for SurveyTrigger',

  fields: () => ({
    fromDate: {type: GraphQLString},
    surveyApplTypeId: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {SurveyTriggerResponseType};
    