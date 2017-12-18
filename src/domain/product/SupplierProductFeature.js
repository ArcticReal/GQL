
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



const SupplierProductFeatureType = new GraphQLObjectType({
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

export {SupplierProductFeatureType};
    




const SupplierProductFeatureInputType = new GraphQLInputObjectType({
  name: 'SupplierProductFeatureInputType',
  description: 'input type for SupplierProductFeature',

  fields: () => ({
    description: {type: GraphQLString},
    idCode: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    uomId: {type: GraphQLString}
  })
});

export {SupplierProductFeatureInputType};
    