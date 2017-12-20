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
import {PartyQualTypeInputType} from '../../humanres/PartyQualType/PartyQualTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyQualType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyQualType method',
  args:{partyQualTypeToBeAdded: {type: PartyQualTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/partyQual/partyQualTypes/add?`, args.partyQualTypeToBeAdded, req);
  }
};
export {createPartyQualType};


const updatePartyQualType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyQualType method',
  args:{partyQualTypeToBeUpdated: {type: PartyQualTypeInputType},partyQualTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/partyQual/partyQualTypes/${args.partyQualTypeId}?`, args.partyQualTypeToBeUpdated, req);
  }
};
export {updatePartyQualType};


const deletePartyQualTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyQualTypeByIdUpdated method',
  args:{partyQualTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/partyQual/partyQualTypes/${args.partyQualTypeId}?`, null, req);
  }
};
export {deletePartyQualTypeByIdUpdated};
