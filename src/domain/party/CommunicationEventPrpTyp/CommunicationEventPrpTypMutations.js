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
import {CommunicationEventPrpTypInputType} from '../../party/CommunicationEventPrpTyp/CommunicationEventPrpTypInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommunicationEventPrpTyp = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCommunicationEventPrpTyp method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/communicationEvent/communicationEventPrpTyps/add?`, null, req);
  }
};
export {createCommunicationEventPrpTyp};


const updateCommunicationEventPrpTyp = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCommunicationEventPrpTyp method',
  args:{communicationEventPrpTypToBeUpdated: {type: CommunicationEventPrpTypInputType},communicationEventPrpTypId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/communicationEvent/communicationEventPrpTyps/${args.communicationEventPrpTypId}?`, args.communicationEventPrpTypToBeUpdated, req);
  }
};
export {updateCommunicationEventPrpTyp};


const deleteCommunicationEventPrpTypByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCommunicationEventPrpTypByIdUpdated method',
  args:{communicationEventPrpTypId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/communicationEvent/communicationEventPrpTyps/${args.communicationEventPrpTypId}?`, null, req);
  }
};
export {deleteCommunicationEventPrpTypByIdUpdated};
