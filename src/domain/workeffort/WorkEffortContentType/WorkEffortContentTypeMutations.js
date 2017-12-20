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
import {WorkEffortContentTypeInputType} from '../../workeffort/WorkEffortContentType/WorkEffortContentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortContentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortContentTypes/add?`, null, req);
  }
};
export {createWorkEffortContentType};


const updateWorkEffortContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortContentType method',
  args:{workEffortContentTypeToBeUpdated: {type: WorkEffortContentTypeInputType},workEffortContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortContentTypes/${args.workEffortContentTypeId}?`, args.workEffortContentTypeToBeUpdated, req);
  }
};
export {updateWorkEffortContentType};


const deleteWorkEffortContentTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortContentTypeByIdUpdated method',
  args:{workEffortContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortContentTypes/${args.workEffortContentTypeId}?`, null, req);
  }
};
export {deleteWorkEffortContentTypeByIdUpdated};
