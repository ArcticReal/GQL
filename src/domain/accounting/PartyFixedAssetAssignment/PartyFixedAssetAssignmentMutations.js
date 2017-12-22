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
import {PartyFixedAssetAssignmentInputType} from '../../accounting/PartyFixedAssetAssignment/PartyFixedAssetAssignmentInputType.js';
import {PartyFixedAssetAssignmentResponseType} from '../../accounting/PartyFixedAssetAssignment/PartyFixedAssetAssignmentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyFixedAssetAssignment = {
  type: PartyFixedAssetAssignmentResponseType,
  description: 'mutation for ofbiz createPartyFixedAssetAssignment method',
  args:{partyFixedAssetAssignmentToBeAdded: {type: PartyFixedAssetAssignmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/partyFixedAssetAssignments/add?`, args.partyFixedAssetAssignmentToBeAdded, req);
  }
};
export {createPartyFixedAssetAssignment};


const deletePartyFixedAssetAssignmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyFixedAssetAssignmentByIdUpdated method',
  args:{partyFixedAssetAssignmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/partyFixedAssetAssignments/${args.partyFixedAssetAssignmentId}?`, null, req);
  }
};
export {deletePartyFixedAssetAssignmentByIdUpdated};


const updatePartyFixedAssetAssignment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyFixedAssetAssignment method',
  args:{partyFixedAssetAssignmentToBeUpdated: {type: PartyFixedAssetAssignmentInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/partyFixedAssetAssignments/${args.roleTypeId}?`, args.partyFixedAssetAssignmentToBeUpdated, req);
  }
};
export {updatePartyFixedAssetAssignment};
