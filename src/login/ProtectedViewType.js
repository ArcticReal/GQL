
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SecurityGroup} from '../login/SecurityGroup.js';


const ProtectedView = new GraphQLObjectType({
  name: 'ProtectedViewType',
  description: 'Type for ProtectedView in login',

  fields: () => ({
    viewNameId: {type: GraphQLString},
    maxHitsDuration: {type: GraphQLInt},
    tarpitDuration: {type: GraphQLInt},
    group: {
      type: SecurityGroupType,
      args : {groupId: {type: GraphQLString}},
      resolve: (protectedView, args, {loaders}) => loaders.ofbizArray.load(`securityGroups/find?=${args.groupId}`)
    },
    maxHits: {type: GraphQLInt}
  })
});

export {ProtectedView};
    