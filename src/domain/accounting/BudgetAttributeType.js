
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetType} from '../accounting/BudgetType.js';


const BudgetAttributeType = new GraphQLObjectType({
  name: 'BudgetAttributeType',
  description: 'Type for BudgetAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetAttribute, args, {loaders}) => loaders.ofbiz.load(`budgets/find?budgetId=${budgetAttribute.budgetId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {BudgetAttributeType};
    