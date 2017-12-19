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
    