
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {BudgetType} from '../../accounting/Budget/BudgetType.js';


const BudgetRoleType = new GraphQLObjectType({
  name: 'BudgetRoleType',
  description: 'Type for BudgetRole in accounting',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetRole, args, {loaders}) => loaders.ofbiz.load(`accounting/budgets/find?budgetId=${budgetRole.budgetId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (budgetRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${budgetRole.partyId}`)
    }
  })
});

export {BudgetRoleType};
    