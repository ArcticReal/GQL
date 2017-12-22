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
import {CommunicationEventResponseType} from '../../party/CommunicationEvent/CommunicationEventResponseType.js';
import {CommunicationEventInputType} from '../../party/CommunicationEvent/CommunicationEventInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommunicationEvent = {
  type: CommunicationEventResponseType,
  description: 'mutation for ofbiz createCommunicationEvent method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/communicationEvents/add?`, null, req);
  }
};
export {createCommunicationEvent};


const updateCommunicationEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEvent method',
  args:{communicationEventToBeUpdated: {type: CommunicationEventInputType},communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/communicationEvents/${args.communicationEventId}?`, args.communicationEventToBeUpdated, req);
  }
};
export {updateCommunicationEvent};


const deleteCommunicationEventByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommunicationEventByIdUpdated method',
  args:{communicationEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/communicationEvents/${args.communicationEventId}?`, null, req);
  }
};
export {deleteCommunicationEventByIdUpdated};
