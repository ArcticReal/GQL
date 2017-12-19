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

const ContentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'ContentTypeAttrInputType',
  description: 'input type for ContentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    contentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContentTypeAttrInputType};
    