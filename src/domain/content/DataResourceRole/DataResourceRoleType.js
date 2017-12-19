
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
import {DataResourceType} from '../../content/DataResource/DataResourceType.js';


const DataResourceRoleType = new GraphQLObjectType({
  name: 'DataResourceRoleType',
  description: 'Type for DataResourceRole in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResourceRole, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${dataResourceRole.dataResourceId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (dataResourceRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${dataResourceRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {DataResourceRoleType};
    