
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

import {BudgetType} from '../accounting/Budget.js';


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
    




const BudgetAttributeInputType = new GraphQLInputObjectType({
  name: 'BudgetAttributeInputType',
  description: 'input type for BudgetAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {BudgetAttributeInputType};
    