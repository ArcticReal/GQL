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
import {PartyAttributeInputType} from '../../party/PartyAttribute/PartyAttributeInputType.js';
import {PartyAttributeResponseType} from '../../party/PartyAttribute/PartyAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyAttribute = {
  type: PartyAttributeResponseType,
  description: 'mutation for ofbiz createPartyAttribute method',
  args:{partyAttributeToBeAdded: {type: PartyAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyAttributes/add?`, args.partyAttributeToBeAdded, req);
  }
};
export {createPartyAttribute};


const updatePartyAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyAttribute method',
  args:{partyAttributeToBeUpdated: {type: PartyAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyAttributes/${args.attrName}?`, args.partyAttributeToBeUpdated, req);
  }
};
export {updatePartyAttribute};


const deletePartyAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyAttributeByIdUpdated method',
  args:{partyAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyAttributes/${args.partyAttributeId}?`, null, req);
  }
};
export {deletePartyAttributeByIdUpdated};
