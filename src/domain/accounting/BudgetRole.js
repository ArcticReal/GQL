
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

import {PartyRoleType} from '../party/PartyRole.js';
import {BudgetType} from '../accounting/Budget.js';


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
    




const BudgetRoleInputType = new GraphQLInputObjectType({
  name: 'BudgetRoleInputType',
  description: 'input type for BudgetRole',

  fields: () => ({
    budgetId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {BudgetRoleInputType};
    