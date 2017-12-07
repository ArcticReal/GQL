
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {DataResourceType} from '../content/DataResourceType.js';


const DataResourceRoleType = new GraphQLObjectType({
  name: 'DataResourceRoleType',
  description: 'Type for DataResourceRole in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (dataResourceRole, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${dataResourceRole.dataResourceId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (dataResourceRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${dataResourceRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {DataResourceRoleType};
    