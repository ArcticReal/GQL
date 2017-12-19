
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

import {SecurityGroupType} from '../../login/SecurityGroup/SecurityGroupType.js';


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
      resolve: (protectedView, args, {loaders}) => loaders.ofbiz.load(`login/securityGroups/find?groupId=${protectedView.groupId}`)
    },
    maxHits: {type: GraphQLInt}
  })
});

export {ProtectedViewType};
    