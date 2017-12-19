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

const ProductStoreGroupInputType = new GraphQLInputObjectType({
  name: 'ProductStoreGroupInputType',
  description: 'input type for ProductStoreGroup',

  fields: () => ({
    description: {type: GraphQLString},
    primaryParentGroupId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    productStoreGroupName: {type: GraphQLString},
    productStoreGroupTypeId: {type: GraphQLString}
  })
});

export {ProductStoreGroupInputType};
    