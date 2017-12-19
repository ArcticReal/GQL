
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';


const PartyFixedAssetAssignmentType = new GraphQLObjectType({
  name: 'PartyFixedAssetAssignmentType',
  description: 'Type for PartyFixedAssetAssignment in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    comments: {type: GraphQLString},
    allocatedDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (partyFixedAssetAssignment, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${partyFixedAssetAssignment.fixedAssetId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyFixedAssetAssignment, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${partyFixedAssetAssignment.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PartyFixedAssetAssignmentType};
    