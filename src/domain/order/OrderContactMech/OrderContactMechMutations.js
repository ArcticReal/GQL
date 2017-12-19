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
import {OrderContactMechInputType} from '../../order/OrderContactMech/OrderContactMechInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderContactMech method',
  args:{orderContactMechToBeAdded: {type: OrderContactMechInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderContactMechs/add?`, args.orderContactMechToBeAdded, req);
  }
};
export {createOrderContactMech};


const updateOrderContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderContactMech method',
  args:{orderContactMechToBeUpdated: {type: OrderContactMechInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderContactMechs/${args.nullVal}?`, args.orderContactMechToBeUpdated, req);
  }
};
export {updateOrderContactMech};


const deleteOrderContactMechByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderContactMechByIdUpdated method',
  args:{orderContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderContactMechs/${args.orderContactMechId}?`, null, req);
  }
};
export {deleteOrderContactMechByIdUpdated};
