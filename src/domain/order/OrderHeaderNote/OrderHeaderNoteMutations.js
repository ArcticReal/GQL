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
import {OrderHeaderNoteResponseType} from '../../order/OrderHeaderNote/OrderHeaderNoteResponseType.js';
import {OrderHeaderNoteInputType} from '../../order/OrderHeaderNote/OrderHeaderNoteInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderHeaderNote = {
  type: OrderHeaderNoteResponseType,
  description: 'mutation for ofbiz createOrderHeaderNote method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderHeader/orderHeaderNotes/add?`, null, req);
  }
};
export {createOrderHeaderNote};


const updateOrderHeaderNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderHeaderNote method',
  args:{orderHeaderNoteToBeUpdated: {type: OrderHeaderNoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderHeader/orderHeaderNotes/${args.nullVal}?`, args.orderHeaderNoteToBeUpdated, req);
  }
};
export {updateOrderHeaderNote};


const deleteOrderHeaderNoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderHeaderNoteByIdUpdated method',
  args:{orderHeaderNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderHeader/orderHeaderNotes/${args.orderHeaderNoteId}?`, null, req);
  }
};
export {deleteOrderHeaderNoteByIdUpdated};
