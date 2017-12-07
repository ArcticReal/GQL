
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BudgetType} from '../accounting/BudgetType.js';
import {UserLoginType} from '../login/UserLoginType.js';


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
    