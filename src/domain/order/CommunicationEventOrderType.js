
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';


const CommunicationEventOrderType = new GraphQLObjectType({
  name: 'CommunicationEventOrderType',
  description: 'Type for CommunicationEventOrder in order',

  fields: () => ({
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (communicationEventOrder, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${communicationEventOrder.orderId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEventOrder, args, {loaders}) => loaders.ofbiz.load(`communicationEvents/find?communicationEventId=${communicationEventOrder.communicationEventId}`)
    }
  })
});

export {CommunicationEventOrderType};
    