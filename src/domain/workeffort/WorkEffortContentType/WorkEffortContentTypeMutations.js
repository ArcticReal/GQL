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


const createWorkEffortContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkEffortContentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortContentTypes/add?`, null, req);
  }
};
export {createWorkEffortContentType};


const updateWorkEffortContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortContentType method',
  args:{workEffortContentTypeToBeUpdated: {type: WorkEffortContentTypeInputType},workEffortContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortContentTypes/${args.workEffortContentTypeId}?`, args.workEffortContentTypeToBeUpdated, req);
  }
};
export {updateWorkEffortContentType};


const deleteWorkEffortContentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortContentTypeByIdUpdated method',
  args:{workEffortContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortContentTypes/${args.workEffortContentTypeId}?`, null, req);
  }
};
export {deleteWorkEffortContentTypeByIdUpdated};
