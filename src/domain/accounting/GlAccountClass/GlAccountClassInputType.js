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

const GlAccountClassInputType = new GraphQLInputObjectType({
  name: 'GlAccountClassInputType',
  description: 'input type for GlAccountClass',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountClassId: {type: GraphQLString},
    isAssetClass: {type: GraphQLBoolean},
    parentClassId: {type: GraphQLString}
  })
});

export {GlAccountClassInputType};
    