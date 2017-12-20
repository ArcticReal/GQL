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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderContactMech = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderContactMech method',
  args:{orderContactMechToBeAdded: {type: OrderContactMechInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderContactMechs/add?`, args.orderContactMechToBeAdded, req);
  }
};
export {createOrderContactMech};


const updateOrderContactMech = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderContactMech method',
  args:{orderContactMechToBeUpdated: {type: OrderContactMechInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderContactMechs/${args.nullVal}?`, args.orderContactMechToBeUpdated, req);
  }
};
export {updateOrderContactMech};


const deleteOrderContactMechByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderContactMechByIdUpdated method',
  args:{orderContactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderContactMechs/${args.orderContactMechId}?`, null, req);
  }
};
export {deleteOrderContactMechByIdUpdated};
