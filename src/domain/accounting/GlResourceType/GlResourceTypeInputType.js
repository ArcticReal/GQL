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

const GlResourceTypeInputType = new GraphQLInputObjectType({
  name: 'GlResourceTypeInputType',
  description: 'input type for GlResourceType',

  fields: () => ({
    description: {type: GraphQLString},
    glResourceTypeId: {type: GraphQLString}
  })
});

export {GlResourceTypeInputType};
    