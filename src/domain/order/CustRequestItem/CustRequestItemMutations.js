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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCustRequestItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCustRequestItem method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/custRequest/custRequestItems/add?`, null, req);
  }
};
export {createCustRequestItem};


const deleteCustRequestItemByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCustRequestItemByIdUpdated method',
  args:{custRequestItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/custRequest/custRequestItems/${args.custRequestItemId}?`, null, req);
  }
};
export {deleteCustRequestItemByIdUpdated};


const updateCustRequestItem = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCustRequestItem method',
  args:{custRequestItemToBeUpdated: {type: CustRequestItemInputType},custRequestItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/custRequest/custRequestItems/${args.custRequestItemSeqId}?`, args.custRequestItemToBeUpdated, req);
  }
};
export {updateCustRequestItem};
