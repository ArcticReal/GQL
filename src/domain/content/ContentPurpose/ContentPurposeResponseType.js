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

const ContentPurposeResponseType = new GraphQLObjectType({
  name: 'ContentPurposeResponseType',
  description: 'response type for ContentPurpose',

  fields: () => ({
    contentId: {type: GraphQLString},
    contentPurposeTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ContentPurposeResponseType};
    