
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

import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';


const RoleTypeAttrType = new GraphQLObjectType({
  name: 'RoleTypeAttrType',
  description: 'Type for RoleTypeAttr in party',

  fields: () => ({
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (roleTypeAttr, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${roleTypeAttr.roleTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {RoleTypeAttrType};
    