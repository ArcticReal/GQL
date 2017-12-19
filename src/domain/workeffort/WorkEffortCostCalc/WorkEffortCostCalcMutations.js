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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWorkEffortCostCalc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkEffortCostCalc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortCostCalcs/add?`, null, req);
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
