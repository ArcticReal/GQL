
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
      resolve: (budgetType, args, {loaders}) => loaders.ofbiz.load(`budgetTypes/find?budgetTypeId=${budgetType.parentTypeId}`)
    },
    budgetTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    budgetTypeAttrs: {
      type: new GraphQLList(BudgetTypeAttrType),
      args : {budgetTypeId: {type: GraphQLString}},
      resolve: (budgetType, args, {loaders}) => loaders.ofbizArray.load(`budgetTypeAttrs/find?budgetTypeId=${budgetType.budgetTypeId}`)
    },
    budgetTypes: {
      type: new GraphQLList(BudgetTypeType),
      args : {budgetTypeId: {type: GraphQLString}},
      resolve: (budgetType, args, {loaders}) => loaders.ofbizArray.load(`budgetTypes/find?budgetTypeId=${budgetType.budgetTypeId}`)
    },
    budgets: {
      type: new GraphQLList(BudgetType),
      args : {budgetTypeId: {type: GraphQLString}},
      resolve: (budgetType, args, {loaders}) => loaders.ofbizArray.load(`budgets/find?budgetTypeId=${budgetType.budgetTypeId}`)
    }
  })
});

export {BudgetTypeType};
    




const BudgetTypeInputType = new GraphQLInputObjectType({
  name: 'BudgetTypeInputType',
  description: 'input type for BudgetType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    budgetTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {BudgetTypeInputType};
    