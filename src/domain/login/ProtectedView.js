
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

import {SecurityGroupType} from '../login/SecurityGroup.js';


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
    




const ProtectedViewInputType = new GraphQLInputObjectType({
  name: 'ProtectedViewInputType',
  description: 'input type for ProtectedView in login',

  fields: () => ({
    viewNameId: {type: GraphQLString},
    maxHitsDuration: {type: GraphQLInt},
    tarpitDuration: {type: GraphQLInt},
    groupId: {type: GraphQLString},
    maxHits: {type: GraphQLInt}
  })
});

export {ProtectedViewInputType};
    