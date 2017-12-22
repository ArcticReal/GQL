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
import {RequirementCustRequestResponseType} from '../../order/RequirementCustRequest/RequirementCustRequestResponseType.js';
import {RequirementCustRequestInputType} from '../../order/RequirementCustRequest/RequirementCustRequestInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRequirementCustRequest = {
  type: RequirementCustRequestResponseType,
  description: 'mutation for ofbiz createRequirementCustRequest method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/requirementCustRequests/add?`, null, req);
  }
};
export {createRequirementCustRequest};


const updateRequirementCustRequest = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRequirementCustRequest method',
  args:{requirementCustRequestToBeUpdated: {type: RequirementCustRequestInputType},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/requirementCustRequests/${args.custRequestItemSeqId}?`, args.requirementCustRequestToBeUpdated, req);
  }
};
export {updateRequirementCustRequest};


const deleteRequirementCustRequestByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRequirementCustRequestByIdUpdated method',
  args:{requirementCustRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/requirementCustRequests/${args.requirementCustRequestId}?`, null, req);
  }
};
export {deleteRequirementCustRequestByIdUpdated};
