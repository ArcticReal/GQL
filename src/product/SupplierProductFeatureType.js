
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const SupplierProductFeature = new GraphQLObjectType({
  name: 'SupplierProductFeatureType',
  description: 'Type for SupplierProductFeature in product',

  fields: () => ({
    idCode: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    description: {type: GraphQLString},
    uomId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {SupplierProductFeature};
    