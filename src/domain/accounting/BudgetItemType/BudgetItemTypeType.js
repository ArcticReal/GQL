
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

import {BudgetItemType} from '../../accounting/BudgetItem/BudgetItemType.js';
import {BudgetScenarioRuleType} from '../../accounting/BudgetScenarioRule/BudgetScenarioRuleType.js';
import {GlBudgetXrefType} from '../../accounting/GlBudgetXref/GlBudgetXrefType.js';
import {BudgetItemTypeAttrType} from '../../accounting/BudgetItemTypeAttr/BudgetItemTypeAttrType.js';


const BudgetItemTypeType = new GraphQLObjectType({
  name: 'BudgetItemTypeType',
  description: 'Type for BudgetItemType in accounting',

  fields: () => ({
    parentType: {
      type: BudgetItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbiz.load(`accounting/budget/budgetItemTypes/find?budgetItemTypeId=${budgetItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    budgetItemTypeId: {type: GraphQLString},
    budgetItems: {
      type: new GraphQLList(BudgetItemType),
      args : {},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetItems/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    budgetItemTypeAttrs: {
      type: new GraphQLList(BudgetItemTypeAttrType),
      args : {},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetItemTypeAttrs/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    glBudgetXrefs: {
      type: new GraphQLList(GlBudgetXrefType),
      args : {},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/glBudgetXrefs/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    budgetScenarioRules: {
      type: new GraphQLList(BudgetScenarioRuleType),
      args : {},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetScenarioRules/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    budgetItemTypes: {
      type: new GraphQLList(BudgetItemTypeType),
      args : {},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/budgetItemTypes/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    }
  })
});

export {BudgetItemTypeType};
    