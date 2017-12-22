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
import {RespondingPartyInputType} from '../../order/RespondingParty/RespondingPartyInputType.js';
import {RespondingPartyResponseType} from '../../order/RespondingParty/RespondingPartyResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createRespondingParty = {
  type: RespondingPartyResponseType,
  description: 'mutation for ofbiz createRespondingParty method',
  args:{respondingPartyToBeAdded: {type: RespondingPartyInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/respondingPartys/add?`, args.respondingPartyToBeAdded, req);
  }
};
export {createRespondingParty};


const deleteRespondingPartyByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteRespondingPartyByIdUpdated method',
  args:{respondingPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/respondingPartys/${args.respondingPartyId}?`, null, req);
  }
};
export {deleteRespondingPartyByIdUpdated};


const updateRespondingParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateRespondingParty method',
  args:{respondingPartyToBeUpdated: {type: RespondingPartyInputType},respondingPartySeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/respondingPartys/${args.respondingPartySeqId}?`, args.respondingPartyToBeUpdated, req);
  }
};
export {updateRespondingParty};
