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
import {WorkEffortGoodStandardInputType} from '../../workeffort/WorkEffortGoodStandard/WorkEffortGoodStandardInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortGoodStandard = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortGoodStandard method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortGoodStandards/add?`, null, req);
  }
};
export {createWorkEffortGoodStandard};


const updateWorkEffortGoodStandard = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortGoodStandard method',
  args:{workEffortGoodStandardToBeUpdated: {type: WorkEffortGoodStandardInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortGoodStandards/${args.nullVal}?`, args.workEffortGoodStandardToBeUpdated, req);
  }
};
export {updateWorkEffortGoodStandard};


const deleteWorkEffortGoodStandardByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortGoodStandardByIdUpdated method',
  args:{workEffortGoodStandardId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortGoodStandards/${args.workEffortGoodStandardId}?`, null, req);
  }
};
export {deleteWorkEffortGoodStandardByIdUpdated};
