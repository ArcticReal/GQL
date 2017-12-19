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

const ContentPurposeTypeInputType = new GraphQLInputObjectType({
  name: 'ContentPurposeTypeInputType',
  description: 'input type for ContentPurposeType',

  fields: () => ({
    contentPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentPurposeTypeInputType};
    