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

const GlResourceTypeResponseType = new GraphQLObjectType({
  name: 'GlResourceTypeResponseType',
  description: 'response type for GlResourceType',

  fields: () => ({
    description: {type: GraphQLString},
    glResourceTypeId: {type: GraphQLString}
  })
});

export {GlResourceTypeResponseType};
    