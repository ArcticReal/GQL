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

const GlXbrlClassInputType = new GraphQLInputObjectType({
  name: 'GlXbrlClassInputType',
  description: 'input type for GlXbrlClass',

  fields: () => ({
    description: {type: GraphQLString},
    glXbrlClassId: {type: GraphQLString}
  })
});

export {GlXbrlClassInputType};
    