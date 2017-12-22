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
import {PartyResponseType} from '../../party/Party/PartyResponseType.js';
import {PartyInputType} from '../../party/Party/PartyInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createParty = {
  type: PartyResponseType,
  description: 'mutation for ofbiz createParty method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`partys/add?`, null, req);
  }
};
export {createParty};


const updateParty = {
  type: ResponseType,
  description: 'mutation for ofbiz updateParty method',
  args:{partyToBeUpdated: {type: PartyInputType},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`partys/${args.partyId}?`, args.partyToBeUpdated, req);
  }
};
export {updateParty};


const deletePartyByIdUpdated = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePartyByIdUpdated method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`partys/${args.partyId}?`, null, req);
  }
};
export {deletePartyByIdUpdated};
