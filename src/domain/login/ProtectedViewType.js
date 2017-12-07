
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SecurityGroupType} from '../login/SecurityGroupType.js';


const ProtectedViewType = new GraphQLObjectType({
  name: 'ProtectedViewType',
  description: 'Type for ProtectedView in login',

  fields: () => ({
    viewNameId: {type: GraphQLString},
    maxHitsDuration: {type: GraphQLInt},
    tarpitDuration: {type: GraphQLInt},
    group: {
      type: SecurityGroupType,
      args : {groupId: {type: GraphQLString}},
      resolve: (protectedView, args, {loaders}) => loaders.ofbiz.load(`securityGroups/find?groupId=${protectedView.groupId}`)
    },
    maxHits: {type: GraphQLInt}
  })
});

export {ProtectedViewType};
    