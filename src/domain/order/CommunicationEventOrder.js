
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

import {OrderHeaderType} from '../order/OrderHeader.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';


const CommunicationEventOrderType = new GraphQLObjectType({
  name: 'CommunicationEventOrderType',
  description: 'Type for CommunicationEventOrder in order',

  fields: () => ({
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (communicationEventOrder, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${communicationEventOrder.orderId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEventOrder, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${communicationEventOrder.communicationEventId}`)
    }
  })
});

export {CommunicationEventOrderType};
    




const CommunicationEventOrderInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventOrderInputType',
  description: 'input type for CommunicationEventOrder',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {CommunicationEventOrderInputType};
    