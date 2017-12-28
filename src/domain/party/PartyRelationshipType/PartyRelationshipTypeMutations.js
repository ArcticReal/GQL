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
import {PartyRelationshipTypeInputType} from '../../party/PartyRelationshipType/PartyRelationshipTypeInputType.js';
import {PartyRelationshipTypeResponseType} from '../../party/PartyRelationshipType/PartyRelationshipTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyRelationshipType = {
  type: PartyRelationshipTypeResponseType,
  description: 'mutation for ofbiz createPartyRelationshipType method',
  args:{partyRelationshipTypeToBeAdded: {type: PartyRelationshipTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyRelationshipTypes/add?`, args.partyRelationshipTypeToBeAdded, req);
  }
};
export {createPartyRelationshipType};


const updatePartyRelationshipType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyRelationshipType method',
  args:{partyRelationshipTypeToBeUpdated: {type: PartyRelationshipTypeInputType},partyRelationshipTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyRelationshipTypes/${args.partyRelationshipTypeId}?`, args.partyRelationshipTypeToBeUpdated, req);
  }
};
export {updatePartyRelationshipType};


const deletePartyRelationshipTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyRelationshipTypeByIdUpdated method',
  args:{partyRelationshipTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyRelationshipTypes/${args.partyRelationshipTypeId}?`, null, req);
  }
};
export {deletePartyRelationshipTypeByIdUpdated};
