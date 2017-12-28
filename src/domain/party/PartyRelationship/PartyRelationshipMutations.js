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
import {PartyRelationshipInputType} from '../../party/PartyRelationship/PartyRelationshipInputType.js';
import {PartyRelationshipResponseType} from '../../party/PartyRelationship/PartyRelationshipResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyRelationship = {
  type: PartyRelationshipResponseType,
  description: 'mutation for ofbiz createPartyRelationship method',
  args:{partyRelationshipToBeAdded: {type: PartyRelationshipInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyRelationships/add?`, args.partyRelationshipToBeAdded, req);
  }
};
export {createPartyRelationship};


const updatePartyRelationship = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyRelationship method',
  args:{partyRelationshipToBeUpdated: {type: PartyRelationshipInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyRelationships/${args.nullVal}?`, args.partyRelationshipToBeUpdated, req);
  }
};
export {updatePartyRelationship};


const deletePartyRelationshipByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyRelationshipByIdUpdated method',
  args:{partyRelationshipId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyRelationships/${args.partyRelationshipId}?`, null, req);
  }
};
export {deletePartyRelationshipByIdUpdated};
