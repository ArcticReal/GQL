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

const ContentPurposeOperationResponseType = new GraphQLObjectType({
  name: 'ContentPurposeOperationResponseType',
  description: 'response type for ContentPurposeOperation',

  fields: () => ({
    contentOperationId: {type: GraphQLString},
    contentPurposeTypeId: {type: GraphQLString},
    privilegeEnumId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ContentPurposeOperationResponseType};
    