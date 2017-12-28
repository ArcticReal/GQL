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
import {CommunicationEventWorkEffInputType} from '../../workeffort/CommunicationEventWorkEff/CommunicationEventWorkEffInputType.js';
import {CommunicationEventWorkEffResponseType} from '../../workeffort/CommunicationEventWorkEff/CommunicationEventWorkEffResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCommunicationEventWorkEff = {
  type: CommunicationEventWorkEffResponseType,
  description: 'mutation for ofbiz createCommunicationEventWorkEff method',
  args:{communicationEventWorkEffToBeAdded: {type: CommunicationEventWorkEffInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/communicationEventWorkEffs/add?`, args.communicationEventWorkEffToBeAdded, req);
  }
};
export {createCommunicationEventWorkEff};


const deleteCommunicationEventWorkEffByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteCommunicationEventWorkEffByIdUpdated method',
  args:{communicationEventWorkEffId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/communicationEventWorkEffs/${args.communicationEventWorkEffId}?`, null, req);
  }
};
export {deleteCommunicationEventWorkEffByIdUpdated};


const updateCommunicationEventWorkEff = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCommunicationEventWorkEff method',
  args:{communicationEventWorkEffToBeUpdated: {type: CommunicationEventWorkEffInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/communicationEventWorkEffs/${args.nullVal}?`, args.communicationEventWorkEffToBeUpdated, req);
  }
};
export {updateCommunicationEventWorkEff};
