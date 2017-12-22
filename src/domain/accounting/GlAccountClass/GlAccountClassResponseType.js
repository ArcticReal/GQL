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

const GlAccountClassResponseType = new GraphQLObjectType({
  name: 'GlAccountClassResponseType',
  description: 'response type for GlAccountClass',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountClassId: {type: GraphQLString},
    isAssetClass: {type: GraphQLBoolean},
    parentClassId: {type: GraphQLString}
  })
});

export {GlAccountClassResponseType};
    