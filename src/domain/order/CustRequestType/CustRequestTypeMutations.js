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
import {CustRequestTypeResponseType} from '../../order/CustRequestType/CustRequestTypeResponseType.js';
import {CustRequestTypeInputType} from '../../order/CustRequestType/CustRequestTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestType = {
  type: CustRequestTypeResponseType,
  description: 'mutation for ofbiz createCustRequestType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestTypes/add?`, null, req);
  }
};
export {createCustRequestType};


const updateCustRequestType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestType method',
  args:{custRequestTypeToBeUpdated: {type: CustRequestTypeInputType},custRequestTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestTypes/${args.custRequestTypeId}?`, args.custRequestTypeToBeUpdated, req);
  }
};
export {updateCustRequestType};


const deleteCustRequestTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestTypeByIdUpdated method',
  args:{custRequestTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestTypes/${args.custRequestTypeId}?`, null, req);
  }
};
export {deleteCustRequestTypeByIdUpdated};
