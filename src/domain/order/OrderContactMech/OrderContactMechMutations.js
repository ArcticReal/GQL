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
import {OrderContactMechResponseType} from '../../order/OrderContactMech/OrderContactMechResponseType.js';
import {OrderContactMechInputType} from '../../order/OrderContactMech/OrderContactMechInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderContactMech = {
  type: OrderContactMechResponseType,
  description: 'mutation for ofbiz createOrderContactMech method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderContactMechs/add?`, null, req);
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
