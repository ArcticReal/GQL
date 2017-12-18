
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

import {ContentOperationType} from '../content/ContentOperation.js';
import {ContentPurposeTypeType} from '../content/ContentPurposeType.js';
import {RoleTypeType} from '../party/RoleType.js';


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
    




const ContentPurposeOperationInputType = new GraphQLInputObjectType({
  name: 'ContentPurposeOperationInputType',
  description: 'input type for ContentPurposeOperation',

  fields: () => ({
    contentOperationId: {type: GraphQLString},
    contentPurposeTypeId: {type: GraphQLString},
    privilegeEnumId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ContentPurposeOperationInputType};
    