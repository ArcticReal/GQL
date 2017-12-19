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

const ProductCategoryTypeInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryTypeInputType',
  description: 'input type for ProductCategoryType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productCategoryTypeId: {type: GraphQLString}
  })
});

export {ProductCategoryTypeInputType};
    