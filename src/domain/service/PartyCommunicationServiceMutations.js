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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createCommunicationEventType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCommunicationEventType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},contactMechTypeId: {type: GraphQLString},communicationEventTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyCommunication/createCommunicationEventType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}contactMechTypeId=${args.contactMechTypeId}communicationEventTypeId=${args.communicationEventTypeId}`, null, req);
  }
};
export {createCommunicationEventType};


const deleteCommunicationEventType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCommunicationEventType method',
  args:{communicationEventTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyCommunication/deleteCommunicationEventType?communicationEventTypeId=${args.communicationEventTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}contactMechTypeId=${args.contactMechTypeId}`, null, req);
  }
};
export {deleteCommunicationEventType};


const updateCommunicationEventType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCommunicationEventType method',
  args:{communicationEventTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyCommunication/updateCommunicationEventType?communicationEventTypeId=${args.communicationEventTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}contactMechTypeId=${args.contactMechTypeId}`, null, req);
  }
};
export {updateCommunicationEventType};
