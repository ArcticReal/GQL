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

const ProductStoreCatalogInputType = new GraphQLInputObjectType({
  name: 'ProductStoreCatalogInputType',
  description: 'input type for ProductStoreCatalog',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreCatalogInputType};
    