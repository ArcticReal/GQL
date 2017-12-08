
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

import {CustRequestType} from '../order/CustRequest.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';


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
    




const CustRequestCommEventInputType = new GraphQLInputObjectType({
  name: 'CustRequestCommEventInputType',
  description: 'input type for CustRequestCommEvent in order',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString}
  })
});

export {CustRequestCommEventInputType};
    