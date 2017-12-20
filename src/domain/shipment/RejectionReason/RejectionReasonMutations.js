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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRejectionReason = {
  type: ResopnseType,
  description: 'mutation for ofbiz createRejectionReason method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/rejectionReasons/add?`, null, req);
  }
};
export {createRejectionReason};


const updateRejectionReason = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateRejectionReason method',
  args:{rejectionReasonToBeUpdated: {type: RejectionReasonInputType},rejectionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/rejectionReasons/${args.rejectionId}?`, args.rejectionReasonToBeUpdated, req);
  }
};
export {updateRejectionReason};


const deleteRejectionReasonByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteRejectionReasonByIdUpdated method',
  args:{rejectionReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/rejectionReasons/${args.rejectionReasonId}?`, null, req);
  }
};
export {deleteRejectionReasonByIdUpdated};
