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

const ContentAttributeResponseType = new GraphQLObjectType({
  name: 'ContentAttributeResponseType',
  description: 'response type for ContentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    contentId: {type: GraphQLString}
  })
});

export {ContentAttributeResponseType};
    