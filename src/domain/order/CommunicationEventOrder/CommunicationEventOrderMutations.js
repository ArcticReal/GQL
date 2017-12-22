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
import {CommunicationEventOrderResponseType} from '../../order/CommunicationEventOrder/CommunicationEventOrderResponseType.js';
import {CommunicationEventOrderInputType} from '../../order/CommunicationEventOrder/CommunicationEventOrderInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommunicationEventOrder = {
  type: CommunicationEventOrderResponseType,
  description: 'mutation for ofbiz createCommunicationEventOrder method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/communicationEventOrders/add?`, null, req);
  }
};
export {createCommunicationEventOrder};


const deleteCommunicationEventOrderByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommunicationEventOrderByIdUpdated method',
  args:{communicationEventOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/communicationEventOrders/${args.communicationEventOrderId}?`, null, req);
  }
};
export {deleteCommunicationEventOrderByIdUpdated};


const updateCommunicationEventOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEventOrder method',
  args:{communicationEventOrderToBeUpdated: {type: CommunicationEventOrderInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/communicationEventOrders/${args.nullVal}?`, args.communicationEventOrderToBeUpdated, req);
  }
};
export {updateCommunicationEventOrder};
