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
import {WorkEffortCostCalcInputType} from '../../workeffort/WorkEffortCostCalc/WorkEffortCostCalcInputType.js';
import {WorkEffortCostCalcResponseType} from '../../workeffort/WorkEffortCostCalc/WorkEffortCostCalcResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortCostCalc = {
  type: WorkEffortCostCalcResponseType,
  description: 'mutation for ofbiz createWorkEffortCostCalc method',
  args:{workEffortCostCalcToBeAdded: {type: WorkEffortCostCalcInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortCostCalcs/add?`, args.workEffortCostCalcToBeAdded, req);
  }
};
export {createWorkEffortCostCalc};


const updateWorkEffortCostCalc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortCostCalc method',
  args:{workEffortCostCalcToBeUpdated: {type: WorkEffortCostCalcInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortCostCalcs/${args.nullVal}?`, args.workEffortCostCalcToBeUpdated, req);
  }
};
export {updateWorkEffortCostCalc};


const deleteWorkEffortCostCalcByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortCostCalcByIdUpdated method',
  args:{workEffortCostCalcId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortCostCalcs/${args.workEffortCostCalcId}?`, null, req);
  }
};
export {deleteWorkEffortCostCalcByIdUpdated};
