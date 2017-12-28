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
import {PartyIdentificationTypeInputType} from '../../party/PartyIdentificationType/PartyIdentificationTypeInputType.js';
import {PartyIdentificationTypeResponseType} from '../../party/PartyIdentificationType/PartyIdentificationTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyIdentificationType = {
  type: PartyIdentificationTypeResponseType,
  description: 'mutation for ofbiz createPartyIdentificationType method',
  args:{partyIdentificationTypeToBeAdded: {type: PartyIdentificationTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyIdentificationTypes/add?`, args.partyIdentificationTypeToBeAdded, req);
  }
};
export {createPartyIdentificationType};


const updatePartyIdentificationType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyIdentificationType method',
  args:{partyIdentificationTypeToBeUpdated: {type: PartyIdentificationTypeInputType},partyIdentificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyIdentificationTypes/${args.partyIdentificationTypeId}?`, args.partyIdentificationTypeToBeUpdated, req);
  }
};
export {updatePartyIdentificationType};


const deletePartyIdentificationTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyIdentificationTypeByIdUpdated method',
  args:{partyIdentificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyIdentificationTypes/${args.partyIdentificationTypeId}?`, null, req);
  }
};
export {deletePartyIdentificationTypeByIdUpdated};
