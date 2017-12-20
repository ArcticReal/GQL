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
import {WorkEffortPurposeTypeInputType} from '../../workeffort/WorkEffortPurposeType/WorkEffortPurposeTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortPurposeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortPurposeType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortPurposeTypes/add?`, null, req);
  }
};
export {createWorkEffortPurposeType};


const updateWorkEffortPurposeType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortPurposeType method',
  args:{workEffortPurposeTypeToBeUpdated: {type: WorkEffortPurposeTypeInputType},workEffortPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortPurposeTypes/${args.workEffortPurposeTypeId}?`, args.workEffortPurposeTypeToBeUpdated, req);
  }
};
export {updateWorkEffortPurposeType};


const deleteWorkEffortPurposeTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortPurposeTypeByIdUpdated method',
  args:{workEffortPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortPurposeTypes/${args.workEffortPurposeTypeId}?`, null, req);
  }
};
export {deleteWorkEffortPurposeTypeByIdUpdated};
