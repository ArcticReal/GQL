
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentPurposeOperationType} from '../content/ContentPurposeOperationType.js';


const ContentOperationType = new GraphQLObjectType({
  name: 'ContentOperationType',
  description: 'Type for ContentOperation in content',

  fields: () => ({
    contentOperationId: {type: GraphQLString},
    description: {type: GraphQLString},
    contentPurposeOperation: {
      type: new GraphQLList(ContentPurposeOperationType),
      args : {contentOperationId: {type: GraphQLString}},
      resolve: (contentOperation, args, {loaders}) => loaders.ofbizArray.load(`contentPurposeOperations/find?contentOperationId=${contentOperation.contentOperationId}`)
    }
  })
});

export {ContentOperationType};
    