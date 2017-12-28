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
import {CustRequestStatusInputType} from '../../order/CustRequestStatus/CustRequestStatusInputType.js';
import {CustRequestStatusResponseType} from '../../order/CustRequestStatus/CustRequestStatusResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestStatus = {
  type: CustRequestStatusResponseType,
  description: 'mutation for ofbiz createCustRequestStatus method',
  args:{custRequestStatusToBeAdded: {type: CustRequestStatusInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestStatuss/add?`, args.custRequestStatusToBeAdded, req);
  }
};
export {createCustRequestStatus};


const updateCustRequestStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestStatus method',
  args:{custRequestStatusToBeUpdated: {type: CustRequestStatusInputType},custRequestStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestStatuss/${args.custRequestStatusId}?`, args.custRequestStatusToBeUpdated, req);
  }
};
export {updateCustRequestStatus};


const deleteCustRequestStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestStatusByIdUpdated method',
  args:{custRequestStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestStatuss/${args.custRequestStatusId}?`, null, req);
  }
};
export {deleteCustRequestStatusByIdUpdated};
