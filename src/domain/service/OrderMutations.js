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
import {ContactDTOInputType} from '../dto/ContactDTOInputType.js';
import {OrderDetailsDTOResponseType} from '../dto/OrderDetailsDTOResponseType.js';
import {OrderHeaderResponseType} from '../order/OrderHeader/OrderHeaderResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const finishOrder = {
  type: OrderDetailsDTOResponseType,
  description: 'mutation for ofbiz finishOrder method',
  args:{contact: {type: ContactDTOInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/finish?`, args.contact, req);
  }
};
export {finishOrder};


const approveOrder = {
  type: OrderHeaderResponseType,
  description: 'mutation for ofbiz approveOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/${args.orderId}/approve?`, null, req);
  }
};
export {approveOrder};


const cancelOrder = {
  type: OrderHeaderResponseType,
  description: 'mutation for ofbiz cancelOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/${args.orderId}/cancel?`, null, req);
  }
};
export {cancelOrder};


const completeOrder = {
  type: OrderHeaderResponseType,
  description: 'mutation for ofbiz completeOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/${args.orderId}/complete?`, null, req);
  }
};
export {completeOrder};


const createOrder = {
  type: OrderHeaderResponseType,
  description: 'mutation for ofbiz createOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/${args.orderId}/create?`, null, req);
  }
};
export {createOrder};


const holdOrder = {
  type: OrderHeaderResponseType,
  description: 'mutation for ofbiz holdOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/${args.orderId}/hold?`, null, req);
  }
};
export {holdOrder};


const rejectOrder = {
  type: OrderHeaderResponseType,
  description: 'mutation for ofbiz rejectOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/${args.orderId}/reject?`, null, req);
  }
};
export {rejectOrder};


const sendOrder = {
  type: OrderHeaderResponseType,
  description: 'mutation for ofbiz sendOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/${args.orderId}/send?`, null, req);
  }
};
export {sendOrder};
