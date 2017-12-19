
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

import {ContentOperationType} from '../../content/ContentOperation/ContentOperationType.js';
import {ContentPurposeTypeType} from '../../content/ContentPurposeType/ContentPurposeTypeType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';


const ContentPurposeOperationType = new GraphQLObjectType({
  name: 'ContentPurposeOperationType',
  description: 'Type for ContentPurposeOperation in content',

  fields: () => ({
    contentPurposeType: {
      type: ContentPurposeTypeType,
      args : {contentPurposeTypeId: {type: GraphQLString}},
      resolve: (contentPurposeOperation, args, {loaders}) => loaders.ofbiz.load(`content/content/contentPurposeTypes/find?contentPurposeTypeId=${contentPurposeOperation.contentPurposeTypeId}`)
    },
    privilegeEnumId: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (contentPurposeOperation, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${contentPurposeOperation.roleTypeId}`)
    },
    statusId: {type: GraphQLString},
    contentOperation: {
      type: ContentOperationType,
      args : {contentOperationId: {type: GraphQLString}},
      resolve: (contentPurposeOperation, args, {loaders}) => loaders.ofbiz.load(`content/content/contentOperations/find?contentOperationId=${contentPurposeOperation.contentOperationId}`)
    }
  })
});

export {ContentPurposeOperationType};
    