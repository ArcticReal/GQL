
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
    




const CommunicationEventOrderInputType = new GraphQLInputObjectType({
  name: 'CommunicationEventOrderInputType',
  description: 'input type for CommunicationEventOrder in order',

  fields: () => ({
    orderId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString}
  })
});

export {CommunicationEventOrderInputType};
    