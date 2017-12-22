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

const GlBudgetXrefResponseType = new GraphQLObjectType({
  name: 'GlBudgetXrefResponseType',
  description: 'response type for GlBudgetXref',

  fields: () => ({
    allocationPercentage: {type: GraphQLFloat},
    budgetItemTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlBudgetXrefResponseType};
    