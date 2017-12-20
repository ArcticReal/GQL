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
import {WorkEffortGoodStandardTypeInputType} from '../../workeffort/WorkEffortGoodStandardType/WorkEffortGoodStandardTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortGoodStandardType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortGoodStandardType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortGoodStandardTypes/add?`, null, req);
  }
};
export {createWorkEffortGoodStandardType};


const deleteWorkEffortGoodStandardTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortGoodStandardTypeByIdUpdated method',
  args:{workEffortGoodStandardTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortGoodStandardTypes/${args.workEffortGoodStandardTypeId}?`, null, req);
  }
};
export {deleteWorkEffortGoodStandardTypeByIdUpdated};


const updateWorkEffortGoodStandardType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortGoodStandardType method',
  args:{workEffortGoodStandardTypeToBeUpdated: {type: WorkEffortGoodStandardTypeInputType},workEffortGoodStdTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortGoodStandardTypes/${args.workEffortGoodStdTypeId}?`, args.workEffortGoodStandardTypeToBeUpdated, req);
  }
};
export {updateWorkEffortGoodStandardType};
