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
import {PartyQualResponseType} from '../../humanres/PartyQual/PartyQualResponseType.js';
import {PartyQualInputType} from '../../humanres/PartyQual/PartyQualInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyQual = {
  type: PartyQualResponseType,
  description: 'mutation for ofbiz createPartyQual method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/partyQuals/add?`, null, req);
  }
};
export {createPartyQual};


const updatePartyQual = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyQual method',
  args:{partyQualToBeUpdated: {type: PartyQualInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/partyQuals/${args.nullVal}?`, args.partyQualToBeUpdated, req);
  }
};
export {updatePartyQual};


const deletePartyQualByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyQualByIdUpdated method',
  args:{partyQualId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/partyQuals/${args.partyQualId}?`, null, req);
  }
};
export {deletePartyQualByIdUpdated};
