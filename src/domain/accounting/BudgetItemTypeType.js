
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetItemType} from '../accounting/BudgetItemType.js';
import {BudgetScenarioRuleType} from '../accounting/BudgetScenarioRuleType.js';
import {GlBudgetXrefType} from '../accounting/GlBudgetXrefType.js';
import {BudgetItemTypeAttrType} from '../accounting/BudgetItemTypeAttrType.js';


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
    budgetItem: {
      type: new GraphQLList(BudgetItemType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`budgetItems/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    budgetItemTypeAttr: {
      type: new GraphQLList(BudgetItemTypeAttrType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`budgetItemTypeAttrs/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    glBudgetXref: {
      type: new GraphQLList(GlBudgetXrefType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`glBudgetXrefs/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    budgetScenarioRule: {
      type: new GraphQLList(BudgetScenarioRuleType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`budgetScenarioRules/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    },
    budgetItemType: {
      type: new GraphQLList(BudgetItemTypeType),
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (budgetItemType, args, {loaders}) => loaders.ofbizArray.load(`budgetItemTypes/find?budgetItemTypeId=${budgetItemType.budgetItemTypeId}`)
    }
  })
});

export {BudgetItemTypeType};
    