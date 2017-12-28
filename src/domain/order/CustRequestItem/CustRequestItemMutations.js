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
import {CustRequestItemInputType} from '../../order/CustRequestItem/CustRequestItemInputType.js';
import {CustRequestItemResponseType} from '../../order/CustRequestItem/CustRequestItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestItem = {
  type: CustRequestItemResponseType,
  description: 'mutation for ofbiz createCustRequestItem method',
  args:{custRequestItemToBeAdded: {type: CustRequestItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestItems/add?`, args.custRequestItemToBeAdded, req);
  }
};
export {createCustRequestItem};


const deleteCustRequestItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCustRequestItemByIdUpdated method',
  args:{custRequestItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestItems/${args.custRequestItemId}?`, null, req);
  }
};
export {deleteCustRequestItemByIdUpdated};


const updateCustRequestItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCustRequestItem method',
  args:{custRequestItemToBeUpdated: {type: CustRequestItemInputType},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestItems/${args.custRequestItemSeqId}?`, args.custRequestItemToBeUpdated, req);
  }
};
export {updateCustRequestItem};
