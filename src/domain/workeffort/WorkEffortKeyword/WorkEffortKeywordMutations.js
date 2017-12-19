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
import {WorkEffortKeywordInputType} from '../../workeffort/WorkEffortKeyword/WorkEffortKeywordInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWorkEffortKeyword = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkEffortKeyword method',
  args:{workEffortKeywordToBeAdded: {type: WorkEffortKeywordInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortKeywords/add?`, args.workEffortKeywordToBeAdded, req);
  }
};
export {createWorkEffortKeyword};


const updateWorkEffortKeyword = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortKeyword method',
  args:{workEffortKeywordToBeUpdated: {type: WorkEffortKeywordInputType},keyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortKeywords/${args.keyword}?`, args.workEffortKeywordToBeUpdated, req);
  }
};
export {updateWorkEffortKeyword};


const deleteWorkEffortKeywordByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortKeywordByIdUpdated method',
  args:{workEffortKeywordId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortKeywords/${args.workEffortKeywordId}?`, null, req);
  }
};
export {deleteWorkEffortKeywordByIdUpdated};
