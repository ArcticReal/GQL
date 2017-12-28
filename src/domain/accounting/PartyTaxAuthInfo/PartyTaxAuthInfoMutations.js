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
import {PartyTaxAuthInfoInputType} from '../../accounting/PartyTaxAuthInfo/PartyTaxAuthInfoInputType.js';
import {PartyTaxAuthInfoResponseType} from '../../accounting/PartyTaxAuthInfo/PartyTaxAuthInfoResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyTaxAuthInfo = {
  type: PartyTaxAuthInfoResponseType,
  description: 'mutation for ofbiz createPartyTaxAuthInfo method',
  args:{partyTaxAuthInfoToBeAdded: {type: PartyTaxAuthInfoInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/partyTaxAuthInfos/add?`, args.partyTaxAuthInfoToBeAdded, req);
  }
};
export {createPartyTaxAuthInfo};


const deletePartyTaxAuthInfoByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyTaxAuthInfoByIdUpdated method',
  args:{partyTaxAuthInfoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/partyTaxAuthInfos/${args.partyTaxAuthInfoId}?`, null, req);
  }
};
export {deletePartyTaxAuthInfoByIdUpdated};


const updatePartyTaxAuthInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyTaxAuthInfo method',
  args:{partyTaxAuthInfoToBeUpdated: {type: PartyTaxAuthInfoInputType},taxAuthPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/partyTaxAuthInfos/${args.taxAuthPartyId}?`, args.partyTaxAuthInfoToBeUpdated, req);
  }
};
export {updatePartyTaxAuthInfo};
