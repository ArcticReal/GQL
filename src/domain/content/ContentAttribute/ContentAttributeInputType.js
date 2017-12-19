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

const ContentAttributeInputType = new GraphQLInputObjectType({
  name: 'ContentAttributeInputType',
  description: 'input type for ContentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    contentId: {type: GraphQLString}
  })
});

export {ContentAttributeInputType};
    