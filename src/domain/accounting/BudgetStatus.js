
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

import {BudgetType} from '../accounting/Budget.js';
import {UserLoginType} from '../login/UserLogin.js';


const BudgetStatusType = new GraphQLObjectType({
  name: 'BudgetStatusType',
  description: 'Type for BudgetStatus in accounting',

  fields: () => ({
    statusDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    statusId: {type: GraphQLString},
    budget: {
      type: BudgetType,
      args : {budgetId: {type: GraphQLString}},
      resolve: (budgetStatus, args, {loaders}) => loaders.ofbiz.load(`budgets/find?budgetId=${budgetStatus.budgetId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (budgetStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${budgetStatus.changeByUserLoginId}`)
    }
  })
});

export {BudgetStatusType};
    




const BudgetStatusInputType = new GraphQLInputObjectType({
  name: 'BudgetStatusInputType',
  description: 'input type for BudgetStatus in accounting',

  fields: () => ({
    statusDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    statusId: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    changeByUserLoginId: {type: GraphQLString}
  })
});

export {BudgetStatusInputType};
    