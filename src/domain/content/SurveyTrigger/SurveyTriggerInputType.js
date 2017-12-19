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

const SurveyTriggerInputType = new GraphQLInputObjectType({
  name: 'SurveyTriggerInputType',
  description: 'input type for SurveyTrigger',

  fields: () => ({
    fromDate: {type: GraphQLString},
    surveyApplTypeId: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {SurveyTriggerInputType};
    