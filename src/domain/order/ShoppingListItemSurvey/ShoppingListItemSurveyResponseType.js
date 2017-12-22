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

const ShoppingListItemSurveyResponseType = new GraphQLObjectType({
  name: 'ShoppingListItemSurveyResponseType',
  description: 'response type for ShoppingListItemSurvey',

  fields: () => ({
    shoppingListId: {type: GraphQLString},
    shoppingListItemSeqId: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString}
  })
});

export {ShoppingListItemSurveyResponseType};
    