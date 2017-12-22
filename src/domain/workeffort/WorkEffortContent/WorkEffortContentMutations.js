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
import {WorkEffortContentInputType} from '../../workeffort/WorkEffortContent/WorkEffortContentInputType.js';
import {WorkEffortContentResponseType} from '../../workeffort/WorkEffortContent/WorkEffortContentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortContent = {
  type: WorkEffortContentResponseType,
  description: 'mutation for ofbiz createWorkEffortContent method',
  args:{workEffortContentToBeAdded: {type: WorkEffortContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortContents/add?`, args.workEffortContentToBeAdded, req);
  }
};
export {createWorkEffortContent};


const updateWorkEffortContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortContent method',
  args:{workEffortContentToBeUpdated: {type: WorkEffortContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortContents/${args.nullVal}?`, args.workEffortContentToBeUpdated, req);
  }
};
export {updateWorkEffortContent};


const deleteWorkEffortContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortContentByIdUpdated method',
  args:{workEffortContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortContents/${args.workEffortContentId}?`, null, req);
  }
};
export {deleteWorkEffortContentByIdUpdated};
