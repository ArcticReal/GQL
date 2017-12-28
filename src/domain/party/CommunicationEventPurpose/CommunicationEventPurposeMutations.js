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
import {CommunicationEventPurposeInputType} from '../../party/CommunicationEventPurpose/CommunicationEventPurposeInputType.js';
import {CommunicationEventPurposeResponseType} from '../../party/CommunicationEventPurpose/CommunicationEventPurposeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommunicationEventPurpose = {
  type: CommunicationEventPurposeResponseType,
  description: 'mutation for ofbiz createCommunicationEventPurpose method',
  args:{communicationEventPurposeToBeAdded: {type: CommunicationEventPurposeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/communicationEvent/communicationEventPurposes/add?`, args.communicationEventPurposeToBeAdded, req);
  }
};
export {createCommunicationEventPurpose};


const deleteCommunicationEventPurposeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommunicationEventPurposeByIdUpdated method',
  args:{communicationEventPurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/communicationEvent/communicationEventPurposes/${args.communicationEventPurposeId}?`, null, req);
  }
};
export {deleteCommunicationEventPurposeByIdUpdated};


const updateCommunicationEventPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEventPurpose method',
  args:{communicationEventPurposeToBeUpdated: {type: CommunicationEventPurposeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/communicationEvent/communicationEventPurposes/${args.nullVal}?`, args.communicationEventPurposeToBeUpdated, req);
  }
};
export {updateCommunicationEventPurpose};
