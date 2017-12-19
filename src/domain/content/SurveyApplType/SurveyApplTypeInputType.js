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

const SurveyApplTypeInputType = new GraphQLInputObjectType({
  name: 'SurveyApplTypeInputType',
  description: 'input type for SurveyApplType',

  fields: () => ({
    description: {type: GraphQLString},
    surveyApplTypeId: {type: GraphQLString}
  })
});

export {SurveyApplTypeInputType};
    