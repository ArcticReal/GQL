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

const SurveyApplTypeResponseType = new GraphQLObjectType({
  name: 'SurveyApplTypeResponseType',
  description: 'response type for SurveyApplType',

  fields: () => ({
    description: {type: GraphQLString},
    surveyApplTypeId: {type: GraphQLString}
  })
});

export {SurveyApplTypeResponseType};
    