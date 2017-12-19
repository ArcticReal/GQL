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

const SupplierRatingTypeInputType = new GraphQLInputObjectType({
  name: 'SupplierRatingTypeInputType',
  description: 'input type for SupplierRatingType',

  fields: () => ({
    description: {type: GraphQLString},
    supplierRatingTypeId: {type: GraphQLString}
  })
});

export {SupplierRatingTypeInputType};
    