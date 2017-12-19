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

const ProductStoreGroupTypeInputType = new GraphQLInputObjectType({
  name: 'ProductStoreGroupTypeInputType',
  description: 'input type for ProductStoreGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    productStoreGroupTypeId: {type: GraphQLString}
  })
});

export {ProductStoreGroupTypeInputType};
    