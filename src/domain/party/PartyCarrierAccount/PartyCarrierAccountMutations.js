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
import {PartyCarrierAccountInputType} from '../../party/PartyCarrierAccount/PartyCarrierAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyCarrierAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyCarrierAccount method',
  args:{partyCarrierAccountToBeAdded: {type: PartyCarrierAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyCarrierAccounts/add?`, args.partyCarrierAccountToBeAdded, req);
  }
};
export {createPartyCarrierAccount};


const updatePartyCarrierAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyCarrierAccount method',
  args:{partyCarrierAccountToBeUpdated: {type: PartyCarrierAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyCarrierAccounts/${args.nullVal}?`, args.partyCarrierAccountToBeUpdated, req);
  }
};
export {updatePartyCarrierAccount};


const deletePartyCarrierAccountByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyCarrierAccountByIdUpdated method',
  args:{partyCarrierAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyCarrierAccounts/${args.partyCarrierAccountId}?`, null, req);
  }
};
export {deletePartyCarrierAccountByIdUpdated};
