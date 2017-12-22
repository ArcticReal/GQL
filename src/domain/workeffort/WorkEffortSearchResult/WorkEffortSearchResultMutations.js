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
import {WorkEffortSearchResultResponseType} from '../../workeffort/WorkEffortSearchResult/WorkEffortSearchResultResponseType.js';
import {WorkEffortSearchResultInputType} from '../../workeffort/WorkEffortSearchResult/WorkEffortSearchResultInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortSearchResult = {
  type: WorkEffortSearchResultResponseType,
  description: 'mutation for ofbiz createWorkEffortSearchResult method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortSearchResults/add?`, null, req);
  }
};
export {createWorkEffortSearchResult};


const updateWorkEffortSearchResult = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortSearchResult method',
  args:{workEffortSearchResultToBeUpdated: {type: WorkEffortSearchResultInputType},workEffortSearchResultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortSearchResults/${args.workEffortSearchResultId}?`, args.workEffortSearchResultToBeUpdated, req);
  }
};
export {updateWorkEffortSearchResult};


const deleteWorkEffortSearchResultByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortSearchResultByIdUpdated method',
  args:{workEffortSearchResultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortSearchResults/${args.workEffortSearchResultId}?`, null, req);
  }
};
export {deleteWorkEffortSearchResultByIdUpdated};
