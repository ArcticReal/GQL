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
import {WorkEffortSearchResultInputType} from '../../workeffort/WorkEffortSearchResult/WorkEffortSearchResultInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortSearchResult = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortSearchResult method',
  args:{workEffortSearchResultToBeAdded: {type: WorkEffortSearchResultInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortSearchResults/add?`, args.workEffortSearchResultToBeAdded, req);
  }
};
export {createWorkEffortSearchResult};


const updateWorkEffortSearchResult = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortSearchResult method',
  args:{workEffortSearchResultToBeUpdated: {type: WorkEffortSearchResultInputType},workEffortSearchResultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortSearchResults/${args.workEffortSearchResultId}?`, args.workEffortSearchResultToBeUpdated, req);
  }
};
export {updateWorkEffortSearchResult};


const deleteWorkEffortSearchResultByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortSearchResultByIdUpdated method',
  args:{workEffortSearchResultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortSearchResults/${args.workEffortSearchResultId}?`, null, req);
  }
};
export {deleteWorkEffortSearchResultByIdUpdated};
