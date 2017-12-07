
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestType} from '../order/CustRequestType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';


const CustRequestCommEventType = new GraphQLObjectType({
  name: 'CustRequestCommEventType',
  description: 'Type for CustRequestCommEvent in order',

  fields: () => ({
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestCommEvent, args, {loaders}) => loaders.ofbiz.load(`custRequests/find?custRequestId=${custRequestCommEvent.custRequestId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (custRequestCommEvent, args, {loaders}) => loaders.ofbiz.load(`communicationEvents/find?communicationEventId=${custRequestCommEvent.communicationEventId}`)
    }
  })
});

export {CustRequestCommEventType};
    