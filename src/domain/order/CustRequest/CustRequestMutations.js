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
import {CustRequestResponseType} from '../../order/CustRequest/CustRequestResponseType.js';
import {CustRequestInputType} from '../../order/CustRequest/CustRequestInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequest = {
  type: CustRequestResponseType,
  description: 'mutation for ofbiz createCustRequest method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequests/add?`, null, req);
  }
};
export {createCustRequest};


const updateCustRequest = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequest method',
  args:{custRequestToBeUpdated: {type: CustRequestInputType},custRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequests/${args.custRequestId}?`, args.custRequestToBeUpdated, req);
  }
};
export {updateCustRequest};


const deleteCustRequestByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestByIdUpdated method',
  args:{custRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequests/${args.custRequestId}?`, null, req);
  }
};
export {deleteCustRequestByIdUpdated};
