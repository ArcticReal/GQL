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
import {RejectionReasonInputType} from '../../shipment/RejectionReason/RejectionReasonInputType.js';
import {RejectionReasonResponseType} from '../../shipment/RejectionReason/RejectionReasonResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRejectionReason = {
  type: RejectionReasonResponseType,
  description: 'mutation for ofbiz createRejectionReason method',
  args:{rejectionReasonToBeAdded: {type: RejectionReasonInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/rejectionReasons/add?`, args.rejectionReasonToBeAdded, req);
  }
};
export {createRejectionReason};


const updateRejectionReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRejectionReason method',
  args:{rejectionReasonToBeUpdated: {type: RejectionReasonInputType},rejectionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/rejectionReasons/${args.rejectionId}?`, args.rejectionReasonToBeUpdated, req);
  }
};
export {updateRejectionReason};


const deleteRejectionReasonByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRejectionReasonByIdUpdated method',
  args:{rejectionReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/rejectionReasons/${args.rejectionReasonId}?`, null, req);
  }
};
export {deleteRejectionReasonByIdUpdated};
