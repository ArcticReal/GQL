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
import {PartyGroupInputType} from '../../party/PartyGroup/PartyGroupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyGroups/add?`, null, req);
  }
};
export {createPartyGroup};


const updatePartyGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyGroup method',
  args:{partyGroupToBeUpdated: {type: PartyGroupInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyGroups/${args.nullVal}?`, args.partyGroupToBeUpdated, req);
  }
};
export {updatePartyGroup};


const deletePartyGroupByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyGroupByIdUpdated method',
  args:{partyGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyGroups/${args.partyGroupId}?`, null, req);
  }
};
export {deletePartyGroupByIdUpdated};
