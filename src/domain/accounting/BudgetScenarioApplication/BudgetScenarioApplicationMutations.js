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
import {BudgetScenarioApplicationInputType} from '../../accounting/BudgetScenarioApplication/BudgetScenarioApplicationInputType.js';
import {BudgetScenarioApplicationResponseType} from '../../accounting/BudgetScenarioApplication/BudgetScenarioApplicationResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBudgetScenarioApplication = {
  type: BudgetScenarioApplicationResponseType,
  description: 'mutation for ofbiz createBudgetScenarioApplication method',
  args:{budgetScenarioApplicationToBeAdded: {type: BudgetScenarioApplicationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/budget/budgetScenarioApplications/add?`, args.budgetScenarioApplicationToBeAdded, req);
  }
};
export {createBudgetScenarioApplication};


const updateBudgetScenarioApplication = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBudgetScenarioApplication method',
  args:{budgetScenarioApplicationToBeUpdated: {type: BudgetScenarioApplicationInputType},budgetScenarioApplicId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/budget/budgetScenarioApplications/${args.budgetScenarioApplicId}?`, args.budgetScenarioApplicationToBeUpdated, req);
  }
};
export {updateBudgetScenarioApplication};


const deleteBudgetScenarioApplicationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBudgetScenarioApplicationByIdUpdated method',
  args:{budgetScenarioApplicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/budget/budgetScenarioApplications/${args.budgetScenarioApplicationId}?`, null, req);
  }
};
export {deleteBudgetScenarioApplicationByIdUpdated};
