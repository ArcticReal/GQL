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

const ContentPurposeInputType = new GraphQLInputObjectType({
  name: 'ContentPurposeInputType',
  description: 'input type for ContentPurpose',

  fields: () => ({
    contentId: {type: GraphQLString},
    contentPurposeTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ContentPurposeInputType};
    