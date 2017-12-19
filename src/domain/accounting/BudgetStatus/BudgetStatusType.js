
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

import {BudgetType} from '../../accounting/Budget/BudgetType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
      resolve: (budgetStatus, args, {loaders}) => loaders.ofbiz.load(`accounting/budgets/find?budgetId=${budgetStatus.budgetId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (budgetStatus, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${budgetStatus.changeByUserLoginId}`)
    }
  })
});

export {BudgetStatusType};
    