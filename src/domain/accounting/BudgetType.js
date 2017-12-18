
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

import {BudgetTypeAttrType} from '../accounting/BudgetTypeAttr.js';
import {BudgetType} from '../accounting/Budget.js';


const BudgetTypeType = new GraphQLObjectType({
  name: 'BudgetTypeType',
  description: 'Type for BudgetType in accounting',

  fields: () => ({
    parentType: {
      type: BudgetTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (budgetType, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetTypes/find?budgetTypeId=${budgetType.parentTypeId}`)
    },
    budgetTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    budgetTypeAttrs: {
      type: new GraphQLList(BudgetTypeAttrType),
      args : {},
      resolve: (budgetType, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetTypeAttrs/find?budgetTypeId=${budgetType.budgetTypeId}`)
    },
    budgetTypes: {
      type: new GraphQLList(BudgetTypeType),
      args : {},
      resolve: (budgetType, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetTypes/find?budgetTypeId=${budgetType.budgetTypeId}`)
    },
    budgets: {
      type: new GraphQLList(BudgetType),
      args : {},
      resolve: (budgetType, args, {loaders}) => loaders.ofbizArray.load(`accounting/budgets/find?budgetTypeId=${budgetType.budgetTypeId}`)
    }
  })
});

export {BudgetTypeType};
    




const BudgetTypeInputType = new GraphQLInputObjectType({
  name: 'BudgetTypeInputType',
  description: 'input type for BudgetType',

  fields: () => ({
    budgetTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {BudgetTypeInputType};
    