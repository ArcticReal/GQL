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

const ProductStoreSurveyApplResponseType = new GraphQLObjectType({
  name: 'ProductStoreSurveyApplResponseType',
  description: 'response type for ProductStoreSurveyAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    groupName: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    productStoreSurveyId: {type: GraphQLString},
    resultTemplate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    surveyApplTypeId: {type: GraphQLString},
    surveyId: {type: GraphQLString},
    surveyTemplate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreSurveyApplResponseType};
    