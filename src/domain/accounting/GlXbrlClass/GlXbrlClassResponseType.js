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

const GlXbrlClassResponseType = new GraphQLObjectType({
  name: 'GlXbrlClassResponseType',
  description: 'response type for GlXbrlClass',

  fields: () => ({
    description: {type: GraphQLString},
    glXbrlClassId: {type: GraphQLString}
  })
});

export {GlXbrlClassResponseType};
    