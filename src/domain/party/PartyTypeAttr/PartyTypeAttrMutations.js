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
import {PartyTypeAttrInputType} from '../../party/PartyTypeAttr/PartyTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyTypeAttrs/add?`, null, req);
  }
};
export {createPartyTypeAttr};


const updatePartyTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyTypeAttr method',
  args:{partyTypeAttrToBeUpdated: {type: PartyTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyTypeAttrs/${args.attrName}?`, args.partyTypeAttrToBeUpdated, req);
  }
};
export {updatePartyTypeAttr};


const deletePartyTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyTypeAttrByIdUpdated method',
  args:{partyTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyTypeAttrs/${args.partyTypeAttrId}?`, null, req);
  }
};
export {deletePartyTypeAttrByIdUpdated};
