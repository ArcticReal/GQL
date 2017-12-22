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
import {PartyIdentificationInputType} from '../../party/PartyIdentification/PartyIdentificationInputType.js';
import {PartyIdentificationResponseType} from '../../party/PartyIdentification/PartyIdentificationResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyIdentification = {
  type: PartyIdentificationResponseType,
  description: 'mutation for ofbiz createPartyIdentification method',
  args:{partyIdentificationToBeAdded: {type: PartyIdentificationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyIdentifications/add?`, args.partyIdentificationToBeAdded, req);
  }
};
export {createPartyIdentification};


const updatePartyIdentification = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyIdentification method',
  args:{partyIdentificationToBeUpdated: {type: PartyIdentificationInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyIdentifications/${args.nullVal}?`, args.partyIdentificationToBeUpdated, req);
  }
};
export {updatePartyIdentification};


const deletePartyIdentificationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyIdentificationByIdUpdated method',
  args:{partyIdentificationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyIdentifications/${args.partyIdentificationId}?`, null, req);
  }
};
export {deletePartyIdentificationByIdUpdated};
