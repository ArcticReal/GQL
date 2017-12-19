
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

import {CustRequestType} from '../../order/CustRequest/CustRequestType.js';
import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';


const CustRequestCommEventType = new GraphQLObjectType({
  name: 'CustRequestCommEventType',
  description: 'Type for CustRequestCommEvent in order',

  fields: () => ({
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestCommEvent, args, {loaders}) => loaders.ofbiz.load(`order/custRequests/find?custRequestId=${custRequestCommEvent.custRequestId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (custRequestCommEvent, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${custRequestCommEvent.communicationEventId}`)
    }
  })
});

export {CustRequestCommEventType};
    