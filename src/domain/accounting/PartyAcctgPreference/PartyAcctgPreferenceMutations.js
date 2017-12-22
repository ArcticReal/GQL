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
import {PartyAcctgPreferenceResponseType} from '../../accounting/PartyAcctgPreference/PartyAcctgPreferenceResponseType.js';
import {PartyAcctgPreferenceInputType} from '../../accounting/PartyAcctgPreference/PartyAcctgPreferenceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyAcctgPreference = {
  type: PartyAcctgPreferenceResponseType,
  description: 'mutation for ofbiz createPartyAcctgPreference method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/partyAcctgPreferences/add?`, null, req);
  }
};
export {createPartyAcctgPreference};


const updatePartyAcctgPreference = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyAcctgPreference method',
  args:{partyAcctgPreferenceToBeUpdated: {type: PartyAcctgPreferenceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/partyAcctgPreferences/${args.nullVal}?`, args.partyAcctgPreferenceToBeUpdated, req);
  }
};
export {updatePartyAcctgPreference};


const deletePartyAcctgPreferenceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyAcctgPreferenceByIdUpdated method',
  args:{partyAcctgPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/partyAcctgPreferences/${args.partyAcctgPreferenceId}?`, null, req);
  }
};
export {deletePartyAcctgPreferenceByIdUpdated};
