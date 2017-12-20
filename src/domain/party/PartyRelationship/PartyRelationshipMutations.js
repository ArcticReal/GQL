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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyRelationship = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyRelationship method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyRelationships/add?`, null, req);
  }
};
export {createPartyRelationship};


const updatePartyRelationship = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyRelationship method',
  args:{partyRelationshipToBeUpdated: {type: PartyRelationshipInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyRelationships/${args.nullVal}?`, args.partyRelationshipToBeUpdated, req);
  }
};
export {updatePartyRelationship};


const deletePartyRelationshipByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyRelationshipByIdUpdated method',
  args:{partyRelationshipId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyRelationships/${args.partyRelationshipId}?`, null, req);
  }
};
export {deletePartyRelationshipByIdUpdated};
