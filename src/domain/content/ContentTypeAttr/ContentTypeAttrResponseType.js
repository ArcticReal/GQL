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

const ContentTypeAttrResponseType = new GraphQLObjectType({
  name: 'ContentTypeAttrResponseType',
  description: 'response type for ContentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    contentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentTypeAttrResponseType};
    