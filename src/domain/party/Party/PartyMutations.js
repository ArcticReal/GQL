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
import {PartyInputType} from '../../party/Party/PartyInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz createParty method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`partys/add?`, null, req);
  }
};
export {createParty};


const updateParty = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateParty method',
  args:{partyToBeUpdated: {type: PartyInputType},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`partys/${args.partyId}?`, args.partyToBeUpdated, req);
  }
};
export {updateParty};


const deletePartyByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyByIdUpdated method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`partys/${args.partyId}?`, null, req);
  }
};
export {deletePartyByIdUpdated};
