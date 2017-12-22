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

const ContentPurposeTypeResponseType = new GraphQLObjectType({
  name: 'ContentPurposeTypeResponseType',
  description: 'response type for ContentPurposeType',

  fields: () => ({
    contentPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentPurposeTypeResponseType};
    