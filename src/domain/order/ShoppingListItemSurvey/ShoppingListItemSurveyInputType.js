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

const ShoppingListItemSurveyInputType = new GraphQLInputObjectType({
  name: 'ShoppingListItemSurveyInputType',
  description: 'input type for ShoppingListItemSurvey',

  fields: () => ({
    shoppingListId: {type: GraphQLString},
    shoppingListItemSeqId: {type: GraphQLString},
    surveyResponseId: {type: GraphQLString}
  })
});

export {ShoppingListItemSurveyInputType};
    