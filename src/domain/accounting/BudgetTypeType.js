
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetTypeAttrType} from '../accounting/BudgetTypeAttrType.js';
import {BudgetType} from '../accounting/BudgetType.js';


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
    budgetTypeAttr: {
      type: new GraphQLList(BudgetTypeAttrType),
      args : {budgetTypeId: {type: GraphQLString}},
      resolve: (budgetType, args, {loaders}) => loaders.ofbizArray.load(`budgetTypeAttrs/find?budgetTypeId=${budgetType.budgetTypeId}`)
    },
    budgetType: {
      type: new GraphQLList(BudgetTypeType),
      args : {budgetTypeId: {type: GraphQLString}},
      resolve: (budgetType, args, {loaders}) => loaders.ofbizArray.load(`budgetTypes/find?budgetTypeId=${budgetType.budgetTypeId}`)
    },
    budget: {
      type: new GraphQLList(BudgetType),
      args : {budgetTypeId: {type: GraphQLString}},
      resolve: (budgetType, args, {loaders}) => loaders.ofbizArray.load(`budgets/find?budgetTypeId=${budgetType.budgetTypeId}`)
    }
  })
});

export {BudgetTypeType};
    