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
import {PartyTypeInputType} from '../../party/PartyType/PartyTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyTypes/add?`, null, req);
  }
};
export {createPartyType};


const updatePartyType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyType method',
  args:{partyTypeToBeUpdated: {type: PartyTypeInputType},partyTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyTypes/${args.partyTypeId}?`, args.partyTypeToBeUpdated, req);
  }
};
export {updatePartyType};


const deletePartyTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyTypeByIdUpdated method',
  args:{partyTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyTypes/${args.partyTypeId}?`, null, req);
  }
};
export {deletePartyTypeByIdUpdated};
