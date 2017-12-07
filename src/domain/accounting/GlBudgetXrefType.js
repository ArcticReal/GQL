
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetItemTypeType} from '../accounting/BudgetItemTypeType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';


const GlBudgetXrefType = new GraphQLObjectType({
  name: 'GlBudgetXrefType',
  description: 'Type for GlBudgetXref in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    allocationPercentage: {type: GraphQLFloat},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glBudgetXref, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${glBudgetXref.glAccountId}`)
    },
    budgetItemType: {
      type: BudgetItemTypeType,
      args : {budgetItemTypeId: {type: GraphQLString}},
      resolve: (glBudgetXref, args, {loaders}) => loaders.ofbiz.load(`budgetItemTypes/find?budgetItemTypeId=${glBudgetXref.budgetItemTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {GlBudgetXrefType};
    