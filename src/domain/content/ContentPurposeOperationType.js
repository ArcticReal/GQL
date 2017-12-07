
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentOperationType} from '../content/ContentOperationType.js';
import {ContentPurposeTypeType} from '../content/ContentPurposeTypeType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';


const ContentPurposeOperationType = new GraphQLObjectType({
  name: 'ContentPurposeOperationType',
  description: 'Type for ContentPurposeOperation in content',

  fields: () => ({
    contentPurposeType: {
      type: ContentPurposeTypeType,
      args : {contentPurposeTypeId: {type: GraphQLString}},
      resolve: (contentPurposeOperation, args, {loaders}) => loaders.ofbiz.load(`contentPurposeTypes/find?contentPurposeTypeId=${contentPurposeOperation.contentPurposeTypeId}`)
    },
    privilegeEnumId: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (contentPurposeOperation, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${contentPurposeOperation.roleTypeId}`)
    },
    statusId: {type: GraphQLString},
    contentOperation: {
      type: ContentOperationType,
      args : {contentOperationId: {type: GraphQLString}},
      resolve: (contentPurposeOperation, args, {loaders}) => loaders.ofbiz.load(`contentOperations/find?contentOperationId=${contentPurposeOperation.contentOperationId}`)
    }
  })
});

export {ContentPurposeOperationType};
    