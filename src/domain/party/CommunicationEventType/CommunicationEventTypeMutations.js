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
import {CommunicationEventTypeInputType} from '../../party/CommunicationEventType/CommunicationEventTypeInputType.js';
import {CommunicationEventTypeResponseType} from '../../party/CommunicationEventType/CommunicationEventTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommunicationEventType = {
  type: CommunicationEventTypeResponseType,
  description: 'mutation for ofbiz createCommunicationEventType method',
  args:{communicationEventTypeToBeAdded: {type: CommunicationEventTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/communicationEvent/communicationEventTypes/add?`, args.communicationEventTypeToBeAdded, req);
  }
};
export {createCommunicationEventType};


const updateCommunicationEventType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEventType method',
  args:{communicationEventTypeToBeUpdated: {type: CommunicationEventTypeInputType},communicationEventTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/communicationEvent/communicationEventTypes/${args.communicationEventTypeId}?`, args.communicationEventTypeToBeUpdated, req);
  }
};
export {updateCommunicationEventType};


const deleteCommunicationEventTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommunicationEventTypeByIdUpdated method',
  args:{communicationEventTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/communicationEvent/communicationEventTypes/${args.communicationEventTypeId}?`, null, req);
  }
};
export {deleteCommunicationEventTypeByIdUpdated};
