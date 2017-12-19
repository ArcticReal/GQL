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
import {PartyProfileDefaultInputType} from '../../party/PartyProfileDefault/PartyProfileDefaultInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPartyProfileDefault = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyProfileDefault method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyProfileDefaults/add?`, null, req);
  }
};
export {createPartyProfileDefault};


const updatePartyProfileDefault = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyProfileDefault method',
  args:{partyProfileDefaultToBeUpdated: {type: PartyProfileDefaultInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyProfileDefaults/${args.nullVal}?`, args.partyProfileDefaultToBeUpdated, req);
  }
};
export {updatePartyProfileDefault};


const deletePartyProfileDefaultByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyProfileDefaultByIdUpdated method',
  args:{partyProfileDefaultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyProfileDefaults/${args.partyProfileDefaultId}?`, null, req);
  }
};
export {deletePartyProfileDefaultByIdUpdated};
