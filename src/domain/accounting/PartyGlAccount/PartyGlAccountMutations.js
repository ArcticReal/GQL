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
import {PartyGlAccountResponseType} from '../../accounting/PartyGlAccount/PartyGlAccountResponseType.js';
import {PartyGlAccountInputType} from '../../accounting/PartyGlAccount/PartyGlAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyGlAccount = {
  type: PartyGlAccountResponseType,
  description: 'mutation for ofbiz createPartyGlAccount method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/partyGlAccounts/add?`, null, req);
  }
};
export {createPartyGlAccount};


const deletePartyGlAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyGlAccountByIdUpdated method',
  args:{partyGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/partyGlAccounts/${args.partyGlAccountId}?`, null, req);
  }
};
export {deletePartyGlAccountByIdUpdated};


const updatePartyGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyGlAccount method',
  args:{partyGlAccountToBeUpdated: {type: PartyGlAccountInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/partyGlAccounts/${args.roleTypeId}?`, args.partyGlAccountToBeUpdated, req);
  }
};
export {updatePartyGlAccount};
