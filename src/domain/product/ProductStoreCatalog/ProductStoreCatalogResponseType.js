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

const ProductStoreCatalogResponseType = new GraphQLObjectType({
  name: 'ProductStoreCatalogResponseType',
  description: 'response type for ProductStoreCatalog',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreCatalogResponseType};
    