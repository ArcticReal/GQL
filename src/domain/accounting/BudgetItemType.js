
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

import {BudgetItemType} from '../accounting/BudgetItem.js';
import {BudgetScenarioRuleType} from '../accounting/BudgetScenarioRule.js';
import {GlBudgetXrefType} from '../accounting/GlBudgetXref.js';
import {BudgetItemTypeAttrType} from '../accounting/BudgetItemTypeAttr.js';


const BudgetItemTypeType = new GraphQLObjectType({
  name: 'BudgetItemTypeType',
  description: 'Type for BudgetItemType in accounting',

  fields: () => ({
    parentType: {
      type: BudgetItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbiz.load(`budgetItemTypes/find?budgetItemTypeId=${budgetItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    budgetItemTypeId: {type: GraphQLString},
    budgetItems: {
      type: new GraphQLList(BudgetItemType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`budgetItems/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    budgetItemTypeAttrs: {
      type: new GraphQLList(BudgetItemTypeAttrType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`budgetItemTypeAttrs/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    glBudgetXrefs: {
      type: new GraphQLList(GlBudgetXrefType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`glBudgetXrefs/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    budgetScenarioRules: {
      type: new GraphQLList(BudgetScenarioRuleType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioRules/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    budgetItemTypes: {
      type: new GraphQLList(BudgetItemTypeType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`budgetItemTypes/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    }
  })
});

export {BudgetItemTypeType};
    




const BudgetItemTypeInputType = new GraphQLInputObjectType({
  name: 'BudgetItemTypeInputType',
  description: 'input type for BudgetItemType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    budgetItemTypeId: {type: GraphQLString}
  })
});

export {BudgetItemTypeInputType};
    