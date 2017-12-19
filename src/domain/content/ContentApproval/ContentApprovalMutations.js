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
import {ContentApprovalInputType} from '../../content/ContentApproval/ContentApprovalInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createContentApproval = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContentApproval method',
  args:{contentApprovalToBeAdded: {type: ContentApprovalInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentApprovals/add?`, args.contentApprovalToBeAdded, req);
  }
};
export {createContentApproval};


const updateContentApproval = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentApproval method',
  args:{contentApprovalToBeUpdated: {type: ContentApprovalInputType},contentApprovalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentApprovals/${args.contentApprovalId}?`, args.contentApprovalToBeUpdated, req);
  }
};
export {updateContentApproval};


const deleteContentApprovalByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentApprovalByIdUpdated method',
  args:{contentApprovalId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentApprovals/${args.contentApprovalId}?`, null, req);
  }
};
export {deleteContentApprovalByIdUpdated};
