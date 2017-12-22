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

const BudgetScenarioApplicationResponseType = new GraphQLObjectType({
  name: 'BudgetScenarioApplicationResponseType',
  description: 'response type for BudgetScenarioApplication',

  fields: () => ({
    amountChange: {type: GraphQLFloat},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budgetScenarioApplicId: {type: GraphQLString},
    budgetScenarioId: {type: GraphQLString},
    percentageChange: {type: GraphQLFloat}
  })
});

export {BudgetScenarioApplicationResponseType};
    