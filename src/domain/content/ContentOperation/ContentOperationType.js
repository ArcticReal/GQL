
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

import {ContentPurposeOperationType} from '../../content/ContentPurposeOperation/ContentPurposeOperationType.js';


const ContentOperationType = new GraphQLObjectType({
  name: 'ContentOperationType',
  description: 'Type for ContentOperation in content',

  fields: () => ({
    contentOperationId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentPurposeOperations: {
      type: new GraphQLList(ContentPurposeOperationType),
      args : {},
      resolve: (contentOperation, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentPurposeOperations/find?contentOperationId=${contentOperation.contentOperationId}`)
    }
  })
});

export {ContentOperationType};
    