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

const DataResourcePurposeResponseType = new GraphQLObjectType({
  name: 'DataResourcePurposeResponseType',
  description: 'response type for DataResourcePurpose',

  fields: () => ({
    contentPurposeTypeId: {type: GraphQLString},
    dataResourceId: {type: GraphQLString}
  })
});

export {DataResourcePurposeResponseType};
    