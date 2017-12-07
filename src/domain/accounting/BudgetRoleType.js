
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {BudgetType} from '../accounting/BudgetType.js';


const BudgetRoleType = new GraphQLObjectType({
  name: 'BudgetRoleType',
  description: 'Type for BudgetRole in accounting',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetRole, args, {loaders}) => loaders.ofbiz.load(`budgets/find?budgetId=${budgetRole.budgetId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (budgetRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${budgetRole.partyId}`)
    }
  })
});

export {BudgetRoleType};
    