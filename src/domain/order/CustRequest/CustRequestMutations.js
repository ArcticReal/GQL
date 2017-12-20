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
import {CustRequestInputType} from '../../order/CustRequest/CustRequestInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequest = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCustRequest method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequests/add?`, null, req);
  }
};
export {createCustRequest};


const updateCustRequest = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCustRequest method',
  args:{custRequestToBeUpdated: {type: CustRequestInputType},custRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequests/${args.custRequestId}?`, args.custRequestToBeUpdated, req);
  }
};
export {updateCustRequest};


const deleteCustRequestByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCustRequestByIdUpdated method',
  args:{custRequestId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequests/${args.custRequestId}?`, null, req);
  }
};
export {deleteCustRequestByIdUpdated};
