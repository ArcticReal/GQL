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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyIdentification = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyIdentification method',
  args:{partyIdentificationToBeAdded: {type: PartyIdentificationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyIdentifications/add?`, args.partyIdentificationToBeAdded, req);
  }
};
export {createPartyIdentification};


const updatePartyIdentification = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyIdentification method',
  args:{partyIdentificationToBeUpdated: {type: PartyIdentificationInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyIdentifications/${args.nullVal}?`, args.partyIdentificationToBeUpdated, req);
  }
};
export {updatePartyIdentification};


const deletePartyIdentificationByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyIdentificationByIdUpdated method',
  args:{partyIdentificationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyIdentifications/${args.partyIdentificationId}?`, null, req);
  }
};
export {deletePartyIdentificationByIdUpdated};
