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

const ProductStoreGroupTypeResponseType = new GraphQLObjectType({
  name: 'ProductStoreGroupTypeResponseType',
  description: 'response type for ProductStoreGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    productStoreGroupTypeId: {type: GraphQLString}
  })
});

export {ProductStoreGroupTypeResponseType};
    